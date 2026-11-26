import { getRelativeLocaleUrl } from "astro:i18n";
import { setLocaleUrlBuilder } from "./utils";

setLocaleUrlBuilder((locale, path) =>
  getRelativeLocaleUrl(locale, path === "/" ? "" : path),
);
