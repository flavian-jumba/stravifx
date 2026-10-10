# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Screenshot:** `docs/design-references/original/desktop-hero-nav.jpg`
- **Interaction model:** static (autoplaying muted video + hover on the CTA)

## DOM Structure
```
section.pt-8.sm:pt-12.pb-16.sm:pb-20.px-[60px].lg:px-8
└ div.max-w-6xl.mx-auto
  └ div.flex.flex-col-reverse.lg:flex-row.items-center  (inline style gap:80px)
    ├ div (text column)  .shrink-0.text-center.lg:text-left.flex.flex-col.items-center.lg:items-start.w-full.lg:max-w-[600px]
    │ ├ h1, p, div.inline-flex.flex-col.items-center → a (CTA) + p (fine print)
    └ div.shrink-0 → video
```

## Computed Styles
- Section height 512px at 1854px viewport
- `h1`: `text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 w-full lg:max-w-none`,
  computed 60px/700/60px `#111827` at desktop. See BEHAVIORS.md for the line-height rewrite.
- Lead `p`: `text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10` → 20px `#4b5563`
- CTA `a`: `inline-flex items-center space-x-2 bg-[#4200FF] text-white pl-[27px] pr-8 py-4 rounded-full hover:bg-[#3600CC] transition transform hover:scale-105 mb-4`, `target="_blank"`
  - icon: AppleIcon `w-6 h-6`, label `<span class="font-medium">Download on iOS</span>`
- Fine print `p`: `text-sm text-gray-500` with inline `margin-top: -8px`
- `video`: `class="rounded-3xl h-auto"`, inline `max-width: 362px; width: 362px`,
  `autoplay loop muted playsinline`, `<source src="/videos/polish_2.mp4" type="video/mp4">`,
  fallback text `Your browser does not support the video tag.`

## States & Behaviors
- CTA hover: background `#4200FF → #3600CC` **and** `scale(1.05)`, 150ms `cubic-bezier(.4,0,.2,1)`.
- Video autoplays on load, loops forever, no controls.

## Assets
- `public/videos/polish_2.mp4` (10.1 MB)

## Text Content (verbatim)
- H1: `Track calories like writing in Apple Notes.`
- Lead: `Simple and intuitive calorie tracking. Just type what you ate and Amy finds the calories and macros for you.`
- CTA: `Download on iOS` · Fine print: `No credit card required`

## Responsive Behavior
- ≥1024px: two columns, 80px gap, text left-aligned.
- <1024px: `flex-col-reverse` → **video above text**, everything centered.
- Section padding `pt-8 pb-16` → `sm:pt-12 sm:pb-20`.
