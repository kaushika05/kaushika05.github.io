# Image prompts — printed duotone idiom

Status: **built.** All four plates are generated, processed and wired. See README for the file
table and `docs/04-social-share-card.md` for the one outstanding re-roll.

Measured against spec at build time:

| Plate | Quiet region | Result |
| --- | --- | --- |
| Hero, wide | warm ink must stop above 62% height | stops at 62.1% — pass |
| Hero, portrait | warm ink must stop above 52% height | stops at 49.1% — pass |
| Geography | flat below the sea line | warm stops at 72.5%, 0.000% warm below — pass |
| Share card | clean left 58% | clean only to 50% — **miss, re-roll pending** |

Supersedes the earlier "scanned offset paperback" direction. The idiom is now pinned by the five
reference images.

This is the combined reference. Each image also has a standalone file that can be used on its own:
`01-hero-plate-desktop.md`, `02-hero-plate-portrait.md`, `03-geography-panel.md`,
`04-social-share-card.md`.

## What the references actually are

Your read is right on the main points. Verified against the files:

- **Hard-limited duotone/tritone.** Deep navy-indigo plus saturated orange-vermilion, with cream as
  a third ink. Confirmed in all five.
- **Heavy visible raster texture.** Confirmed, though it spans a range: the lone rider is a coarse
  stochastic stipple with visible squiggle patterning inside the light beam; the moai is a rough
  screenprint tooth; the statue is a finer halftone dot with slight misregistration; the train is
  the most heavily dithered, with dot clusters breaking up every gradient.
- **Bold silhouettes, massed shapes, high figure-ground contrast.** Confirmed and strong. The rider
  is essentially pure silhouette against light.
- **Wide cinematic framing, single subject, big sky.** Confirmed, all four art pieces are ~16:9.

Four things to add or correct:

1. **The light is always behind the subject.** In every one of the four art images the source sits
   behind and below, and the subject reads as a backlit silhouette. That is the compositional
   engine, not just "single focal subject." It is also what makes the style legible at small sizes.
2. **Cream is a highlight ink, not a background.** Only the moai uses cream as a field. In the other
   three it is reserved for the brightest five to ten percent — marble, sun disc, road surface.
   Treating cream as a base is the fastest way to lose the look.
3. **The sky is a vertical two-ink gradient**, navy at the top falling to orange at the horizon, in
   three of five. That gradient is where most of the dithering lives.
4. **Texture sits inside flat colour fields.** Shape edges are hard; the screen lives within the
   shape. It is not painterly rendering.

### How Alkimi keeps the headline legible

Worth being precise, because it is the model and it is not a texture trick:

- The headline sits in the **lower third, over the darkest navy region** — the water and reflection
   zone. It never crosses the orange band.
- The focal subject (statue) is in the **upper half**, well clear of the type.
- There is a **dark scrim** fading into the bottom edge, doing the last bit of separation.
- The eyebrow label gets its **own dark pill** rather than relying on the image behind it.
- Type is large, heavy, and near-white.

So: they did not quieten the image. They composed the image so the text lands where it was already
dark, then added a scrim. That is a compositional solution, and it is what the prompts below encode.

The numbers back it up. Parchment `#F4EFE6` on ocean `#0B2E66` is about **11:1** — comfortably AAA.
Parchment on ember `#FF7A24` is about **2.2:1** — fails AA outright. Hence the single hardest rule
in this document: **never place text over the orange.** Over the navy, this palette is one of the
safest text backgrounds the site has.

---

## Decision 1 — palette: hold the tokens, don't retheme

**Settled.** Existing tokens are held; the style is adopted without any palette change.

Straight answer: **the site's hues already are the reference palette.** Compare:

| Reference ink | Nearest existing token | Verdict |
| --- | --- | --- |
| Deep navy-indigo | `ocean #0B2E66`, `midnight #071B3D` | Same hue family, slightly darker |
| Saturated orange-vermilion | `ember #FF7A24` | Effectively identical |
| Warm cream | `parchment #F4EFE6`, `gold #FFD27A` | Already there, two values of it |
| Olive from ink overlap | `tropic #0B4A3B` | **Mismatch** — see below |

