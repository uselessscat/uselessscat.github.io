import en from "./locales/en.json";
import es from "./locales/es.json";

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export type UIKey = keyof typeof es;
export type Lang = keyof typeof languages;

export const ui = {
  es,
  en: en satisfies Record<UIKey, string>,
} as const;
