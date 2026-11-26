import Facebook from "@thesvg/astro/facebook";
import Github from "@thesvg/astro/github";
import Instagram from "@thesvg/astro/instagram";
import Meetup from "@thesvg/astro/meetup";
import Slack from "@thesvg/astro/slack";
import Whatsapp from "@thesvg/astro/whatsapp";
import X from "@thesvg/astro/x";
import Youtube from "@thesvg/astro/youtube";

export const socialIcons = {
  github: Github,
  meetup: Meetup,
  instagram: Instagram,
  x: X,
  slack: Slack,
  facebook: Facebook,
  youtube: Youtube,
  whatsapp: Whatsapp,
} as const;

export type SocialIconName = keyof typeof socialIcons;