The real gap is not hue, it is **value and saturation**. The references are high-key prints whose
darkest ink is a mid navy that never approaches black. The site's base is `ink #05070D`, near-black.
That is the actual difference, and it is worth naming precisely rather than calling it a colour
clash.

**Recommendation: (b) hold the existing tokens and render the idiom in them.** Reasons:

- The tokens already carry three of the four inks. Nothing needs inventing.
- Retheming toward reference brightness is not a palette swap. The near-black base is what makes
  body text AA-safe by default, it is what `--text-secondary` and `--text-muted` were tuned against,
  and all four canvas `STOPS` are built from near-black skies. You would be rewriting the contrast
  model, the canvas, and every panel surface.
- The site's job is research credibility across roughly eight hundred words of body copy. Poster
  brightness is superb for one screen and tiring underneath long-form text.

**The one honest exception:** the olive. The references' olive is warm, around `#6E7A3C`, and comes
from orange over blue. `tropic #0B4A3B` is a colder, bluer green and will not reproduce it. Either
accept a colder overlap, or add exactly one token used **only inside imagery**, never for chrome.
That is the single change I would sanction.

**If you retheme anyway:** you get images matching the references exactly and a much more striking
site, at the cost of rebuilding `SceneBackground`'s four stops, re-deriving every text colour, and
losing the calm register. Do it only in combination with the hero decision below, never piecemeal.

---

## Decision 2 — the canvas: give it the hero, or give the hero to the image. Not both.

My earlier answer was that bounded plates could coexist with the canvas. **With this art that answer
changes, and I should say so plainly.**

Pale atmospheric texture can sit behind a panel and stay subordinate. These cannot. They have a
subject, a silhouette, and a light source — they are posters. A poster shrunk into a framed panel
beside body text reads as clip art. A poster full-bleed behind an animated scroll-linked route reads
as two focal systems fighting for the same screen.

So there are two coherent configurations, and picking one is the decision:

**Option A — canvas keeps the hero.** Then the references are a *texture and palette* source only,
not a composition source. Strip the silhouette subject, keep the screen and the two inks. You keep
the site's most distinctive interactive feature on the screen everyone sees. You do not get the
thing the references make you feel.

**Option B — the printed image takes the hero, the canvas takes everything below (recommended).**
Exactly what Alkimi does. The hero becomes one full-bleed printed plate with the headline in the
lower third over the navy; `SceneBackground` stays exactly as it is and simply becomes visible from
the second viewport onward, since the hero plate is an opaque element in normal flow above it. No
canvas rewrite, no new scroll logic.

**I would take Option B.** One poster, one moment, maximum impact — and the canvas continues doing
connective work across the eight text-heavy sections where a poster would be exhausting. The route
emerging from beneath the hero as you scroll is a better reveal than showing everything at once.

**The cost, stated honestly:** it removes the interactive canvas from the one screen most visitors
will ever see. If that feature is the point of the site to you, take Option A instead and treat the
references as texture only. Do not try to split the difference by putting a semi-transparent poster
over the canvas — that is the configuration that looks broken.

Everything below assumes Option B.

### What this means for the earlier plate set

The five project plates are **cut**. Under this idiom, five posters inside five stacked cards would
each read as a book cover and would compete directly with the hero. Four files total now.

---

## The idiom, committed

**Two-ink screenprint / risograph poster, backlit silhouette, heavy stochastic dither.**

Stated identically in every prompt:

- Two inks only — deep navy and saturated orange — plus cream reserved for the brightest highlights.
- Colour sits in flat fields with hard shape edges; all texture lives inside the fields.
- Coarse stochastic dither and visible halftone grain, heaviest through the sky gradient and the
  transition between the two inks.
- Slight misregistration: the orange plate sits one to two dots off from the navy plate.
- Light source always behind and below the subject; the subject reads as silhouette.
- Visible paper tooth, uneven ink density, no gloss.

### Palette, from `tailwind.config.ts`

`ink #05070D` · `midnight #071B3D` · `ocean #0B2E66` · `tropic #0B4A3B` · `ember #FF7A24`
· `coral #E64274` · `gold #FFD27A` · `parchment #F4EFE6` · `haze #8D9AAF`

