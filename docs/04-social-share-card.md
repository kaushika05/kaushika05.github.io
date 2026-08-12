# Image 04 — Social share card

> **Status: re-roll needed.** The generated card measured clean to only **50%** of frame width
> against the 58% spec — warm dither reaches x=49.3%, and inside the left 58% the brightest pixel
> hits 178/255. The figure also landed at 82% width / 64% height instead of 76% / 42%.
> An interim crop of it is live at `public/og.jpg` so the tag is not broken; swapping the file
> needs no code change. Use the adjusted prompt at the bottom of this file.

Open Graph image. The site has none today, so this is a real gap rather than decoration, and it has
nothing to conflict with.

## Specification

| | |
| --- | --- |
| **Save to** | `public/og.jpg` |
| **Final size** | 1200×630 |
| **Generate at** | 1536×1024 |
| **Crop** | 1536×806, centred |
| **Scale** | resize to 1200×630, bicubic |
| **Format** | JPEG, quality 84 |
| **Size budget** | ≤240 kB |

Do not drop below quality 82 — the dither smears into blotches before the file gets meaningfully
smaller.

## Composition constraints

- **Quiet region (hard):** the left **58%** of frame, between 18% and 88% height, carries the name
  and tagline when you composite text. Flat navy, under 6% luminance variation, no orange, no
  dithered gradient, and no silhouette edge crossing into it.
- **Never place text over the orange.** Cream on `#0B2E66` is roughly 11:1; cream on `#FF7A24` is
  roughly 2.2:1 and fails AA.
- **Focal element:** backlit silhouette at **76% frame width, 42% frame height**, entirely inside
  the right 42% of frame. The glow falls off completely before reaching the middle.

## Palette

Existing project tokens, unchanged: `ocean #0B2E66` (navy ink) · `ember #FF7A24` (orange ink)
· `parchment #F4EFE6` (cream highlights) · `ink #05070D` (left edge).

## Hookup (not done — docs only)

Add `images: ["/og.jpg"]` to the `openGraph` block in `src/app/layout.tsx`. `metadataBase` is
already set from `site.url`, so replace the `https://example.com` placeholder in
`src/data/content.ts` at the same time or the absolute URL will be wrong.

## Prompt

```text
A wide two-ink screenprint poster in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with warm cream #F4EFE6 only in the brightest highlights. Flat hard-edged colour fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest where the two inks meet, slight misregistration between the plates, visible paper tooth, uneven ink density, matte.

The scene: the entire left 58 percent of the frame is flat, empty, unbroken deep navy #0B2E66 darkening toward #05070D at the left edge, with no gradient, no texture beyond a faint paper tooth, no shapes and no detail of any kind, so that text can be placed over it. All incident is confined to the right of frame: a single small figure in solid navy silhouette stands at 76 percent of the frame width and 42 percent of the frame height on a low ridge, backlit by a compact warm orange #FF7A24 glow burning to cream behind it, with no visible sun disc. The glow falls off completely before reaching the middle of the frame. A low navy ridgeline runs along the bottom right corner only.

Do not include: text, letters, numbers, watermarks, signatures, faces, facial features, more than one figure, animals, vehicles, buildings, roads, paths, ribbons, glowing lines, waveforms, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, vignettes, UI elements, logos, flags, or recognisable landmarks.
```

## Before shipping

1. Desaturate and confirm the left 58% reads as a single flat tone with no dither resolving.
2. Composite the name and tagline over it at the size they will actually appear and check nothing
   collides with the silhouette edge.
3. Preview it at 240px wide — most feeds render it small, and the silhouette should still read.
4. Export JPEG at quality 84, check it lands under 240 kB.


---

## Adjusted prompt (re-roll)

Changes from the original: all incident pushed into the right 35% of frame, the quiet zone stated
twice and given an explicit hard edge, the figure raised, and the dither field explicitly forbidden
from drifting left of the glow.

```text
A wide two-ink screenprint poster in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with warm cream #F4EFE6 only in the brightest highlights. Flat hard-edged colour fields with all texture inside them: coarse stochastic dithering and visible halftone grain, slight misregistration between the plates, visible paper tooth, uneven ink density, matte.

Composition is strongly asymmetric and the division is absolute. The left 62 percent of the frame is completely flat, empty, unbroken deep navy #0B2E66 darkening toward #05070D at the left edge: no gradient, no glow, no scattered dots, no stray dither specks, no shapes, no detail whatsoever, only a faint even paper tooth. Not a single orange or cream pixel appears anywhere in the left 62 percent of the frame. All incident is confined to the right 35 percent: a single small figure in solid navy silhouette stands at 78 percent of the frame width and 42 percent of the frame height on a low ridge, backlit by a tight compact warm orange #FF7A24 glow burning to cream directly behind it. The glow is small and contained, falling off completely by 63 percent of the frame width, and its dither field does not spray leftward. A low navy ridgeline runs along the bottom right corner only, ending before the middle of the frame.

Do not include: any orange, cream or bright pixel in the left 62 percent of the frame, scattered dither specks outside the glow, text, letters, numbers, watermarks, signatures, faces, facial features, more than one figure, animals, vehicles, buildings, roads, paths, ribbons, glowing lines, waveforms, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, vignettes, UI elements, logos, flags, or recognisable landmarks.
```

Generate at 1536×1024 or wider 16:9, crop to 1.905:1, resize to 1200×630, JPEG quality 84,
save over `public/og.jpg`. Verify the left 58% measures 0.000% warm pixels before shipping.
