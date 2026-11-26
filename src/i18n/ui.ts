export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";

const es = {
  "layout.title": "IV Devs — Comunidad tech de la IV Región",
  "layout.description":
    "Comunidad de desarrolladores de la IV Región de Coquimbo. Meetups, talleres y conferencias sobre tech, cloud, IA y agentes.",
  "a11y.skipToContent": "Saltar al contenido",
  "nav.label": "Navegación principal",
  "nav.openMenu": "Abrir menú",
  "nav.closeMenu": "Cerrar menú",
  "nav.home": "Inicio",
  "nav.manifesto": "Manifiesto",
  "nav.codeOfConduct": "Código de Conducta",
  "nav.events": "Eventos",
  "nav.blog": "Blog",
  "nav.press": "En la Prensa",
  "nav.homeAria": "IV Devs, ir al inicio",
  "langSwitcher.label": "Seleccionar idioma",
  "langSwitcher.switchTo": "Cambiar a {language}",

  // Home
  "home.eventsAria": "Meetups y comunidad",
  "hero.cta": "unirme--canal whatsapp",
  "meetup.heading": "PRÓXIMO MEETUP",
  "meetup.freeEntry": "Entrada liberada · cupos limitados",
  "meetup.signUp": "inscribirme",
  "meetup.opensNewTab": "(se abre en una pestaña nueva)",
  "meetup.time": "19:00 hrs",
  "meetup.timezone": "GMT-3",
  "counters.heading": "CONTADORES",
  "counters.free": "GRATUITO",
  "counters.freeDescription":
    "Meetups abiertos, sin costo y para todos los niveles.",
  "counters.workshops": "TALLERES",
  "counters.workshopsDescription":
    "Todo el material de nuestros talleres, abierto.",
  "counters.material": "material",
  "counters.viewMaterial": "ver material",
  "counters.manifestoTag": "// MANIFIESTO",
  "counters.manifestoQuote": "El todo es más que la suma de las partes.",
  "counters.readManifesto": "leer manifiesto",
  "pastEvents.heading": "EVENTOS PASADOS",
  "timeline.heading": "LÍNEA DE TIEMPO",
  "timeline.ariaLabel": "Línea de tiempo de la comunidad",

  // Common pieces
  "themeToggle.switchToLight": "Cambiar a tema claro",
  "themeToggle.switchToDark": "Cambiar a tema oscuro",
  "contentPage.backHome": "volver al inicio",

  // Inner pages
  "blog.title": "BLOG",
  "blog.description":
    "Notas, entrevistas y aprendizajes escritos por la comunidad IV Devs.",
  "blog.eyebrow": "// ARCHIVO 2017",
  "blog.intro":
    "El blog de IV Devs está en pausa mientras migramos el archivo. Estos son algunos de los artículos que escribimos entre 2017 y 2019, cuando la comunidad empezaba a tomar forma en La Serena.",
  "blog.ctaLead":
    "¿Quieres escribir para el blog o proponer un tema? Escríbenos a",
  "press.title": "EN LA PRENSA",
  "press.description":
    "Apariciones de IV Devs en medios regionales y nacionales.",
  "press.eyebrow": "// ARCHIVO",
  "press.intro":
    "Desde 2015 la comunidad ha aparecido en medios regionales y nacionales. Este es un archivo de algunas de esas conversaciones.",
  "notFound.title": "404 · NI CON MAPA PIRATA",
  "notFound.description":
    "Seguimos las pistas hasta Guayacán, pero esta página no apareció.",
  "notFound.eyebrow": "// ERROR 404",
  "notFound.intro":
    "Seguimos las pistas hasta Guayacán, pero esta página no apareció. Puede que el tesoro esté en otra URL o que los piratas se hayan llevado el archivo.",
  "notFound.outroLead":
    "Vuelve al inicio o revisa los próximos meetups. Si crees que es un error, escríbenos a",
  "notFound.cta": "volver a tierra firme",
  "notFound.mapLabel": "// CARTA DE NAVEGACIÓN",
  "notFound.mapRegion": "GUAYACÁN / IV REGIÓN",
  "notFound.mapCoast": "COSTA DE COQUIMBO",
  "notFound.mapTreasure": "ACÁ NO HAY TESORO",
  "notFound.mapNote": "sólo una ruta rota",
  "notFound.mapScale": "ESCALA 1:404",
  "notFound.mapLat": "LAT: NO ENCONTRADA",
  "notFound.mapLong": "LONG: NI CON MAPA",
  "notFound.mapWest": "O",
} as const;