Canvas `STOPS` from `src/components/SceneBackground.tsx`, for the images that must hand off to it:

| Stop | Scroll | Sky | Horizon | Glow | Route | Hills |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0.00 | `#05070D` | `#071B3D` | `#8D9AAF` | `#FFD27A` | `#04060C` |
| 1 | 0.34 | `#050914` | `#0B2E66` | `#0B4A3B` | `#FFD27A` | `#040C14` |
| 2 | 0.66 | `#05080E` | `#0B4A3B` | `#8D9AAF` | `#FF7A24` | `#040A0C` |
| 3 | 1.00 | `#0A0710` | `#461A26` | `#FF7A24` | `#FFD27A` | `#08050A` |

### Dimensions, from the real layout

`maxWidth.shell` is `78rem` = 1248px, `.shell` padding `2.5rem` per side at ≥768px, so the content
column is **1168px**. The hero is the exception — it is `min-h-[100svh]` and full viewport width, so
it is sized to the viewport, not the shell.

| File | Final size | Generate | Crop / scale |
| --- | --- | --- | --- |
| `public/images/hero-plate.webp` | 2560×1440 | 1536×1024 | crop 1536×864 (16:9), upscale to 2560×1440, re-grain |
| `public/images/hero-plate-portrait.webp` | 1080×1620 | 1024×1536 | already 2:3, scale 1.055× |
| `public/images/geography-horizons.webp` | 1536×410 | 1536×1024 | crop 1536×410 band |
| `public/og.jpg` | 1200×630 | 1536×1024 | crop 1536×806, resize to 1200×630 |

**On upscaling the hero.** 1536px does not natively cover a 2560px viewport, and I said earlier not
to upscale. This idiom is the one legitimate exception, with one condition: the artwork carries no
fine semantic detail — flat fields, a hard silhouette, a stochastic screen — so bicubic upscaling
loses nothing that matters, **provided you re-apply the dither and grain at 2560px after scaling.**
Upscale the artwork, then add the texture at native resolution. Do not upscale the texture.

---

## Image 1 — Hero plate, desktop

- **Path:** `public/images/hero-plate.webp`
- **Final:** 2560×1440. Generate 1536×1024 → crop 1536×864 → upscale → re-grain.
- **Quiet region (hard constraint):** the **bottom 38%** of frame is flat deep navy with no orange,
  no subject, no horizon, and no texture detail beyond a faint even tooth. Headline, support copy,
  buttons, and the signal line all sit here. Luminance variation across that band must stay under
  8%, and no part of the orange band may enter it.
- **Focal element:** single backlit silhouette centred at **62% frame width, 40% frame height**,
  clear of the bottom band by at least 15% of frame height. Light source directly behind it, at 62%
  width and 55% height, never a visible disc.
- **Canvas hand-off:** the plate's navy must bottom out at `#0B2E66` or darker so the transition to
  the canvas at stop 0 (`#05070D` sky) reads as continuous when you scroll past it.
- **Hookup later:** an absolutely positioned element inside `Hero`'s existing `<section>`, plus a
  `linear-gradient(to bottom, transparent, #05070D)` scrim over the bottom 38%. The canvas needs no
  changes — the plate simply sits above it in flow.
- **Weight:** ≤420 kB WebP at quality 82. Dither compresses badly; this is the real cost of the look.

```text
A wide cinematic two-ink screenprint poster in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with a warm cream #F4EFE6 used only for the very brightest highlights. Colour sits in flat hard-edged fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest through the sky gradient and where the two inks meet, with slight misregistration so the orange plate sits one or two dots off from the navy plate. Visible paper tooth, uneven ink density, matte, no gloss.

The scene: a lone figure standing in silhouette on a low ridge, seen from behind, small in the frame, centred at 62 percent of the frame width and 40 percent of the frame height. The figure is solid navy silhouette with no interior detail. Directly behind and below the figure, a broad warm glow rises from beyond the ridge in orange #FF7A24 burning to cream #FFD27A at its centre, with no visible sun disc. The upper sky is deep navy, darkening toward the top edge, dissolving downward into the orange through a heavily dithered gradient. The lower 38 percent of the image is entirely flat deep navy #0B2E66 darkening to #05070D at the bottom edge, completely empty, with no orange, no horizon, no shapes and no detail, only a faint even paper tooth.

Do not include: text, letters, numbers, watermarks, signatures, faces, facial features, more than one figure, animals, vehicles, buildings, machinery, roads, paths, ribbons, glowing lines, waveforms, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, UI elements, logos, flags, or recognisable landmarks.
```

