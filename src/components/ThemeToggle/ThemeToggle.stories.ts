import ThemeToggle from "./ThemeToggle.astro";

export default {
  title: "Components/Atoms/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {},
};

/** Variant for reviewing the moon icon without changing the toolbar. */
export const Light = {
  args: {},
  globals: {
    theme: "light",
  },
};
