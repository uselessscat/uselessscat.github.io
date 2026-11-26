import type {
  AstroRenderer,
  ProjectAnnotations,
} from "@storybook-astro/framework";
import type { DecoratorFunction } from "storybook/internal/csf";
import { themes } from "storybook/theming";

import "../src/styles/global.css";
import "./preview.css";
import ThemeScope from "./ThemeScope.astro";

const withTheme: DecoratorFunction<AstroRenderer> = (Story, context) => ({
  component: ThemeScope,
  props: {
    theme: context.globals.theme === "light" ? "light" : "dark",
    layout: context.parameters.layout ?? "fullscreen",
  },
  slots: { default: Story() },
});

const preview: ProjectAnnotations<AstroRenderer> = {
  decorators: [withTheme],
  initialGlobals: {
    theme: "dark",
  },
  globalTypes: {
    theme: {
      description: "Canvas Theme",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      theme: themes.light,
    },
    backgrounds: {
      default: "night",
      values: [
        { name: "night", value: "#08060f" },
        { name: "paper", value: "#F7F5F0" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Components", ["Atoms", "Molecules", "Organisms"]],
      },
    },
  },
};

export default preview;
