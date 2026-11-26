import ContentPage from "./ContentPage.astro";

export default {
  title: "Components/Organisms/ContentPage",
  component: ContentPage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    title: "MANIFESTO",
    eyebrow: "// COMMUNITY",
    slots: {
      default: `
        <p>
          Everyone who is part of this community firmly believes that inside every person
          there is an <strong>unmatched potential</strong> to create and positively affect
          those around us.
        </p>
        <h2>We are respectful</h2>
        <p>
          A community holds diverse opinions and points of view. We always accept them with
          respect.
        </p>
        <h2>Our commitment</h2>
        <ul>
          <li>Stay open and transparent.</li>
          <li>Contribute to the professional growth of our members.</li>
          <li>Be inclusive: our differences are what make us a unique community.</li>
        </ul>
      `,
    },
  },
};
