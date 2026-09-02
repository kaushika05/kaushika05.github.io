# Kaushika Wijerathne portfolio

A dependency-free, single-page academic site. The deployable artifact is `site/` —
one `index.html`, one `styles.css`, no build step and no JavaScript framework.

## Design system

Warm ivory paper, near-black ink, and a single terracotta accent.

| Role | Light | Dark |
| --- | --- | --- |
| Paper | `#faf9f5` | `#262624` |
| Ink | `#141413` | `#f5f4ee` |
| Accent | `#c15f3c` | `#e08a6b` |
| Accent (small text) | `#a84b2c` | `#eaa284` |

Type is a three-way pairing: **Newsreader** (serif) for display and pull copy,
**Inter** for body and UI, **IBM Plex Mono** for the small uppercase metadata
labels and section numerals.

Layout is a single spine. Above `62rem` the page becomes a two-column grid — a
sticky mono label in the left gutter, a `42rem` measure to its right — and the
name, every section title and all body copy share one left edge. Below that
breakpoint the labels sit inline above their sections.

Both colour schemes are driven entirely by `prefers-color-scheme`; there is no
theme toggle and no stored preference.

## Preview

```bash
python -m http.server 4173 --directory site
```

## Notes for future edits

- The paper grain is a fixed full-viewport overlay with **no** `mix-blend-mode`.
  A blended layer at that size forces the whole page to re-composite on every
  scroll frame; over a light ground the plain overlay looks the same.
- `assets/og.jpg`, `favicon.ico`, `apple-icon.png` and `icon.svg` are all
  generated from the same terracotta `K` monogram and ivory palette. Regenerate
  them together if the palette changes.
- Small mono labels use `--ink-4`, which is tuned to clear 4.5:1 against the
  paper in both schemes. Don't lighten it without re-checking contrast.
- Scroll reveals are gated behind a `.js` class on `<html>`, so the page renders
  fully with JavaScript disabled, and are skipped under
  `prefers-reduced-motion`.

## Deploy

The GitHub Pages workflow publishes `site/` directly on push to `main`.
