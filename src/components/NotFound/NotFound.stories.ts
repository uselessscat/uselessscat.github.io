import NotFound from "./NotFound.astro";

export default {
  title: "Components/Organisms/NotFound",
  component: NotFound,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Spanish = {
  args: {
    lang: "es",
  },
};

export const English = {
  args: {
    lang: "en",
  },
};
