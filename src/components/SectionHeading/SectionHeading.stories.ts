import SectionHeading from "./SectionHeading.astro";

export default {
  title: "Components/Atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export const Default = {
  args: {
    title: "STATS",
  },
};

export const WithoutLine = {
  args: {
    title: "PAST EVENTS",
    line: false,
  },
};
