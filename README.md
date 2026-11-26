# IV Devs · Website

Website for the **IV Devs** community (La Serena · Coquimbo). A pixel/terminal-styled landing page with stats, the next meetup, past events, a timeline, and a few content pages. The site is bilingual (Spanish by default, English under `/en`).

## Stack

- [Astro](https://docs.astro.build)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Storybook](https://storybook.js.org) with [`@storybook-astro/framework`](https://storybook-astro.org)
- [Lucide](https://lucide.dev) and [`@thesvg`](https://thesvg.org) icons

## Getting started

Requires [Bun](https://bun.sh) (version pinned in `mise.toml`).

```sh
bun install
bun run dev        # local site
bun run storybook  # component workshop
```

Other scripts live in `package.json`. Run `bun run validate` (i18n check + type check + lint + format check) before opening a PR; CI runs the same checks (`.github/workflows/quality-checks.yml`).

## Project layout

| Path              | What's there                                            |
| ----------------- | ------------------------------------------------------- |
| `src/pages/`      | Pages and routes (Spanish at root, English under `en/`) |
| `src/layouts/`    | Shared page shell                                       |
| `src/components/` | One folder per component, with its CSS and stories      |
| `src/data/`       | Editable site content                                   |
| `src/i18n/`       | UI strings, language helpers and localized slugs        |
| `src/styles/`     | Global styles and theme tokens                          |
| `.storybook/`     | Storybook configuration                                 |

## Content and translations

Site content lives in `src/data/site.ts`; data that depends on the language is read through its getters. UI strings are split per language and typed. Spanish is the source of truth: add a key there first, and `astro check` will fail if `en` is missing it or defines an extra one. `bun run i18n:check` also reports empty strings, mismatched `{placeholders}` and unused keys (`bun run i18n:check -- --strict` fails on unused keys, useful for cleanup). Localized routes/anchors are mapped in `src/i18n/utils.ts`. New pages go in `src/pages/` and usually compose `Layout`, `Nav`, `ContentPage` and `Footer`.

## Design and theming

- Palette, semantic tokens and light-theme overrides: `src/styles/global.css`.
- Fonts: `astro.config.mjs` (`fonts`), used by the `font-*` utilities in `global.css`.
- Pixel frame and its variants: `src/components/Card/`.
- Night/day sky background: `src/components/Sky/Sky.css`.
- Theme switch: `src/components/ThemeToggle/`.
- Panels that must stay dark in both themes use the reusable `.theme-dark` scope.

The theme is driven by `data-theme="dark|light"`. In Storybook, use the **Theme** toolbar to preview both, or append `&globals=theme:light` to a story URL.

## Icons

UI icons are wrapped in `src/components/Icon/` (map in `icons.ts`), brand icons in `src/components/SocialIcon/` (map in `icons.ts`). Add an entry to the map to use it; types follow automatically.

## Component stories

Stories are CSF files next to each component (`*.stories.ts`), grouped as `Components/Atoms`, `Molecules` and `Organisms`. Global CSS is loaded in `.storybook/preview.ts`; slots are passed via `args.slots.default`. Prop descriptions come from the JSDoc on each component's props.

## Conventions

- Formatters and linters are configured in `.prettierrc.mjs` and `eslint.config.js`; run them with `bun run format` and `bun run lint:fix`.
- TypeScript runs in Astro strict mode (`tsconfig.json`); `bun run check` runs `astro check`.
- Deploys are handled by `.github/workflows/pages.yml` on push.
