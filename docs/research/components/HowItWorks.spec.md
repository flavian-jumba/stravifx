# HowItWorks Specification

## Overview
- **Target file:** `src/components/HowItWorks.tsx`
- **Screenshot:** `docs/design-references/original/desktop-howitworks.jpg`
- **Interaction model:** static

## DOM Structure
```
section.py-16.sm:py-20.px-[60px].lg:px-8
└ div.max-w-6xl.mx-auto
  └ div.flex.flex-col.lg:flex-row.items-start.gap-12.lg:gap-20
    ├ div.shrink-0.w-full.lg:w-auto.flex.justify-center.lg:justify-start → img (phone)
    └ div.flex-1.w-full → h2 + div.space-y-12.w-full → 3 × step
```

## Computed Styles
- Phone `img`: `/_optimized/AmyHomeScreen.png.e8d45b397fd8.w800.webp`, intrinsic 1475×2724,
  `class="w-[420px] lg:w-[400px] h-auto"`, srcset at 480/800/1200/1475w,
  `sizes="(max-width: 720px) calc(100vw - 2rem), 800px"`, `alt="Amy App Home Screen"`
- `h2`: `text-4xl sm:text-5xl font-bold mb-16 text-gray-900` + inline `line-height: 1.3`,
  copy split by an explicit `<br>`
- Step wrapper: `relative pb-12 w-full` (steps 1–2) / `relative w-full` (step 3)
- Number: `absolute top-0 right-0 text-6xl font-bold text-gray-200` → 60px/700 `#e5e7eb`
- Step `h3`: `text-3xl font-semibold mb-2.5 text-gray-900 relative z-10 pr-20 lg:pr-24`
- Step `p`: `text-gray-600 text-lg relative z-10 pr-20 lg:pr-24`
- Divider (steps 1–2 only): `absolute left-0 right-0 bottom-0 border-b border-gray-200`

## States & Behaviors
None — no hover, no scroll triggers. The `z-10` on the text exists purely so the oversized grey
number sits behind the copy; `pr-20 lg:pr-24` keeps the text clear of it.

## Text Content (verbatim)
- H2: `Calorie tracking` / `as easy as Apple Notes` (split on `<br>`)
- 01 `Type what you ate` — `Just jot down your meal like you would in a notes app`
- 02 `Amy will search` — `Amy instantly finds the nutritional information`
- 03 `Your calories are magically calculated` — `See your totals and macros automatically updated`

## Responsive Behavior
- ≥1024px: image left (400px) + steps right, `gap-20`.
- <1024px: stacks, image centered at 420px, `gap-12`.
