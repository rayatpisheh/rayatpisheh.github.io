# Portfolio

Personal site for Mohammad Rayat Pisheh, a senior .NET developer. Static Astro site with typed content, semantic HTML, and plain CSS.

## Stack

- [Astro](https://astro.build) 7, static output, TypeScript strict
- [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/) for a small hero animation island
- [@ai-animate/core](https://www.npmjs.com/package/@ai-animate/core) (`StreamText`, `MorphText`) for programming-themed hero motion, with `gsap` required by that package's barrel export
- Plain CSS in `src/styles/global.css` (no utility framework)
- Self-hosted [Outfit](https://fontsource.org/fonts/outfit) (variable) and [IBM Plex Mono](https://fontsource.org/fonts/ibm-plex-mono) via Fontsource
- [astro-icon](https://github.com/natemoo-re/astro-icon) with Iconify sets [Solar](https://icon-sets.iconify.design/solar/) (`bold-duotone` for content, `line-duotone` for controls) and [Phosphor](https://icon-sets.iconify.design/ph/) duotone for the LinkedIn mark. Icons are inlined at build time from `@iconify-json/solar` and `@iconify-json/ph`.
- Brand marks for individual skills live as local SVGs under `src/icons/tech/`, sourced from [Tech Stack Icons](https://www.tech-stack-icons.com/). Skills without a clear brand mark omit the icon.
- GitHub Actions deploy to GitHub Pages (`.github/workflows/deploy.yml`)

Light client-side JavaScript: checkbox mobile menu, theme preference in `localStorage`, IntersectionObserver section reveals, expandable project descriptions, a project-image lightbox, and a scroll-to-top control. The hero loads one React island (`HeroCodeMotion.tsx`) with `@ai-animate/core`. Motion respects `prefers-reduced-motion`.

## Design

Wide asymmetric layout (max `72rem`) with a brand-first hero, animated code-window visual (`StreamText` + `MorphText`), skill bento, a compact two-column project index, timeline experience, and a contact panel. Cobalt accent is locked across light and dark themes. Soft grain and radial washes provide atmosphere without section theme flips.

## Layout

| Path | Role |
| --- | --- |
| `src/data/portfolio.ts` | All editable copy: profile, skills, projects, experience, contact |
| `src/components/` | Header, footer, page sections, `HeroCodeMotion.tsx`, `ScrollToTop`, `Lightbox`, and `Icon.astro` |
| `src/icons/` | Local SVGs for `astro-icon`, including `tech/` brand marks for skills |
| `src/layouts/BaseLayout.astro` | Document shell, metadata, fonts |
| `src/pages/index.astro` | Home page |
| `src/pages/404.astro` | Not found |
| `src/lib/url.ts` | Base-path helper for GitHub Pages |
| `src/scripts/` | Theme toggle, scroll reveal, project description toggle, image lightbox, scroll-to-top |
| `src/styles/global.css` | Tokens, layout, light and dark themes |
| `astro.config.mjs` | `site`, `base`, static output |
| `public/` | Favicon, `.nojekyll`, company marks in `public/logos/`, project mockups in `public/mockup/` |

## Edit content

Update `src/data/portfolio.ts`.

- Profile, summary, and highlights are limited to confirmed background.
- Add a project by appending an object to `projects`. Include an `image` path under `public/mockup/`. Set `placeholder: false` once the description and links are real. Optional `links` entries are rendered only when present. Projects render as compact rows (thumbnail, title, three-line description with a More toggle, stack, links). The hero uses an animated C# code window instead of a featured project image.
- Replace the experience placeholder with verified company names, dates, and responsibilities. Leave `responsibilities` empty until you have them. Do not add metrics you cannot confirm.
- Replace the contact `href` and `text` values. Email stays a `mailto:` link.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/`.

```bash
npm run build
npm run preview
```

## GitHub Pages

1. In `astro.config.mjs`, set `site` to `https://<username>.github.io`.
2. Set `base` to `/<repository-name>` (leading slash, no trailing slash). If the repository is `<username>.github.io`, remove `base`.
3. Replace the placeholders in `src/data/portfolio.ts`.
4. Push the `main` branch.
5. In the repository on GitHub, open **Settings**, then **Pages**, and set **Source** to **GitHub Actions**.

The included workflow builds the site and deploys `dist`. The project URL is `https://<username>.github.io/<repository-name>/`.