## Image 2 — Hero plate, portrait

Same scene, recomposed for narrow screens. Generate separately at 1024×1536; do not crop image 1.

- **Path:** `public/images/hero-plate-portrait.webp`
- **Final:** 1080×1620. Generate 1024×1536 → scale 1.055×.
- **Quiet region:** the **bottom 48%** — taller than desktop, because the hero copy wraps to more
  lines at narrow widths. Same rule: flat navy, no orange, no detail.
- **Focal element:** silhouette at **50% frame width, 32% frame height**.
- **Weight:** ≤260 kB WebP at quality 82.

```text
A tall vertical two-ink screenprint poster in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with a warm cream #F4EFE6 used only for the very brightest highlights. Colour sits in flat hard-edged fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest through the sky gradient and where the two inks meet, with slight misregistration so the orange plate sits one or two dots off from the navy plate. Visible paper tooth, uneven ink density, matte, no gloss.

The scene: a lone figure standing in silhouette on a low ridge, seen from behind, small in the frame, centred at 50 percent of the frame width and 32 percent of the frame height. The figure is solid navy silhouette with no interior detail. Directly behind and below the figure, a broad warm glow rises from beyond the ridge in orange #FF7A24 burning to cream #FFD27A at its centre, with no visible sun disc. The upper sky is deep navy, darkening toward the top edge, dissolving downward into the orange through a heavily dithered gradient. The lower 48 percent of the image is entirely flat deep navy #0B2E66 darkening to #05070D at the bottom edge, completely empty, with no orange, no horizon, no shapes and no detail, only a faint even paper tooth.

Do not include: text, letters, numbers, watermarks, signatures, faces, facial features, more than one figure, animals, vehicles, buildings, machinery, roads, paths, ribbons, glowing lines, waveforms, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, UI elements, logos, flags, or recognisable landmarks.
```

## Image 3 — Geography panel

Now a complete printed illustration replacing the whole SVG scene, not a sky behind SVG paths — the
existing vector landmasses would read wrong over a screenprint.

- **Path:** `public/images/geography-horizons.webp`
- **Final:** 1536×410 (3.75:1, matching `viewBox="0 0 1200 320"`). Generate 1536×1024 → crop band.
- **Quiet region:** the **bottom 22%**, where the panel's label strip sits directly beneath and may
  overlap at narrow widths. Flat navy, under 8% luminance variation.
- **Focal element:** the light sits at **78% frame width, 64% frame height** — the warm end. A second
  much dimmer cool area at 15% width. Nothing crosses the centre.
- **Canvas hand-off:** Geography is the ninth section, where the canvas is at stop 3 (`#461A26`
  horizon, `#FF7A24` glow). Warming toward the right edge is what makes the panel sit inside the
  canvas rather than argue with it.
- **Hookup later:** replace the `<svg>` contents in `Geography.tsx` with a single `<img>`; keep the
  panel frame and the label strip below it.
- **Resolution note:** 1536px covers the 1168px panel at 1.3×. Fine here — flat fields and screen,
  no fine detail. Do not upscale.
- **Weight:** ≤200 kB WebP at quality 82.

