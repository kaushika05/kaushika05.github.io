# Kaushika Wijerathne — research portfolio

Production portfolio for [kaywijerathne.com](https://kaywijerathne.com).

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, static export, and GitHub Pages.

## Local setup

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

`npm run build` writes the static site to `out/`.

## Content

All editable copy and links live in `src/data/content.ts`.

## Images

Each main section has an original generated halftone plate in `public/images/sections/`. The images
use the site's established navy, green, ember, coral, gold, and off-white tokens; only the medium
and compositional language came from the provided vintage halftone references.

The supplied headshot is processed to `public/images/headshot.webp` and displayed as a circular,
properly labelled image in the hero.

Generation prompts are archived in `docs/section-background-prompts.md`. Original ImageGen outputs
remain locally in `work/imagegen-source/` and are intentionally excluded from Git.

## Accessibility

- Semantic landmarks and one `h1`
- Keyboard-accessible navigation, accordion controls, and visible focus indicators
- 46px action targets and responsive type
- `prefers-reduced-motion` support
- User controls for reduced motion, increased contrast, and hiding decorative backgrounds
- Decorative section plates are CSS backgrounds and absent from the accessibility tree
- Informative headshot has alt text
- No horizontal overflow at 390px, 768px, or 1440px in automated browser checks

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, create a static export, and deploy it to GitHub
Pages. `public/CNAME` keeps the custom domain at `kaywijerathne.com`.
