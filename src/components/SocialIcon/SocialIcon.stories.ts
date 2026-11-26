import SocialIcon from "./SocialIcon.astro";

export default {
  title: "Components/Atoms/SocialIcon",
  component: SocialIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    name: "github",
    class: "size-16 text-cream",
  },
};

export const X = {
  args: {
    name: "x",
    class: "size-16 text-cream",
  },
};

export const WhatsApp = {
  args: {
    name: "whatsapp",
    class: "size-16 text-ember-400",
  },
};

export const Slack = {
  args: {
    name: "slack",
    class: "size-16 text-gold-400",
  },
};
