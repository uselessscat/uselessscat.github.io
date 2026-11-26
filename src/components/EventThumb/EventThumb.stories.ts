import EventThumb from "./EventThumb.astro";

export default {
  title: "Components/Atoms/EventThumb",
  component: EventThumb,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Violet = {
  args: {
    icon: "terminal",
    tone: "violet",
  },
};

export const Blue = {
  args: {
    icon: "star",
    tone: "blue",
  },
};

export const Rose = {
  args: {
    icon: "users",
    tone: "rose",
  },
};
