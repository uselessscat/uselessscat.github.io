// Editable site content. Change these values without touching the components.
// Data that depends on the language lives in `contentByLang` and is read through
// the getters (`getSite`, `getNavLinks`, ...).
import type { EventTone } from "../components/EventThumb/types";
import type { IconName } from "../components/Icon/icons";
import type { SocialIconName } from "../components/SocialIcon/icons";
import { type Lang, type UIKey } from "../i18n/ui";
import { getLocalePath, useTranslations } from "../i18n/utils";

export interface Site {
  name: string;
  tagline: string;
  description: string;
  email: string;
  location: string;
  whatsapp: string;
  meetup: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Meetup {
  kicker: string;
  title: string;
  date: string;
  place: string;
  status: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: IconName;
}

export interface Ally {
  name: string;
  tag: string;
}

export interface PastEvent {
  title: string;
  meta: string;
  date: string;
  icon: IconName;
  tone: EventTone;
}

export interface TimelineItem {
  year: string;
  label: string;
  current?: boolean;
}

export interface Social {
  name: string;
  icon: SocialIconName;
  href: string;
}

// TODO: replace with the real WhatsApp channel link.
const WHATSAPP_URL = "https://chat.whatsapp.com/";
const MEETUP_URL = "https://www.meetup.com/IV-DEVS";

interface SiteContent {
  site: Site;
  meetup: Meetup;
  stats: Stat[];
  allies: Ally[];
  pastEvents: PastEvent[];
  timeline: TimelineItem[];
}

const contentByLang: Record<Lang, SiteContent> = {
  es: {
    site: {
      name: "IV Devs",
      tagline: "Devs de tech, cloud, IA y agentes. Pero de la IV Región.",
      description:
        "Comunidad de desarrolladores de la IV Región de Coquimbo. Meetups, talleres y conferencias sobre tech, cloud, IA y agentes.",
      email: "contacto@ivdevs.com",
      location: "La Serena · Coquimbo · IV Región",
      whatsapp: WHATSAPP_URL,
      meetup: MEETUP_URL,
    },
    meetup: {
      kicker: "Meetup #38",
      title: "Agentes de IA en producción",
      date: "Jueves 03 · Dic · 19:00",
      place: "La Brújula Cowork · La Serena",
      status: "Inscripciones abiertas",
      url: "https://www.meetup.com/IV-DEVS/events/",
    },
    stats: [
      { value: "32", label: "Eventos", icon: "calendar" },
      { value: "900+", label: "Asistentes", icon: "users" },
      { value: "96", label: "Charlas", icon: "chat" },
      { value: "480", label: "Miembros", icon: "diamond" },
    ],
    allies: [
      { name: "AWS User Group Coquimbo", tag: "Comunidad aliada" },
      { name: "ULS · Universidad de La Serena", tag: "Talleres ULS" },
      { name: "La Brújula Cowork", tag: "Sede La Serena" },
    ],
    pastEvents: [
      {
        title: "Reboot · La Serena",
        meta: "Meetup presencial",
        date: "08/06/2019",
        icon: "terminal",
        tone: "violet",
      },
      {
        title: "DevConf 2018",
        meta: "Conferencia regional",
        date: "17/11/2018",
        icon: "star",
        tone: "blue",
      },
      {
        title: "Scrum & Agile",
        meta: "Meetup #12",
        date: "02/09/2017",
        icon: "users",
        tone: "rose",
      },
    ],
    timeline: [
      { year: "2015", label: "Nace IV Devs en La Serena" },
      { year: "2017", label: "Primera DevConf regional" },
      { year: "2019", label: "Reboot Coquimbo" },
      { year: "2021", label: "La comunidad se vuelve online" },
      { year: "2023", label: "Volvemos a vernos en persona" },
      { year: "2024", label: "Nueva identidad IV Devs" },
      { year: "2025", label: "900+ asistentes acumulados" },
      { year: "2026", label: "Seguimos construyendo", current: true },
    ],
  },
  en: {
    site: {
      name: "IV Devs",
      tagline: "Devs into tech, cloud, AI, and agents. But from the IV Region.",
      description:
        "Developer community from the IV Region of Coquimbo. Meetups, workshops, and conferences about tech, cloud, AI, and agents.",
      email: "contacto@ivdevs.com",
      location: "La Serena · Coquimbo · IV Region",
      whatsapp: WHATSAPP_URL,
      meetup: MEETUP_URL,
    },
    meetup: {
      kicker: "Meetup #38",
      title: "AI agents in production",
      date: "Thursday, Dec 3 · 7:00 PM",
      place: "La Brújula Cowork · La Serena",
      status: "Registration open",
      url: "https://www.meetup.com/IV-DEVS/events/",
    },
    stats: [
      { value: "32", label: "Events", icon: "calendar" },
      { value: "900+", label: "Attendees", icon: "users" },
      { value: "96", label: "Talks", icon: "chat" },
      { value: "480", label: "Members", icon: "diamond" },
    ],
    allies: [
      { name: "AWS User Group Coquimbo", tag: "Partner community" },
      { name: "ULS · Universidad de La Serena", tag: "ULS workshops" },
      { name: "La Brújula Cowork", tag: "La Serena venue" },
    ],
    pastEvents: [
      {
        title: "Reboot · La Serena",
        meta: "In-person meetup",
        date: "08/06/2019",
        icon: "terminal",
        tone: "violet",
      },
      {
        title: "DevConf 2018",
        meta: "Regional conference",
        date: "17/11/2018",
        icon: "star",
        tone: "blue",
      },
      {
        title: "Scrum & Agile",
        meta: "Meetup #12",
        date: "02/09/2017",
        icon: "users",
        tone: "rose",
      },
    ],
    timeline: [
      { year: "2015", label: "IV Devs is born in La Serena" },
      { year: "2017", label: "First regional DevConf" },
      { year: "2019", label: "Reboot Coquimbo" },
      { year: "2021", label: "The community goes online" },
      { year: "2023", label: "We meet in person again" },
      { year: "2024", label: "New IV Devs identity" },
      { year: "2025", label: "900+ cumulative attendees" },
      { year: "2026", label: "Still building", current: true },
    ],
  },
};

/** General site content in the given language. */
export function getSite(lang: Lang): Site {
  return contentByLang[lang].site;
}

/** Localized upcoming meetup (kicker, place and URL do not change). */
export function getMeetup(lang: Lang): Meetup {
  return contentByLang[lang].meetup;
}

/** Community counters. */
export function getStats(lang: Lang): Stat[] {
  return contentByLang[lang].stats;
}

/** Allied communities and spaces. */
export function getAllies(lang: Lang): Ally[] {
  return contentByLang[lang].allies;
}

/** Past events: proper names are kept. */
export function getPastEvents(lang: Lang): PastEvent[] {
  return contentByLang[lang].pastEvents;
}

/** Community milestones. */
export function getTimeline(lang: Lang): TimelineItem[] {
  return contentByLang[lang].timeline;
}

const navItems: { key: UIKey; href: string }[] = [
  { key: "nav.home", href: "/#inicio" },
  { key: "nav.manifesto", href: "/manifiesto/" },
  { key: "nav.codeOfConduct", href: "/codigo/" },
  { key: "nav.events", href: "/#eventos" },
  { key: "nav.blog", href: "/blog/" },
  { key: "nav.press", href: "/prensa/" },
];

/** Navigation links with localized label and path. */
export function getNavLinks(lang: Lang): NavLink[] {
  const t = useTranslations(lang);
  return navItems.map(({ key, href }) => ({
    label: t(key),
    href: getLocalePath(lang, href),
  }));
}

// Check that each social link points to the current official account.
export const socials = [
  { name: "GitHub", icon: "github", href: "https://github.com/iv-devs" },
  { name: "Meetup", icon: "meetup", href: MEETUP_URL },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://instagram.com/ivdevs",
  },
  { name: "X", icon: "x", href: "https://twitter.com/iv_devs" },
  { name: "Slack", icon: "slack", href: "https://ivdevs.slack.com/" },
  { name: "Facebook", icon: "facebook", href: "https://fb.com/ivdevs" },
  { name: "YouTube", icon: "youtube", href: "https://youtube.com/@ivdevs" },
  { name: "WhatsApp", icon: "whatsapp", href: WHATSAPP_URL },
] satisfies Social[];
