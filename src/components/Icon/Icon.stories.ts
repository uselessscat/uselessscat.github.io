import Icon from "./Icon.astro";

export default {
  title: "Components/Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    name: "diamond",
    class: "size-16 text-ember-400",
  },
};

export const Terminal = {
  args: {
    name: "terminal",
    class: "size-16 text-gold-400",
  },
};

export const Star = {
  args: {
    name: "star",
    class: "size-16 text-cream",
  },
};

export const Thin = {
  args: {
    name: "sparkle",
    class: "size-16 text-ember-400",
    strokeWidth: 1,
  },
};

export const Labeled = {
  args: {
    name: "calendar",
    class: "size-16 text-gold-400",
    label: "Next meetup",
  },
};

export const Sun = {
  args: {
    name: "sun",
    class: "size-16 text-gold-400",
  },
};

export const Moon = {
  args: {
    name: "moon",
    class: "size-16 text-cream",
  },
};
