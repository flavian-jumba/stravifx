# BehindTheScenes Specification

## Overview
- **Target file:** `src/components/BehindTheScenes.tsx`
- **Screenshot:** `docs/design-references/original/desktop-behindthescenes.jpg`
- **Interaction model:** static (hover only)

## DOM Structure
```
section.py-16.sm:py-20.px-[60px].lg:px-8
└ div.max-w-6xl.mx-auto
  ├ div.mb-10 → h2 + p
  └ div.grid.grid-cols-1.lg:grid-cols-2.gap-16
    ├ YouTube card   .bg-white.rounded-[2.5rem].p-8.pt-[22px].sm:p-10.sm:pt-[30px].lg:p-12.lg:pt-[38px]
    │ ├ div.flex.items-center.justify-between.mb-2.bg-white.rounded-2xl.p-2.5
    │ │ ├ div.flex.items-center.gap-1.5 → badge + text
    │ │ └ a (Open)
    │ └ div.grid.grid-cols-2.gap-3 → 4 × video tile
    └ Instagram card (same shell)
      ├ header row (same shape)
      └ div.flex.items-center.justify-center.gap-1.5 → 3 × post
```

## Computed Styles
- `h2`: `text-4xl sm:text-5xl font-bold mb-3 text-gray-900`; `p`: `text-lg sm:text-xl text-gray-600`
- Card: white, `rounded-[2.5rem]`, asymmetric top padding (`pt-[22px] sm:pt-[30px] lg:pt-[38px]`)
- Badge: `w-9 h-9 rounded-xl flex items-center justify-center shrink-0`;
  YouTube `bg-red-600`, Instagram `bg-linear-to-br/srgb from-purple-600 via-pink-600 to-orange-500`
  (target: `bg-gradient-to-br`); icon `w-5 h-5 text-white`
- Handle block: `h3.text-base.font-bold.text-gray-900` + `p.text-xs.text-gray-600`
- Open button: `px-5 py-2 rounded-lg transition font-semibold flex items-center gap-1 text-base`;
  YouTube `bg-red-600 text-white hover:bg-red-700`, Instagram `bg-black text-white hover:bg-gray-800`;
  trailing ExternalLinkIcon `w-4 h-4`
- Video tile: `bg-gray-200 rounded-2xl aspect-video flex items-center justify-center overflow-hidden hover:opacity-90 transition relative group`;
  thumbnail `w-full h-full object-cover`; play puck `absolute inset-0` → `w-10 h-10 bg-white rounded-full shadow-lg group-hover:shadow-xl transition` with PlayIcon `w-5 h-5 text-black`
- Instagram post: `rounded-3xl overflow-hidden shrink-0 hover:opacity-90 hover:scale-105 transition-all duration-200`;
  image `w-full h-auto object-contain` with inline `max-width` **110px / 132px / 110px** — the middle
  post is deliberately larger

## Assets
- YouTube thumbnails rehosted locally as `public/youtube/<videoId>.jpg` (originals:
  `https://img.youtube.com/vi/<id>/hqdefault.jpg`), ids in order:
  `cpF_EtwB8tc`, `ETK_cZLezs4`, `sWs_qAgEEdI`, `ghxgQaxZ9Kw`
- Links: `…/watch?v=cpF_EtwB8tc`, `…/watch?v=ETK_cZLezs4`, `…/watch?v=sWs_qAgEEdI&t=10s`,
  `…/watch?v=ghxgQaxZ9Kw&t=219s`; alts `YouTube Video 1…4`
- Instagram posts: `/_optimized/SocialMediaCovers/InstaPost{1,2,3}.png.<hash>.w800.webp`
  (1080×1920, srcset 480/800/1080w), alts `Instagram Post 1…3`, reels
  `DQ9zkSxD9jy`, `DQaai-yDyN-`, `DQmul45DyEG`

## States & Behaviors
- Tile hover: `opacity → 0.9`, play puck `shadow-lg → shadow-xl` via `group-hover`, 150ms.
- Post hover: `opacity → 0.9` + `scale(1.05)`, **200ms** (`transition-all duration-200`).
- Open buttons: background darken, 150ms.

## Text Content (verbatim)
- H2: `Behind the scenes 👀` · Lead: `Want to see me build Amy? I make videos documenting my progress 👀`
- `YouTube` / `Chris Raroque` → `https://www.youtube.com/@raroque`
- `Instagram` / `@chris.raroque` → `https://www.instagram.com/chris.raroque/`
- Both buttons read `Open`

## Responsive Behavior
Two cards side by side at `lg`, stacked below it with a 64px gap. Card padding steps
`p-8 → sm:p-10 → lg:p-12`.
