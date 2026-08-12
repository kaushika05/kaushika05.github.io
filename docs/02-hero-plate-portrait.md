# Image 02 — Hero plate, portrait

Narrow-screen counterpart to image 01. Generate separately — do not crop the desktop plate, the
subject placement and quiet band are different.

## Specification

| | |
| --- | --- |
| **Save to** | `public/images/hero-plate-portrait.webp` |
| **Final size** | 1080×1620 (2:3) |
| **Generate at** | 1024×1536 (already 2:3) |
| **Crop** | none |
| **Scale** | 1.055× to 1080×1620, bicubic |
| **Format** | WebP, quality 82 |
| **Size budget** | ≤260 kB |

No meaningful upscale here, so no texture re-application step is needed.

## Composition constraints

- **Quiet region (hard):** the bottom **48%** of frame — taller than the desktop plate's 38%,
  because the hero copy wraps to more lines at narrow widths. Flat deep navy, no orange, no horizon,
  no shapes, no detail beyond a faint paper tooth. Luminance variation under 8%.
- **Never let the orange band enter the bottom 48%.** Cream on `#0B2E66` is roughly 11:1; cream on
  `#FF7A24` is roughly 2.2:1 and fails AA.
- **Focal element:** backlit silhouette at **50% frame width, 32% frame height**. Light source
  directly behind it. Never a visible sun disc.
- **Canvas hand-off:** bottom out at `#0B2E66` or darker to meet `SceneBackground` stop 0 cleanly.

## Palette

Existing project tokens, unchanged: `ocean #0B2E66` (navy ink) · `ember #FF7A24` (orange ink)
· `parchment #F4EFE6` and `gold #FFD27A` (cream highlights) · `ink #05070D` (bottom edge).

## Hookup (not done — docs only)

Served alongside image 01 via a `<picture>` element or a CSS media query on the hero plate, swapping
at the same breakpoint the hero layout uses. Same bottom scrim, sized to 48%.

## Prompt

```text
A tall vertical two-ink screenprint poster in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with a warm cream #F4EFE6 used only for the very brightest highlights. Colour sits in flat hard-edged fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest through the sky gradient and where the two inks meet, with slight misregistration so the orange plate sits one or two dots off from the navy plate. Visible paper tooth, uneven ink density, matte, no gloss.

The scene: a lone figure standing in silhouette on a low ridge, seen from behind, small in the frame, centred at 50 percent of the frame width and 32 percent of the frame height. The figure is solid navy silhouette with no interior detail. Directly behind and below the figure, a broad warm glow rises from beyond the ridge in orange #FF7A24 burning to cream #FFD27A at its centre, with no visible sun disc. The upper sky is deep navy, darkening toward the top edge, dissolving downward into the orange through a heavily dithered gradient. The lower 48 percent of the image is entirely flat deep navy #0B2E66 darkening to #05070D at the bottom edge, completely empty, with no orange, no horizon, no shapes and no detail, only a faint even paper tooth.

Do not include: text, letters, numbers, watermarks, signatures, faces, facial features, more than one figure, animals, vehicles, buildings, machinery, roads, paths, ribbons, glowing lines, waveforms, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, UI elements, logos, flags, or recognisable landmarks.
```

## Before shipping

1. Desaturate and confirm the bottom 48% reads as a single flat tone.
2. Confirm no orange pixel sits inside the bottom 48%.
3. Check it beside image 01 — the two should read as the same print, not as two different scenes.
4. `cwebp -q 82 hero-plate-portrait.png -o hero-plate-portrait.webp`, check it lands under 260 kB.
