# Image 03 — Geography panel

A complete printed illustration replacing the whole SVG scene in the Geography section — not a sky
behind the existing vector paths. Those landmasses would read wrong over a screenprint.

## Specification

| | |
| --- | --- |
| **Save to** | `public/images/geography-horizons.webp` |
| **Final size** | 1536×410 (3.75:1) |
| **Generate at** | 1536×1024 |
| **Crop** | 1536×410 band from the lower-middle of the frame |
| **Scale** | none |
| **Format** | WebP, quality 82 |
| **Size budget** | ≤200 kB |

**Why 3.75:1.** The panel is `viewBox="0 0 1200 320"` with `h-auto w-full`, so the aspect is locked
at 3.75:1. The content column is 1168px (`maxWidth.shell` 78rem = 1248px, minus `2.5rem` padding
per side at ≥768px), so 1536px covers it at about 1.3×. That is short of a true 2× asset and it is
fine here — flat fields and a coarse screen carry no detail a 2× export would add. **Do not upscale.**

## Composition constraints

- **Quiet region (hard):** the bottom **22%** of the crop, where the panel's label strip sits
  directly beneath and may overlap at narrow widths. Flat navy, under 8% luminance variation, no
  reflections, no shapes.
- **No orange in the quiet region.** Cream on `#0B2E66` is roughly 11:1; cream on `#FF7A24` is
  roughly 2.2:1 and fails AA.
- **Focal element:** the light sits at **78% frame width, 64% frame height** — the warm end. A
  second, much dimmer cool highlight at 15% width. Nothing crosses the centre of the panel.
- **Must not contain** any road, path, ribbon or continuous bright curve. The luminous route belongs
  to the canvas; this panel must not restate it.
- **Canvas hand-off:** Geography is the ninth section, where `SceneBackground` is at stop 3
  (`#461A26` horizon, `#FF7A24` glow). Warming toward the right edge is what makes the panel sit
  inside the canvas environment rather than argue with it.

## Palette

Existing project tokens, unchanged: `ocean #0B2E66` (navy ink) · `ember #FF7A24` (orange ink)
· `parchment #F4EFE6` (cream highlights).

## Hookup (not done — docs only)

Replace the `<svg>` contents in `src/components/Geography.tsx` with a single `<img>` at the same
aspect. Keep the panel frame and the label strip below it. The `useScroll` drift on the two SVG
paths goes away with them — if you want the parallax back, apply a small `y` transform to the
`<img>` instead.

## Prompt

```text
An extremely wide letterboxed two-ink screenprint panel in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with warm cream #F4EFE6 only in the brightest highlights. Flat hard-edged colour fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest through the sky gradient and where the inks meet, slight misregistration between the plates, visible paper tooth, matte.

The scene: two coastlines meeting in one continuous panorama. The left third is a calm tropical sea under deep navy, cool and almost entirely unlit, with a low flat island silhouette on the horizon and one very dim cool highlight at 15 percent of the frame width. The middle third is the emptiest and darkest part of the panel, flat navy sky with nothing in it. The right third rises into a low layered ridgeline of rounded hills in solid navy silhouette, backlit by a broad warm orange #FF7A24 glow burning to cream at 78 percent of the frame width and 64 percent of the frame height, with no visible sun disc. The horizon runs across the frame at 62 percent of the frame height. The lower 22 percent of the panel is flat unbroken deep navy #0B2E66 with no reflections, no shapes and no detail.

Do not include: any road, path, ribbon, trail, glowing line, waveform or continuous bright curve, text, letters, numbers, watermarks, people, figures, animals, boats, vehicles, buildings, machinery, detailed rock or foliage texture, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, vignettes, UI elements, logos, flags, or recognisable landmarks.
```

## Before shipping

1. Confirm the crop is exactly 3.75:1 — anything else will letterbox or stretch inside the panel.
2. Desaturate and confirm the bottom 22% reads as a single flat tone.
3. Confirm there is no continuous bright line anywhere in the image. If one appeared, regenerate
   rather than retouch.
4. `cwebp -q 82 geography-horizons.png -o geography-horizons.webp`, check it lands under 200 kB.
