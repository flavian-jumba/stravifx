# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/original/desktop-hero-nav.jpg`
- **Interaction model:** click-driven (mobile menu toggle only) — requires `"use client"`

## DOM Structure
```
nav (inline style padding-top:15px)
└ div.max-w-7xl.mx-auto.px-[60px].lg:px-8
  └ div.flex.justify-between.items-center.h-16
    ├ div.flex.items-center.shrink-0 → a[href="/"] → img (logo)
    ├ div.hidden.md:flex.items-center.space-x-6.lg:space-x-8 → 4 links + CTA
    └ button#mobile-menu-btn.md:hidden.p-2 → MenuIcon
└ div#mobile-menu.hidden.md:hidden… (sibling of the max-w-7xl wrapper, full-bleed)
```

## Computed Styles
- `nav`: `padding-top: 15px` (inline), total height 79px, no background, no border, `position: static`
- Row: `h-16` (64px), `display:flex; justify-content:space-between; align-items:center`
- Logo `img`: `/_optimized/transparent_amy_logo.png.e315e529911e.w329.webp`, intrinsic 329×284,
  `class="block w-[58px] sm:w-[64px] h-auto"`, `srcset="… 329w"`,
  `sizes="(max-width: 720px) calc(100vw - 2rem), 800px"`, `decoding="async"`, `alt="Amy"`,
  wrapped in `a[href="/"][aria-label="Amy home"].inline-flex.items-center`
- Links: `text-gray-700 hover:text-gray-900 transition text-sm lg:text-base`
- CTA: `bg-[#4200FF] text-white px-5 lg:px-6 rounded-full hover:bg-[#3600CC] transition text-sm lg:text-base whitespace-nowrap`
  plus inline `padding-top: calc(0.55rem + 3px); padding-bottom: calc(0.55rem + 3px)`, `target="_blank"`
- Hamburger: `md:hidden p-2`, `aria-label="Open menu"`, icon `w-6 h-6`, stroke-width 2
- Mobile panel: `hidden md:hidden bg-white border-t border-gray-100 px-[60px] pb-4`,
  inner `flex flex-col space-y-3 pt-3`; its CTA is `px-5 py-2.5 … text-center w-fit`

## States & Behaviors
- **Mobile menu toggle** — Trigger: click `#mobile-menu-btn`. State A: panel `display:none`.
  State B: panel visible. Implementation on the target: `classList.toggle("hidden")`.
  Clone: React `useState` boolean. No transition, no icon swap, no `aria-expanded` on the target.
- **Hover:** links `#374151 → #111827`; CTA `#4200FF → #3600CC`. Both 150ms `cubic-bezier(.4,0,.2,1)`.

## Text Content (verbatim)
`Is it accurate?` → `/accuracy` · `Pricing` → `/pricing` · `Blog` → `/blog` · `About` → `/about` ·
`Download Amy` → `https://apps.apple.com/us/app/amy-food-journal/id6753904989`

## Responsive Behavior
- ≥768px (`md`): link row visible, hamburger hidden.
- <768px: link row hidden, hamburger visible, panel available.
- Gutters `px-[60px]`, dropping to `px-8` at `lg`.
