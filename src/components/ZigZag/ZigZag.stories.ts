import ZigZag from "./ZigZag.astro";

export default {
  title: "Components/Atoms/ZigZag",
  component: ZigZag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { class: "w-40" },
};

export const FullWidth = {
  args: { class: "w-full" },
  parameters: {
    layout: "padded",
  },
};
