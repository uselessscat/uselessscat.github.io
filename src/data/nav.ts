// Navigation configuration. Everything the header needs to render its links,
// resolve the current page and build the home links lives here.
import { defaultLang, type Lang, type UIKey } from "../i18n/ui";
import { getLocalePath, useTranslations } from "../i18n/utils";

/** Raw navigation entry: a translation key and a locale-agnostic path. */
export interface NavItem {
  key: UIKey;
  /** Path without the locale prefix. May include an anchor (`/#eventos`). */
  href: string;
}

/** Resolved navigation entry, ready to render. */
export interface NavLink {
  label: string;
  href: string;
}

/** Primary navigation, in display order. */
export const navItems: NavItem[] = [
  { key: "nav.home", href: "/#inicio" },
  { key: "nav.manifesto", href: "/manifiesto/" },
  { key: "nav.codeOfConduct", href: "/codigo/" },
  { key: "nav.events", href: "/#eventos" },
  { key: "nav.blog", href: "/blog/" },
  { key: "nav.press", href: "/prensa/" },
];

/** Navigation entries with localized labels and paths. */
export function getNavLinks(lang: Lang): NavLink[] {
  const t = useTranslations(lang);
  return navItems.map(({ key, href }) => ({
    label: t(key),
    href: getLocalePath(lang, href),
  }));
}

/** Home path for the language: `/` in Spanish, `/en` in English. */
export function getHomePath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}`;
}

/** Home link, anchored to the hero section. */
export function getHomeHref(lang: Lang): string {
  return getLocalePath(lang, "/#inicio");
}

/** Removes the anchor and any trailing slash so paths compare reliably. */
function normalizePath(path: string): string {
  return path.split("#")[0].replace(/\/$/, "") || "/";
}

/**
 * Whether a link points to the page currently open.
 *
 * Home anchors (`/#inicio`, `/#eventos`) share the home path, so only the exact
 * home link is marked as current; the anchor links never are.
 */
export function isNavLinkActive(
  link: NavLink,
  currentPathname: string,
  lang: Lang,
): boolean {
  const linkPath = normalizePath(link.href);
  const currentPath = normalizePath(currentPathname);
  const homePath = getHomePath(lang);

  if (linkPath === homePath) {
    return currentPath === homePath && link.href === getHomeHref(lang);
  }

  return linkPath === currentPath;
}
