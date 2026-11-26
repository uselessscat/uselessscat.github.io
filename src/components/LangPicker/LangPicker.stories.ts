import LangPicker from "./LangPicker.astro";

export default {
  title: "Components/Atoms/LangPicker",
  component: LangPicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    lang: {
      control: "inline-radio",
      options: ["es", "en"],
    },
  },
};

export const Default = {
  args: {
    lang: "es",
    currentPathname: "/",
  },
};

export const English = {
  args: {
    lang: "en",
    currentPathname: "/en/",
  },
};
