# Behaviors — amyfoodjournal.com homepage

Findings from the scroll / click / hover / responsive sweep. The homepage is almost entirely
static: one piece of JavaScript, one autoplaying video, and a set of CSS hover transitions.

## Scroll sweep
| Check | Result |
| --- | --- |
| Nav on scroll | **No change.** `<nav>` is `position: static` — it scrolls out of view |
| Reveal-on-scroll animations | None. No IntersectionObserver, no `animation-*` utilities in use |
| Scroll snap | None |
| Parallax | None |
| Smooth-scroll library | None. Native `html { scroll-behavior: smooth }` only |
| Keyframes in the bundle | Only `@keyframes spin` (unused on this page) |

## Click sweep
| Element | Behavior |
| --- | --- |
| `#mobile-menu-btn` (hamburger, `<md`) | Toggles `hidden` on `#mobile-menu`. The whole script is:<br>`document.getElementById("mobile-menu-btn")?.addEventListener("click",()=>{document.getElementById("mobile-menu")?.classList.toggle("hidden")})`<br>No animation, no icon swap, no outside-click close, no `aria-expanded` update |
| Nav links / footer links | Plain navigation to other routes |
| CTAs, "Open" buttons, video tiles, Instagram posts | Plain `target="_blank"` links |

No tabs, accordions, modals, dropdowns, or carousels exist on this page.

## Hover sweep
Every transition uses Tailwind's `transition` default: **150ms `cubic-bezier(.4, 0, .2, 1)`**.

| Element | Change |
| --- | --- |
| Nav links | `color: #374151 → #111827` |
| Nav "Download Amy" | `background: #4200FF → #3600CC` |
| Hero "Download on iOS" | `background: #4200FF → #3600CC` **and** `transform: scale(1.05)` |
| YouTube "Open" | `background: #dc2626 → #b91c1c` |
| Instagram "Open" | `background: #000 → #1f2937` |
| YouTube video tile | `opacity: 1 → 0.9`; the inner play button goes `shadow-lg → shadow-xl` (group hover) |
| Instagram post | `opacity: 1 → 0.9` **and** `scale(1.05)`, `transition-all duration-200` (200ms, not 150ms) |
| Footer links | `hover:text-opacity-80` — a no-op on the target, since the links are already at full opacity and `text-opacity` without a matching `text-*` alpha changes nothing visible |
| Footer social badges | `background: rgba(255,255,255,0.2) → rgba(255,255,255,0.3)` |

## Media
- Hero: `<video autoplay loop muted playsinline>` → `/videos/polish_2.mp4` (10.1 MB), `rounded-3xl`,
  inline `max-width: 362px; width: 362px`. No poster, no controls, no fallback image.
- Every other moving thing on the page is a still image.

## Responsive sweep
Measured by loading the page in a 390px-wide same-origin iframe and reading computed styles.

| Viewport | Document height | What changes |
| --- | --- | --- |
| 1854px (reference capture) | 5628px | Baseline: 3-col features, side-by-side hero, collage visible |
| 1024px (`lg`) | — | Below this: hero stacks (`flex-col-reverse` → video **above** copy), How-it-works stacks, features drop to 2 columns, Behind-the-scenes drops to 1 column, the cat collage (`hidden lg:flex`) disappears entirely |
| 768px (`md`) | — | Below this: desktop nav links hide, hamburger appears, features drop to 1 column, footer goes 5 → 2 columns |
| 390px | 9670px | Hero `h1` computes to 36px / 45px; section padding drops to `py-16`; footer gutters drop to `px-4` |

### Line-height collision (carried into the clone)
The hero `h1` carries `text-4xl sm:text-5xl md:text-6xl … leading-tight`. Measured on the target:

| Breakpoint | Computed line-height | Winner |
| --- | --- | --- |
| base (390px) | **45px** (1.25 × 36px) | `leading-tight` |
| `sm` | **48px** (1.0 × 48px) | `sm:text-5xl` |
| `md`+ | **60px** (1.0 × 60px) | `md:text-6xl` |

Unprefixed `leading-tight` beats unprefixed `text-4xl`, but the responsive `sm:`/`md:` text
utilities are emitted later in the sheet and win above 640px. Tailwind v4 resolves this the other
way, so the clone writes the three line-heights explicitly:
`leading-tight sm:leading-[1] md:leading-[1]`.

## Utilities that must be rewritten for Tailwind v4
| Target (v3) | Clone (v4) | Why |
| --- | --- | --- |
| `flex-shrink-0` | `shrink-0` | Renamed |
| `text-white text-opacity-80` | `text-white/80` | `*-opacity-*` removed |
| `bg-white bg-opacity-20` / `hover:bg-opacity-30` | `bg-white/20` / `hover:bg-white/30` | Same |
| `border-white border-opacity-30` | `border-white/30` | Same |
| `bg-gradient-to-br` | `bg-linear-to-br` | Renamed |
| `leading-tight` on the hero `h1` | `leading-tight sm:leading-[1] md:leading-[1]` | Utility-order change (above) |
