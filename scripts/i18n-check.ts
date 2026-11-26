/**
 * Translation dictionary checker.
 *
 * Reads the JSON dictionaries in `src/i18n/locales` and verifies they stay in
 * sync: missing/extra keys, empty values, mismatched `{placeholders}` and keys
 * that `src/` no longer uses.
 *
 * Usage:
 *   bun scripts/i18n-check.ts            # keys are in sync, unused keys warn
 *   bun scripts/i18n-check.ts --strict   # unused keys fail too
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defaultLang, languages } from "../src/i18n/ui";

type Dictionary = Record<string, string>;

const strict = process.argv.includes("--strict");
const root = fileURLToPath(new URL("..", import.meta.url));
const localesDir = join(root, "src/i18n/locales");
const sourceDir = join(root, "src");
const uiFile = join(root, "src/i18n/ui.ts");

const errors: string[] = [];
const warnings: string[] = [];

/** Extracts the `{name}` placeholders of a message. */
function placeholders(message: string): Set<string> {
  return new Set(
    [...message.matchAll(/\{(\w+)\}/g)].map((match) => match[1] ?? ""),
  );
}

function dictionaryPath(locale: string): string {
  return join(localesDir, `${locale}.json`);
}

function readDictionary(locale: string): Dictionary {
  const file = dictionaryPath(locale);
  const parsed: unknown = JSON.parse(readFileSync(file, "utf8"));

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`src/i18n/locales/${locale}.json must be a JSON object`);
  }

  const dictionary: Dictionary = {};
  for (const [key, value] of Object.entries(parsed)) {
    if (typeof value === "string") {
      dictionary[key] = value;
    } else {
      errors.push(`${locale}: "${key}" is not a string`);
    }
  }

  return dictionary;
}

/** Walks `src/` looking for files that may reference a translation key. */
function collectFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (path === localesDir || entry.name === "node_modules") return [];
      if (entry.name.startsWith(".")) return [];
      return collectFiles(path);
    }

    if (path === uiFile) return [];
    return /\.(astro|ts|tsx|js|jsx|mjs|cjs|json)$/.test(entry.name)
      ? [path]
      : [];
  });
}

/**
 * Collects quoted dotted strings (for example `"nav.home"`), which is how keys
 * reach `t()`, `navItems` and the dictionaries themselves. Keys built at
 * runtime cannot be detected; `--strict` should be used with that in mind.
 */
function collectUsedKeys(): Set<string> {
  const literalKey = /["'`]([A-Za-z][\w]*(?:\.[\w-]+)+)["'`]/g;
  const used = new Set<string>();

  for (const file of collectFiles(sourceDir)) {
    const contents = readFileSync(file, "utf8");
    for (const match of contents.matchAll(literalKey)) {
      if (match[1]) used.add(match[1]);
    }
  }

  return used;
}

const declaredLocales = Object.keys(languages).sort();
const availableLocales = readdirSync(localesDir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => file.slice(0, -".json".length))
  .sort();

for (const locale of declaredLocales) {
  if (!availableLocales.includes(locale)) {
    errors.push(`missing dictionary: src/i18n/locales/${locale}.json`);
  }
}

for (const locale of availableLocales) {
  if (!declaredLocales.includes(locale)) {
    errors.push(
      `unexpected dictionary: src/i18n/locales/${locale}.json (not in \`languages\`)`,
    );
  }
}

const dictionaries = new Map<string, Dictionary>();
for (const locale of availableLocales) {
  dictionaries.set(locale, readDictionary(locale));
}

const base = dictionaries.get(defaultLang);

if (!base) {
  for (const message of errors) console.error(`✗ ${message}`);
  process.exit(1);
}

const baseKeys = Object.keys(base);

for (const locale of availableLocales) {
  const dictionary = dictionaries.get(locale);
  if (!dictionary) continue;

  for (const [key, value] of Object.entries(dictionary)) {
    if (value.trim() === "") errors.push(`${locale}: "${key}" is empty`);
  }

  if (locale === defaultLang) continue;

  for (const key of baseKeys) {
    if (!(key in dictionary)) errors.push(`${locale}: missing "${key}"`);
  }

  for (const key of Object.keys(dictionary)) {
    if (!(key in base)) {
      errors.push(`${locale}: extra "${key}" (not in ${defaultLang})`);
    }
  }

  for (const key of baseKeys) {
    if (!(key in dictionary)) continue;

    const expected = placeholders(base[key] ?? "");
    const actual = placeholders(dictionary[key] ?? "");

    for (const name of expected) {
      if (!actual.has(name)) {
        errors.push(`${locale}: "${key}" is missing the {${name}} placeholder`);
      }
    }

    for (const name of actual) {
      if (!expected.has(name)) {
        errors.push(
          `${locale}: "${key}" has an unexpected {${name}} placeholder`,
        );
      }
    }
  }
}

const usedKeys = collectUsedKeys();
for (const key of baseKeys) {
  if (usedKeys.has(key)) continue;

  const message = `unused "${key}" (not referenced in src/)`;
  if (strict) {
    errors.push(message);
  } else {
    warnings.push(message);
  }
}

console.log(`i18n: ${baseKeys.length} keys · ${availableLocales.join(", ")}`);

for (const message of errors) console.error(`✗ ${message}`);
for (const message of warnings) console.warn(`! ${message}`);

if (errors.length > 0 || warnings.length > 0) {
  console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)`);
} else {
  console.log("✔ all dictionaries are in sync");
}

if (errors.length > 0) process.exit(1);
