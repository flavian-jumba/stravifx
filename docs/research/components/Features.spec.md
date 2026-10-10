# Features Specification

## Overview
- **Target file:** `src/components/Features.tsx`
- **Screenshots:** `docs/design-references/original/desktop-features-top.jpg`,
  `docs/design-references/original/desktop-features-bottom-about.jpg`
- **Interaction model:** static

## DOM Structure
```
section.py-16.sm:py-20.px-[60px].lg:px-8
└ div.max-w-6xl.mx-auto
  ├ h2.text-3xl.sm:text-4xl.md:text-5xl.font-bold.text-center.mb-3.sm:mb-4
  ├ p.text-lg.sm:text-xl.text-gray-600.text-center.mb-12.sm:mb-16.max-w-3xl.mx-auto
  └ div.grid.grid-cols-1.sm:grid-cols-2.lg:grid-cols-3.gap-x-8.gap-y-16
    └ 12 × div.flex.flex-col.items-center → img + h3
```

## Computed Styles
- Card image: `class="w-[92%] h-auto rounded-3xl"` (24px radius). The pastel background is **inside
  the image**, not a CSS background.
- Card caption `h3`: `text-xl font-semibold text-center mt-4` → 20px/600
- Grid gaps: `gap-x-8` (32px) / `gap-y-16` (64px)
- Intro `p` wraps at `max-w-3xl` and contains `<br class="hidden sm:inline">`

## Per-card assets (in DOM order)
All under `/_optimized/FeatureSectionAssets/` with srcset 480/800/1200/1290w (Streaks: …/1600w),
intrinsic 1290×1358 (Streaks: 3870×4074), except card 1 which the target serves **unoptimised**:

| # | Title | `src` |
| --- | --- | --- |
| 1 | Amy's thought process | `/FeatureSectionAssets/Amy's thought process.png` (raw PNG, no srcset, no width/height) |
| 2 | Calorie estimate bias | `Calorie estimate bias.png.aa720448b236.w800.webp` |
| 3 | Apple Health Syncing | `Apple Health Syncing.png.df8ed3b02469.w800.webp` |
| 4 | Easy editing | `Easy editing.png.a4114adbd399.w800.webp` |
| 5 | Goals at a glance | `Goals at a glance.png.9914de7800d9.w800.webp` |
| 6 | Home & Lock screen widgets | `Home & Lock screen widgets.png.79aa27f67671.w800.webp` |
| 7 | Location tracking for accurate restaurant information | `Location tracking….png.7dbd0b702d9a.w800.webp` |
| 8 | Nutrition breakdown | `Nutrition breakdown.png.c2ae5a59b9b0.w800.webp` |
| 9 | Quick saved meals | `Quick saved meals.png.58b0dea58e65.w800.webp` |
| 10 | Reminders | `Reminders.png.e85345802dd4.w800.webp` |
| 11 | Streaks and badges | `Streaks and badges.png.2f8777165527.w800.webp` |
| 12 | Customized nutrition plan | `Customized nutrition plan.png.e27010074000.w800.webp` |

`alt` equals the caption in every case.

## States & Behaviors
None — no hover on the cards.

## Text Content (verbatim)
- H2: `Simple, but powerful💪` (emoji is part of the heading, no space before it)
- Lead: `Powerful features to help you reach your goals,` `<br class="hidden sm:inline">` `without the complexity`

## Responsive Behavior
1 column → 2 at `sm` (640px) → 3 at `lg` (1024px). The `<br>` in the lead collapses below `sm`.
