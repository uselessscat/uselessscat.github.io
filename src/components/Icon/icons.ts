// UI icon map based on Lucide.
//
// Each icon is imported explicitly with deep imports
// (`@lucide/astro/icons/<kebab-case>`) instead of the generic `icons` export,
// so the bundle stays tree-shakeable. When you add an icon here,
// `IconName` widens automatically.
import type { AstroComponent } from "@lucide/astro";

import ArrowRight from "@lucide/astro/icons/arrow-right";
import CalendarDays from "@lucide/astro/icons/calendar-days";
import Clock from "@lucide/astro/icons/clock";
import Cloud from "@lucide/astro/icons/cloud";
import Code from "@lucide/astro/icons/code";
import Diamond from "@lucide/astro/icons/diamond";
import MapPin from "@lucide/astro/icons/map-pin";
import MessageSquare from "@lucide/astro/icons/message-square";
import Moon from "@lucide/astro/icons/moon";
import Sparkles from "@lucide/astro/icons/sparkles";
import Star from "@lucide/astro/icons/star";
import Sun from "@lucide/astro/icons/sun";
import Terminal from "@lucide/astro/icons/terminal";
import Ticket from "@lucide/astro/icons/ticket";
import Users from "@lucide/astro/icons/users";

export const iconMap = {
  diamond: Diamond,
  arrow: ArrowRight,
  calendar: CalendarDays,
  users: Users,
  chat: MessageSquare,
  star: Star,
  code: Code,
  pin: MapPin,
  clock: Clock,
  cloud: Cloud,
  ticket: Ticket,
  sparkle: Sparkles,
  terminal: Terminal,
  sun: Sun,
  moon: Moon,
} as const satisfies Record<string, AstroComponent>;

export type IconName = keyof typeof iconMap;