```text
An extremely wide letterboxed two-ink screenprint panel in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with warm cream #F4EFE6 only in the brightest highlights. Flat hard-edged colour fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest through the sky gradient and where the inks meet, slight misregistration between the plates, visible paper tooth, matte.

The scene: two coastlines meeting in one continuous panorama. The left third is a calm tropical sea under deep navy, cool and almost entirely unlit, with a low flat island silhouette on the horizon and one very dim cool highlight at 15 percent of the frame width. The middle third is the emptiest and darkest part of the panel, flat navy sky with nothing in it. The right third rises into a low layered ridgeline of rounded hills in solid navy silhouette, backlit by a broad warm orange #FF7A24 glow burning to cream at 78 percent of the frame width and 64 percent of the frame height, with no visible sun disc. The horizon runs across the frame at 62 percent of the frame height. The lower 22 percent of the panel is flat unbroken deep navy #0B2E66 with no reflections, no shapes and no detail.

Do not include: any road, path, ribbon, trail, glowing line, waveform or continuous bright curve, text, letters, numbers, watermarks, people, figures, animals, boats, vehicles, buildings, machinery, detailed rock or foliage texture, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, vignettes, UI elements, logos, flags, or recognisable landmarks.
```

## Image 4 — Social share card

- **Path:** `public/og.jpg`
- **Final:** 1200×630. Generate 1536×1024 → crop centred 1536×806 → resize.
- **Quiet region:** the **left 58%** between 18% and 88% height, for the name and tagline. Flat navy,
  under 6% luminance variation, no orange, no dithered gradient, no silhouette edge crossing it.
- **Focal element:** silhouette at **76% frame width, 42% frame height**, backlit, entirely inside
  the right 42% of frame.
- **Hookup later:** add `images: ["/og.jpg"]` to `openGraph` in `src/app/layout.tsx`.
- **Weight:** ≤240 kB JPEG at quality 84. Below 82 the dither smears into blotches.

```text
A wide two-ink screenprint poster in the style of a 1970s risograph science-fiction book cover, printed in exactly two inks — a deep navy indigo #0B2E66 and a saturated orange vermilion #FF7A24 — with warm cream #F4EFE6 only in the brightest highlights. Flat hard-edged colour fields with all texture inside them: coarse stochastic dithering and visible halftone grain, heaviest where the two inks meet, slight misregistration between the plates, visible paper tooth, uneven ink density, matte.

The scene: the entire left 58 percent of the frame is flat, empty, unbroken deep navy #0B2E66 darkening toward #05070D at the left edge, with no gradient, no texture beyond a faint paper tooth, no shapes and no detail of any kind, so that text can be placed over it. All incident is confined to the right of frame: a single small figure in solid navy silhouette stands at 76 percent of the frame width and 42 percent of the frame height on a low ridge, backlit by a compact warm orange #FF7A24 glow burning to cream behind it, with no visible sun disc. The glow falls off completely before reaching the middle of the frame. A low navy ridgeline runs along the bottom right corner only.

Do not include: text, letters, numbers, watermarks, signatures, faces, facial features, more than one figure, animals, vehicles, buildings, roads, paths, ribbons, glowing lines, waveforms, a visible sun or moon disc, lens flares, starbursts, light rays, clean vector illustration, smooth digital gradients, crisp anti-aliased edges, airbrush softness, photographic realism, sharp focus, HDR clarity, 3D render look, glossy surfaces, more than three colours, purple, magenta, pink, teal, neon, cyberpunk, borders, frames, vignettes, UI elements, logos, flags, or recognisable landmarks.
```

---

## Processing checklist

1. Generate at 1536×1024, except the portrait hero at 1024×1536.
2. Crop per the table. Resize **once**, bicubic. For the desktop hero only, upscale to 2560×1440 and
   then re-apply dither and grain at final size.
3. Convert: `cwebp -q 82` for the three WebP files, JPEG quality 84 for `og.jpg`.
4. **Verify the quiet region.** Desaturate and confirm it reads as a single flat tone. If the
   dithered gradient has bled into it, regenerate — do not blur, which kills the idiom everywhere.
5. **Verify no orange enters any text region.** This is the contrast rule, not a style preference:
   cream on navy is roughly 11:1, cream on ember is roughly 2.2:1 and fails AA.
6. Confirm the hero plate's bottom edge is `#0B2E66` or darker so it meets the canvas cleanly.
7. After hookup, re-run `npm run build`, check the hero at 320px, 768px and 1440px for overflow, and
   confirm reduced-motion still holds — the plate is static, so it needs no motion treatment.