export type UIKey = keyof typeof es;
export type Lang = keyof typeof languages;

export const ui = {
  es,
  en: {
    "layout.title": "IV Devs — Tech Community of the IV Region",
    "layout.description":
      "Developer community from the IV Region of Coquimbo. Meetups, workshops, and conferences about tech, cloud, AI, and agents.",
    "a11y.skipToContent": "Skip to content",
    "nav.label": "Main navigation",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.home": "Home",
    "nav.manifesto": "Manifesto",
    "nav.codeOfConduct": "Code of Conduct",
    "nav.events": "Events",
    "nav.blog": "Blog",
    "nav.press": "In the Press",
    "nav.homeAria": "IV Devs, back to home",
    "langSwitcher.label": "Select language",
    "langSwitcher.switchTo": "Switch to {language}",

    // Home
    "home.eventsAria": "Meetups and community",
    "hero.cta": "join--whatsapp channel",
    "meetup.heading": "NEXT MEETUP",
    "meetup.freeEntry": "Free entry · limited seats",
    "meetup.signUp": "sign up",
    "meetup.opensNewTab": "(opens in a new tab)",
    "meetup.time": "7:00 PM",
    "meetup.timezone": "GMT-3",
    "counters.heading": "COUNTERS",
    "counters.free": "FREE",
    "counters.freeDescription":
      "Open meetups, free of charge, for all skill levels.",
    "counters.workshops": "WORKSHOPS",
    "counters.workshopsDescription":
      "All our workshop material, open to everyone.",
    "counters.material": "material",
    "counters.viewMaterial": "view material",
    "counters.manifestoTag": "// MANIFESTO",
    "counters.manifestoQuote":
      "The whole is greater than the sum of its parts.",
    "counters.readManifesto": "read manifesto",
    "pastEvents.heading": "PAST EVENTS",
    "timeline.heading": "TIMELINE",
    "timeline.ariaLabel": "Community timeline",

    // Common pieces
    "themeToggle.switchToLight": "Switch to light theme",
    "themeToggle.switchToDark": "Switch to dark theme",
    "contentPage.backHome": "back to home",

    // Inner pages
    "blog.title": "BLOG",
    "blog.description":
      "Notes, interviews, and lessons written by the IV Devs community.",
    "blog.eyebrow": "// ARCHIVE 2017",
    "blog.intro":
      "The IV Devs blog is paused while we migrate the archive. These are some of the articles we wrote between 2017 and 2019, when the community was starting to take shape in La Serena.",
    "blog.ctaLead":
      "Want to write for the blog or suggest a topic? Email us at",
    "press.title": "IN THE PRESS",
    "press.description": "IV Devs appearances in regional and national media.",
    "press.eyebrow": "// ARCHIVE",
    "press.intro":
      "Since 2015 the community has appeared in regional and national media. This is an archive of some of those conversations.",
    "notFound.title": "404 · NOT EVEN WITH A PIRATE MAP",
    "notFound.description":
      "We followed the trail to Guayacán, but this page never showed up.",
    "notFound.eyebrow": "// ERROR 404",
    "notFound.intro":
      "We followed the trail to Guayacán, but this page never showed up. Maybe the treasure is at another URL, or the pirates took the file.",
    "notFound.outroLead":
      "Head back home or check the upcoming meetups. If you think this is a mistake, email us at",
    "notFound.cta": "back to solid ground",
    "notFound.mapLabel": "// NAVIGATION CHART",
    "notFound.mapRegion": "GUAYACÁN / IV REGION",
    "notFound.mapCoast": "COQUIMBO COAST",
    "notFound.mapTreasure": "NO TREASURE HERE",
    "notFound.mapNote": "just a broken route",
    "notFound.mapScale": "SCALE 1:404",
    "notFound.mapLat": "LAT: NOT FOUND",
    "notFound.mapLong": "LONG: NO MAP",
    "notFound.mapWest": "W",
  } satisfies Record<UIKey, string>,
} as const;
