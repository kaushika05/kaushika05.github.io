# Image 01 — Hero plate, desktop

Full-bleed printed plate behind the hero section. This is the site's single poster moment.

## Specification

| | |
| --- | --- |
| **Save to** | `public/images/hero-plate.webp` |
| **Final size** | 2560×1440 (16:9) |
| **Generate at** | 1536×1024 |
| **Crop** | 1536×864, centred (16:9 from 3:2) |
| **Scale** | upscale to 2560×1440, bicubic |
| **Then** | re-apply dither and grain **at 2560px**, after upscaling |
| **Format** | WebP, quality 82 |
| **Size budget** | ≤420 kB |

Upscaling is acceptable for this one file because the artwork is flat fields, a hard silhouette and
a stochastic screen — no fine semantic detail is lost. The condition is that the texture is
re-applied at final size. Upscale the artwork, not the texture.

## Composition constraints

- **Quiet region (hard):** the bottom **38%** of frame is flat deep navy — no orange, no horizon,
  no shapes, no texture beyond a faint even paper tooth. The headline, support copy, buttons and
  signal line all sit here. Luminance variation across that band must stay under 8%.
- **Never let the orange band enter the bottom 38%.** Cream on `#0B2E66` is roughly 11:1 contrast;
  cream on `#FF7A24` is roughly 2.2:1 and fails AA. This is a contrast requirement, not a preference.
- **Focal element:** backlit silhouette at **62% frame width, 40% frame height**, clear of the
  bottom band by at least 15% of frame height. Light source directly behind it at 62% width,
  55% height. Never a visible sun disc.
- **Canvas hand-off:** the plate must bottom out at `#0B2E66` or darker so the transition into
  `SceneBackground` at stop 0 (`#05070D` sky) reads as continuous on scroll.

## Palette

Existing project tokens, unchanged: `ocean #0B2E66` (navy ink) · `ember #FF7A24` (orange ink)
· `parchment #F4EFE6` and `gold #FFD27A` (cream highlights) · `ink #05070D` (bottom edge).

## Hookup (not done — docs only)

An absolutely positioned element inside `Hero`'s existing `<section>`, plus a
`linear-gradient(to bottom, transparent, #05070D)` scrim over the bottom 38%. `SceneBackground`
needs no changes; the plate sits above it in normal flow and the canvas becomes visible from the
second viewport onward.

## Prompt

```text
A wide cinematic two-ink screenprint poster in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with a warm cream #F4EFE6 used only for the very brightest highlights. Colour sits in flat hard-edged fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest through the sky gradient and where the two inks meet, with slight misregistration so the orange plate sits one or two dots off from the navy plate. Visible paper tooth, uneven ink density, matte, no gloss.

The scene: a lone figure standing in silhouette on a low ridge, seen from behind, small in the frame, centred at 62 percent of the frame width and 40 percent of the frame height. The figure is solid navy silhouette with no interior detail. Directly behind and below the figure, a broad warm glow rises from beyond the ridge in orange #FF7A24 burning to cream #FFD27A at its centre, with no visible sun disc. The upper sky is deep navy, darkening toward the top edge, dissolving downward into the orange through a heavily dithered gradient. The lower 38 percent of the image is entirely flat deep navy #0B2E66 darkening to #05070D at the bottom edge, completely empty, with no orange, no horizon, no shapes and no detail, only a faint even paper tooth.

Do not include: text, letters, numbers, watermarks, signatures, faces, facial features, more than one figure, animals, vehicles, buildings, machinery, roads, paths, ribbons, glowing lines, waveforms, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, UI elements, logos, flags, or recognisable landmarks.
```

## Before shipping

1. Desaturate and confirm the bottom 38% reads as a single flat tone. If the dithered gradient bled
   into it, regenerate — do not blur, which kills the idiom everywhere else.
2. Confirm no orange pixel sits inside the bottom 38%.
3. Confirm the bottom edge is `#0B2E66` or darker.
4. `cwebp -q 82 hero-plate.png -o hero-plate.webp`, check it lands under 420 kB.
