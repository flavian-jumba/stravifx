# Visual QA — clone vs. amyfoodjournal.com

Method: both pages open in the same Chrome window at the same viewport (1854 × 927 CSS px),
scrolled to identical offsets with `scroll-behavior: auto`, screenshotted, then compared
pixel-by-pixel with PIL (`ImageChops.difference`, threshold 36/255).

Masked out of the diff: the Chrome extension's floating buttons (top right), the Next.js dev
badge (bottom left, dev-only), and the mouse cursor.

## Desktop results (1854px)

| Scroll offset | Differing pixels | Notes |
| --- | --- | --- |
| 0 | 5.518% | **Entirely the hero `<video>`** — bbox (866, 107)–(1165, 674) matches the video box exactly. Two independently playing copies of a 10 MB MP4 can never show the same frame. Everything outside the video box is identical. |
| 900 | **0.000%** | — |
| 1800 | **0.000%** | Clean after parking the mouse: a first pass showed a 29×20 box at (881, 469), which was Chrome's hover-image affordance over the card under the cursor, not a clone defect. |
| 2700 | **0.000%** | Same hover artefact in the first pass, same resolution. |
| 3900 | **0.000%** | — |
| 4700 | **0.000%** | — |
| 5043 (max scroll) | **0.000%** | Both pages clamp at the same maximum scroll, so the documents are the same height. |

Geometry cross-check — every top-level block, measured independently in both pages:

```
original  [NAV 0,79] [SEC 79,797] [SEC 876,899] [SEC 1775,2145] [SEC 3920,790] [SEC 4710,699] [FOO 5409,505]
clone     [NAV 0,79] [SEC 79,797] [SEC 876,899] [SEC 1775,2145] [SEC 3920,790] [SEC 4710,699] [FOO 5409,505]
```

A wider computed-style probe (60+ properties across the `h1`, both CTAs, the logo, step numbers,
all four `h2`s, the first feature image, the About card, the footer, footer headings, social
badges, the YouTube/Instagram badges, all three Instagram posts and all five cat photos) also
matched exactly, except for the three representation differences below.

## Mobile results (390px)

Measured by loading each page in a 390px-wide iframe, then rendered side by side in one window
(original left, clone right) with the full page laid out and translated into view.

| Check | Original | Clone |
| --- | --- | --- |
| Hero direction | `column-reverse` (video above copy) | same |
| `h1` size / line-height | 36px / 45px | same |
| Desktop nav / hamburger | `display: none` / `block` | same |
| Mobile menu toggle | `none` → `block`, 197px tall, 5 links | same |
| Feature grid | 1 column (255px) | same |
| Footer grid | 2 columns (155.5px each) | same |
| Cat collage | `display: none` | same |
| Behind-the-scenes cards | Instagram posts overflow the card at 110/132/110px | same |
| Block heights | `[79, 1224, 1688, 4623, 978, …, 873]` | same |
| Footer alignment at 9550px down | pixel-aligned with the clone | — |

> One false alarm worth recording: a same-origin iframe probe of the **original** reported the
> three Instagram posts at 0×0 and the section 234px shorter. Rendering both pages side by side
> showed the live site drawing them at full size, overflowing the card exactly like the clone —
> the zeros were an artefact of images not painting inside that probe iframe, not real behaviour.

## Known deltas (3)

All three are Tailwind v4 emitting a different *representation* of the same rendered result. None
is visible.

| Property | Original (Tailwind v3) | Clone (Tailwind v4) | Impact |
| --- | --- | --- | --- |
| `rounded-full` on the two CTAs | `border-radius: 9999px` | `border-radius: 3.35544e+07px` (`calc(infinity * 1px)`) | None — both are fully rounded pills |
| `text-white/80`, `bg-white/20` | `rgba(255, 255, 255, 0.8)` | `oklab(0.999994 0.0000456 0.0000201 / 0.8)` | None — the same white at the same alpha |
| Instagram badge gradient | `linear-gradient(to right bottom, …)` in sRGB | initially interpolated in OKLAB | **Fixed** — the clone uses `bg-linear-to-br/srgb`, which now emits the identical sRGB gradient |

## Deliberate deviations (2)

| Deviation | Why |
| --- | --- |
| The hero `h1` drops `leading-tight` in favour of `leading-tight sm:leading-[1] md:leading-[1]` | Tailwind v4 orders `leading-*` after the responsive `text-*` utilities, so keeping the original class list would give 45/60/75px instead of the target's measured 45/48/60px. See BEHAVIORS.md. |
| Footer links carry `transition` but no hover class | The target's `hover:text-opacity-80` is a verified no-op there (inherited colour cannot be repainted by `--tw-text-opacity`). Reproducing the class in v4 would have *introduced* a fade the target does not have. |

Both are documented in the relevant component specs.

## Interactive checks
- Mobile menu opens and closes (`none` → `block` → `none`), 197px panel, 5 links — matches.
- Hero CTA, nav CTA, YouTube/Instagram "Open" buttons, video tiles and Instagram posts carry the
  same hover classes and the same 150ms / 200ms timings as the target.
- Hero video autoplays, loops, is muted and `playsInline`, at 362 × 669 — matches.
- No scroll-triggered behaviour exists on either page to test.

## Note on house style
`AGENTS.md` asks for "no inline styles". The target uses inline styles in eight places
(nav `padding-top`, hero `gap` and video `max-width`, hero fine-print `margin-top`, the
How-it-works `h2` `line-height`, the About collage `height` and its `gap`, each Instagram post's
`max-width`, and the footer `background-color`). Those are reproduced as inline styles, because
pixel-perfect emulation is the stated higher-priority principle and several of them are values
with no Tailwind equivalent.
