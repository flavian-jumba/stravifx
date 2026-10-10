# Page Topology — amyfoodjournal.com homepage

Seven top-level blocks, all in normal document flow. Nothing is `fixed` or `sticky`; there are no
overlays and no `z-index` stacking beyond two local uses inside the How-it-works steps.

| # | Block | Element | Container | Interaction model | Component |
| --- | --- | --- | --- | --- | --- |
| 1 | Navigation | `<nav style="padding-top:15px">` | `max-w-7xl` | click-driven (mobile menu only) | `Navbar.tsx` |
| 2 | Hero | `<section>` | `max-w-6xl` | static (autoplaying video) | `Hero.tsx` |
| 3 | How it works | `<section>` | `max-w-6xl` | static | `HowItWorks.tsx` |
| 4 | Features grid | `<section>` | `max-w-6xl` | static | `Features.tsx` |
| 5 | About Chris | `<section>` | `max-w-7xl` | static | `AboutChris.tsx` |
| 6 | Behind the scenes | `<section>` | `max-w-6xl` | static (hover only) | `BehindTheScenes.tsx` |
| 7 | Footer | `<footer style="background:#4200FF">` | `max-w-6xl` | static | `Footer.tsx` |

## Structure notes
- **Nav** is static, not sticky — it scrolls away with the page. Desktop links live in a
  `hidden md:flex` row; the hamburger (`md:hidden`) toggles a separate `#mobile-menu` panel that
  sits *outside* the `max-w-7xl` wrapper and spans the full width.
- **Hero** is `flex-col-reverse lg:flex-row` — on mobile the video renders *above* the copy, on
  desktop it sits to the right. Text column is capped at `lg:max-w-[600px]`.
- **How it works** is `flex-col lg:flex-row` with the phone screenshot first in DOM order
  (so it stacks above the steps on mobile). Each step is `position: relative`, with the big number
  absolutely positioned top-right behind the text (`z-10` on the text, `pr-20 lg:pr-24` to clear
  the number) and a `border-b` divider pinned to the bottom of steps 1 and 2.
- **Features** is a 1 → 2 → 3 column grid (`gap-x-8 gap-y-16`) of twelve image + caption cards. The
  pastel card background is baked into each PNG/WebP, not drawn in CSS.
- **About Chris** is one white `rounded-[2.5rem]` card: a 2/3 text column plus a 1/3 collage of five
  154×154 circular cat photos absolutely positioned in a 350×502 box. The collage is
  `hidden lg:flex` — it disappears below 1024px.
- **Behind the scenes** is a two-column grid of white `rounded-[2.5rem]` cards: YouTube (2×2 video
  grid) and Instagram (three posts in a row with per-post `max-width` of 110/132/110px, making the
  middle one taller).
- **Footer** is a 2 → 5 column link grid plus a social row and a centered legal line above a
  `border-t` rule, on the `#4200FF` field with a 48px top radius.

## Assembly order (`src/app/page.tsx`)
```
<Navbar />
<Hero />
<HowItWorks />
<Features />
<AboutChris />
<BehindTheScenes />
<Footer />
```
No page-level scroll container, snap points, or observers are needed.
