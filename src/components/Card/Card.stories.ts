import Card from "./Card.astro";

const content = `
  <p class="font-display text-xs tracking-wider text-gold-text">// CARD</p>
  <p class="mt-3 text-sm leading-relaxed text-cream/80">
    Reusable pixel frame for content panels.
  </p>
`;

export default {
  title: "Components/Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    padding: "md",
    slots: { default: content },
  },
};

export const Dim = {
  args: {
    variant: "dim",
    padding: "md",
    slots: { default: content },
  },
};

export const Gold = {
  args: {
    variant: "gold",
    padding: "md",
    slots: { default: content },
  },
};

export const Glow = {
  args: {
    variant: "glow",
    padding: "md",
    slots: { default: content },
  },
};
