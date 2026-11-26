import { defaultLang, type Lang, type UIKey, ui } from "./ui";

/**
 * Localized path builder. In Astro it is replaced by `getRelativeLocaleUrl`
 * (see `src/i18n/astro.ts`); the fallback lets these helpers run in Storybook,
 * without Astro's i18n context.
 */
type LocaleUrlBuilder = (locale: Lang, path: string) => string;

const fallbackLocaleUrl: LocaleUrlBuilder = (locale, path) => {
  const prefix = locale === defaultLang ? "" : `/${locale}`;
  if (path === "/") return prefix ? `${prefix}/` : "/";

  const withTrailingSlash = path.endsWith("/") ? path : `${path}/`;
  return `${prefix}${withTrailingSlash}`;
};

let buildLocaleUrl: LocaleUrlBuilder = fallbackLocaleUrl;

/** Registers Astro's official path builder. */
export function setLocaleUrlBuilder(builder: LocaleUrlBuilder): void {
  buildLocaleUrl = builder;
}

/**
 * Detects the language from the first segment of the path.
 * Works outside Astro (for example, in Storybook) because it only uses `URL`.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split("/");
  return firstSegment === "en" ? "en" : defaultLang;
}

/**
 * Normalizes the locale provided by Astro (or any string) to a `Lang`.
 * With no locale —for example in Storybook— it falls back to Spanish.
 */
export function toLang(locale: string | null | undefined): Lang {
  return locale === "en" ? "en" : defaultLang;
}

/** Returns the translator for the language, falling back to Spanish. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    const dictionary = ui[lang] as Partial<Record<UIKey, string>>;
    return dictionary[key] ?? ui[defaultLang][key];
  };
}

/** Splits the path from a possible hash or query string. */
function splitPath(path: string) {
  const match = path.match(/^([^?#]*)([?#].*)?$/);
  return {
    pathname: match?.[1] ?? path,
    suffix: match?.[2] ?? "",
  };
}

/**
 * Removes the `/en` prefix and normalizes the home page to `/`.
 * Keeps the hash and query string if they were included.
 */
export function getPathWithoutLocale(pathname: string): string {
  const { pathname: path, suffix } = splitPath(pathname);
  const withoutLocale = path.replace(/^\/?en(?=\/|$)/, "") || "/";
  const normalized = withoutLocale.startsWith("/")
    ? withoutLocale
    : `/${withoutLocale}`;

  return `${normalized}${suffix}`;
}

/**
 * Pages whose slug changes per language. The key is the canonical Spanish
 * path; the values are the equivalent paths in each language.
 */
const localizedSlugs: Record<string, Partial<Record<Lang, string>>> = {
  "/manifiesto": { es: "/manifiesto", en: "/manifest" },
  "/codigo": {
    es: "/codigo",
    en: "/coc",
  },
  "/prensa": { es: "/prensa", en: "/press" },
};

/** Home page anchors that are also translated. */
const localizedAnchors: Record<string, Partial<Record<Lang, string>>> = {
  "#inicio": { es: "#inicio", en: "#home" },
  "#eventos": { es: "#eventos", en: "#events" },
};

/** Translates a path's slug to the given language (without the locale prefix). */
function translateSlug(locale: Lang, pathname: string): string {
  const normalized = pathname.replace(/\/$/, "") || "/";
  for (const [canonical, slugs] of Object.entries(localizedSlugs)) {
    const isKnown = Object.values(slugs).includes(normalized);
    if (isKnown) return slugs[locale] ?? canonical;
  }
  return normalized;
}

/** Translates a path's suffix (query/hash) to the given language. */
function translateSuffix(locale: Lang, suffix: string): string {
  const hashIndex = suffix.indexOf("#");
  if (hashIndex === -1) return suffix;

  const anchor = suffix.slice(hashIndex);
  const translated = Object.entries(localizedAnchors).find(([, anchors]) =>
    Object.values(anchors).includes(anchor),
  );

  return (
    suffix.slice(0, hashIndex) +
    (translated ? (translated[1][locale] ?? translated[0]) : anchor)
  );
}

/** Localized path: `es` without a prefix and `en` under `/en/...`. */
export function getLocalePath(locale: Lang, path: string): string {
  const { pathname, suffix } = splitPath(path);
  const normalized =
    pathname === ""
      ? "/"
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  const localized = buildLocaleUrl(locale, translateSlug(locale, normalized));

  return `${localized || "/"}${translateSuffix(locale, suffix)}`;
}

/** Equivalent path of the current page in the given language. */
export function getLocaleSwitcherHref(
  locale: Lang,
  currentPathname: string,
): string {
  return getLocalePath(locale, getPathWithoutLocale(currentPathname));
}
