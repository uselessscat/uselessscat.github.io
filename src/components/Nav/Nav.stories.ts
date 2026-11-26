import Nav from "./Nav.astro";

export default {
  title: "Components/Molecules/Nav",
  component: Nav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    currentPath: "/",
  },
};

export const ManifestActive = {
  args: {
    lang: "en",
    currentPath: "/en/manifest/",
  },
};
