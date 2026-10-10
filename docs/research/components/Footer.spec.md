# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/original/desktop-footer.jpg`
- **Interaction model:** static

## DOM Structure
```
footer.text-white.py-12.sm:py-16.px-4.sm:px-[60px].lg:px-8.rounded-t-[3rem]  (inline background-color:#4200FF)
└ div.max-w-6xl.mx-auto
  ├ div.grid.grid-cols-2.md:grid-cols-5.gap-8.mb-10.sm:mb-12 → 5 columns
  │   (5th column also holds div.flex.gap-3 with 4 social badges)
  └ div.border-t.border-white/30.pt-6.sm:pt-8 → p (legal line)
```

## Computed Styles
- Footer: `background-color: #4200FF` (inline), `border-radius: 48px 48px 0 0`, white text
- Column heading: `font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4 text-white/80`
  (target: `text-white text-opacity-80`)
- Link list: `ul.space-y-2.sm:space-y-3.text-sm.sm:text-base`; links carry `transition` only
  (see States & Behaviors for why the target's hover class is a no-op)
- Company column `ul` adds `mb-6` before the social row
- Social badge: `bg-white/20 p-2 rounded-lg hover:bg-white/30 transition`, icon `w-4 h-4`,
  each followed by a `<span class="sr-only">` label
- Legal rule: `border-t border-white/30 pt-6 sm:pt-8`; text `text-xs sm:text-sm text-white/80 text-center`

## Columns (verbatim, in order)
**Product** — Home `/` · Pricing `/pricing` · Accuracy `/accuracy` · AI Connectors `/connectors` ·
iOS App `https://apps.apple.com/us/app/amy-food-journal/id6753904989` (new tab) ·
Feedback `https://feedback.amyfoodjournal.com/` (new tab)

**Guides** — Calorie Counting 101 `/blog/calorie-counting-for-beginners` ·
How to Track Macros `/blog/how-to-track-macros` · Start a Food Journal `/blog/how-to-start-food-journal` ·
Science of Journaling `/blog/science-of-food-journaling` · Best Journal Apps `/blog/best-food-journal-apps` ·
Free Templates `/resources/food-journal-template`

**Tools** — All Tools `/tools` · Deficit Calculator `/tools/calorie-deficit-calculator` ·
Daily Calorie Needs `/tools/how-many-calories-should-i-eat` · Recipe Calories `/tools/recipe-calorie-counter` ·
Chipotle Calories `/tools/chipotle-calorie-calculator` · Taco Bell Calories `/tools/taco-bell-calorie-calculator` ·
Starbucks Calories `/tools/starbucks-calorie-guide`

**Compare** — All Comparisons `/vs` · Amy vs MyFitnessPal `/vs/myfitnesspal` ·
Amy vs Cronometer `/vs/cronometer` · Noom Alternatives `/blog/noom-alternatives` ·
Free Tracking Apps `/blog/free-calorie-tracking-apps-no-subscription` ·
AI Calorie Counters `/blog/ai-calorie-counter-apps`

**Company** — About `/about` · Contact `/contact` · Support `mailto:support@amyfoodjournal.com` ·
Privacy Policy `/privacy` · Terms of Service `/terms`

**Social** — Twitter `https://x.com/raroque` · Instagram `https://www.instagram.com/chris.raroque/` ·
YouTube `https://www.youtube.com/@raroque` · TikTok `https://www.tiktok.com/@chris.raroque`

**Legal line:** `Amy Food Journal is operated by Saint Yeti LLC.`

## States & Behaviors
- Social badge hover: `rgba(255,255,255,.2) → rgba(255,255,255,.3)`, 150ms.
- Link hover: **nothing happens.** The target writes `hover:text-opacity-80`, but the links inherit
  their colour from `footer.text-white`, and an inherited `color` is already resolved — setting
  `--tw-text-opacity` on the child cannot change it. Verified in-page: forcing
  `--tw-text-opacity: 0.8` on a footer link leaves the computed colour at `rgb(255, 255, 255)`.
  The clone reproduces the no-op (keeps `transition`, drops the dead hover class) rather than
  "fixing" it into a fade.

## Responsive Behavior
2 columns below `md`, 5 at `md`+. Gutters `px-4 → sm:px-[60px] → lg:px-8`; padding `py-12 → sm:py-16`.
