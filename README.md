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

## Botanical line work

Each section carries a motif in the left gutter, chosen for what that section
is actually about rather than for decoration alone:

| Section | Motif | Why |
| --- | --- | --- |
| Masthead | Flowering spray | Fills the tall empty gutter beside the name |
| About | Nil Manel water lily | Sri Lanka's national flower |
| Research | Spatial sound ripples | The spatial-audio work |
| Publications | Cochlear spiral | The inner ear, and ET-AudioBench's subject |
| Projects | Unfurling fern frond | A plan that opens up step by step |
| Writing | Feather | Writing, and the FeederWatch bird counts |
| Experience | Rhododendron | West Virginia's state flower |
| Beyond | Seed head dispersing | Service and community science |
| Contact | Flowering sprig | An open invitation |
| Footer | Appalachian ridgelines | Morgantown |

They are generated, not hand-drawn. `tools/ornaments.py` computes every form
parametrically — logarithmic spirals, bezier-guided stems with leaves placed
along the curve tangent, trig radials — then centres and scales each one to a
common optical size, dividing stroke widths by the scale factor so the whole
set keeps one line weight. `tools/bounds.py` checks nothing escapes its
viewBox. `tools/integrate.py` inlines the result into `site/index.html`.

To change them:

```bash
python tools/ornaments.py    # regenerate ornaments.json
python tools/bounds.py       # confirm each fits its viewBox
python tools/integrate.py    # inline into site/index.html
```

`integrate.py` only inserts into a page that has none, so revert
`site/index.html` first or swap the markup by hand.

Every ornament is `aria-hidden` decoration, inlined to avoid ten extra
requests. Each path carries `pathLength="1"`, so one normalised
`stroke-dasharray` makes any path draw itself in on scroll regardless of its
real length; paths hold several subpaths each, so the stroke sweeps petal by
petal. The whole effect is skipped under `prefers-reduced-motion` and hidden
in print.

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
- Ornament colour comes from `--ornament` / `--ornament-soft`, tuned per
  scheme. They sit inside the sticky gutter label, so they track down a long
  section as a running marginal illustration.
- Small mono labels use `--ink-4`, which is tuned to clear 4.5:1 against the
  paper in both schemes. Don't lighten it without re-checking contrast.
- Scroll reveals are gated behind a `.js` class on `<html>`, so the page renders
  fully with JavaScript disabled, and are skipped under
  `prefers-reduced-motion`.

## Deploy

The GitHub Pages workflow publishes `site/` directly on push to `main`.
