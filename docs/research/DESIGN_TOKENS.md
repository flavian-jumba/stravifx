# Design Tokens — amyfoodjournal.com

Source: `https://www.amyfoodjournal.com/` (Astro v5.14.1, Tailwind CSS v3, static output).
All values below are from the served stylesheet / inline `<style>` block and `getComputedStyle()`.

## Stack detected
| Property | Value |
| --- | --- |
| Generator | `Astro v5.14.1` |
| CSS | One bundle `/_astro/about.ClHHPzUY.css` (61 KB) + one inline `<style>` block |
| Utility framework | Tailwind CSS v3 (v3 palette hexes confirmed: `gray-900` computes to `rgb(17, 24, 39)`) |
| JS on the homepage | A single inline module: the mobile-menu toggle. No framework runtime, no smooth-scroll library |
| Images | Astro-optimised WebP with `srcset` + `sizes="(max-width: 720px) calc(100vw - 2rem), 800px"` |

## Color
| Token | Value | Used for |
| --- | --- | --- |
| Brand | `#4200FF` | Nav CTA, hero CTA, footer background |
| Brand hover | `#3600CC` | CTA `hover:` state |
| Page background | `#f9fafb` | `body` |
| Base text | `#333` | `body` default |
| gray-900 | `#111827` | Headings |
| gray-700 | `#374151` | Nav links, About body copy |
| gray-600 | `#4b5563` | Subheads, captions |
| gray-500 | `#6b7280` | "No credit card required" |
| gray-300 | `#d1d5db` | Avatar placeholder fill |
| gray-200 | `#e5e7eb` | Step numbers `01/02/03`, step dividers, video-tile placeholder |
| gray-100 | `#f3f4f6` | Mobile-menu top border |
| white | `#ffffff` | Card surfaces, footer text |
| red-600 / red-700 | `#dc2626` / `#b91c1c` | YouTube badge + Open button, hover |
| black | `#000000` | Instagram Open button (`hover:bg-gray-800`) |
| Instagram gradient | `purple-600 #9333ea → pink-600 #db2777 → orange-500 #f97316` (to bottom-right) | Instagram badge |

> The target is built on Tailwind v3, whose grays are the classic hex ramp. The clone re-declares
> that ramp in `@theme` because Tailwind v4 ships slightly different OKLCH grays.

## Typography
Two self-hosted variable families, both preloaded:

| Family | File | Weights |
| --- | --- | --- |
| `Inter` | `/fonts/inter-v20-latin-variable.woff2` | 400–800 |
| `Source Serif 4` | `/fonts/source-serif-4-v14-latin-variable.woff2` (+ italic file) | 400–700 |

Applied globally with `!important`:
```
font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
             Oxygen, Ubuntu, Cantarell, sans-serif !important;
```
`Source Serif 4` is preloaded but unused on the homepage (it serves the blog templates).

Measured type scale (computed at ≥1024px):

| Element | Size / weight / line-height | Classes |
| --- | --- | --- |
| `h1` hero | 60px / 700 / 60px | `text-4xl sm:text-5xl md:text-6xl font-bold` |
| `h2` section | 48px / 700 | `text-4xl sm:text-5xl font-bold` |
| `h2` features | 48px / 700, centered | `text-3xl sm:text-4xl md:text-5xl font-bold text-center` |
| `h2` How-it-works | 48px / 700, `line-height: 1.3` (inline style) | `text-4xl sm:text-5xl font-bold` |
| `h3` step | 30px / 600 | `text-3xl font-semibold` |
| Step number | 60px / 700, `gray-200` | `text-6xl font-bold text-gray-200` |
| Lead paragraph | 20px / 400, `gray-600` | `text-lg sm:text-xl` |
| Feature caption | 20px / 600, centered | `text-xl font-semibold text-center` |
| Footer heading | 14px / 600, uppercase, `tracking-wider`, white @ 80% | `text-xs sm:text-sm uppercase tracking-wider` |

**Line-height caveat.** The hero `h1` carries both `md:text-6xl` and `leading-tight`. On the
target's Tailwind v3 build the `text-*` line-height wins, so the computed value is **60px (1.0)**,
not 75px. Tailwind v4 orders those utilities the other way, so the clone drops `leading-tight`
from the `h1` and lets `text-*` supply the line-height — same pixels, different class list.

## Spacing & layout
| Token | Value |
| --- | --- |
| Section rhythm | `py-16 sm:py-20` |
| Page gutters | `px-[60px] lg:px-8` (footer: `px-4 sm:px-[60px] lg:px-8`) |
| Content width | `max-w-6xl` (72rem) — nav, About and footer use `max-w-7xl` / `max-w-6xl` as noted per section |
| Nav height | `h-16` row + `padding-top: 15px` inline on `<nav>` → 79px total |
| Hero column gap | `gap: 80px` (inline style) |
| Hero video | `max-width: 362px; width: 362px` (inline style) |

## Radii
`rounded-lg` (8px) buttons · `rounded-xl` (12px) social badges · `rounded-2xl` (16px) video tiles ·
`rounded-3xl` (24px) feature images, hero video, Instagram posts · `rounded-[2.5rem]` (40px) white cards ·
`rounded-t-[3rem]` (48px) footer · `rounded-full` pills and avatars.

> The shadcn scaffold rescales `--radius-*` off a single `--radius` variable. The clone resets the
> scale to stock Tailwind values so `rounded-2xl`/`rounded-3xl` land on 16px/24px exactly.

## Shadows
Only one: `shadow-lg` on the YouTube play button, going to `shadow-xl` on card hover.

## Document metrics (reference capture @1854px viewport)
| Block | Top | Height |
| --- | --- | --- |
| nav | 0 | 79 |
| hero | 79 | 512 |
| how-it-works | 591 | 899 |
| features | 1490 | 2145 |
| about | 3634 | 790 |
| behind-the-scenes | 4424 | 699 |
| footer | 5123 | 505 |
| **document** | — | **5628** |
