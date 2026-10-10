# AboutChris Specification

## Overview
- **Target file:** `src/components/AboutChris.tsx`
- **Screenshot:** `docs/design-references/original/desktop-features-bottom-about.jpg`
- **Interaction model:** static

## DOM Structure
```
section.py-16.sm:py-20.px-[60px].lg:px-8
└ div.max-w-7xl.mx-auto
  └ div.bg-white.rounded-[2.5rem].p-8.sm:p-12.lg:p-16
    └ div.flex.flex-col.lg:flex-row.gap-12
      ├ div.lg:w-2/3  → h2 + 3 × p + div.flex.flex-col (inline gap:30px) → 2 × person row
      └ div.lg:w-1/3.relative.hidden.lg:flex.justify-end → div.relative.w-full.max-w-[350px] (inline height:502px) → 5 × absolute circle
```

## Computed Styles
- Card: white, `rounded-[2.5rem]` (40px), padding `p-8 sm:p-12 lg:p-16`
- `h2`: `text-3xl sm:text-4xl font-bold mb-6`
- Body `p`: `text-base sm:text-lg text-gray-700`, `mb-4` on the first two, `mb-8` on the last
- Person row: `flex items-center gap-4`; avatar `w-16 h-16 rounded-full overflow-hidden shrink-0`
  (Amy's avatar also carries `bg-gray-300`); `img.w-full.h-full.object-cover`
- Name: `font-semibold text-gray-900 text-lg`; role: `text-sm text-gray-600`
- Collage box: `relative w-full max-w-[350px]`, inline `height: 502px`
- Each circle: `absolute … w-[154px] h-[154px] rounded-full overflow-hidden`, image `object-cover`

### Collage positions (exact)
| Photo | Position classes | Asset |
| --- | --- | --- |
| amy1 | `top-0 left-0` | `amy1.png.17cb8189d5d0.w297.webp` (297×312) |
| amy2 | `top-[174px] left-0` | `amy2.png.110d2f58c113.w467.webp` (467×491) |
| amy3 | `top-[348px] left-0` | `amy3.png.b6c30953836a.w422.webp` (422×428) |
| amy4 | `top-[77px] right-0` | `amy4.png.e953abb123b2.w492.webp` (492×500, srcset 480+492w) |
| amy5 | `top-[251px] right-0` | `amy5.png.ca1f04cc556a.w539.webp` (539×553, srcset 480+539w) |

Avatars: `ChrisProfilePic.jpg.c21eb7a0161e.w800.webp` (3500×3500, srcset 480/800/1200/1600w) and
`amyCatPhotos/amyprofie.png.7f49c8a81e81.w447.webp` (447×470).

## States & Behaviors
None.

## Text Content (verbatim)
- H2: `Hi, I'm Chris 👋`
- P1: `I built Amy to help me track my eating habits in a simple and intuitive way, while pushing myself to be a better designer.`
- P2: `I wanted to create a calorie tracking experience that felt ` **`incredible`** ` to use—like writing in a notes app—so great design and interaction was something I put a lot of time into.` (the `<strong>` wraps only the word `incredible`; note the em dash)
- P3: `Hopefully you feel that when you use it and my app helps you as much as its helped me :)`
- People: `Chris Raroque` / `Amy developer`; `Amy` / `Cat`

## Responsive Behavior
- ≥1024px: 2/3 + 1/3 columns, collage visible.
- <1024px: single column, **collage hidden entirely** (`hidden lg:flex`), padding shrinks to `p-12`/`p-8`.
