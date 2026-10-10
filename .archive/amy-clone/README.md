# amyfoodjournal.com — clone

A pixel-perfect Next.js 16 reconstruction of the [Amy Food Journal](https://www.amyfoodjournal.com/)
homepage, built from the `ai-website-cloner-template` with the `/clone-website` skill.

The target is a static Astro 5 site styled with Tailwind v3. This clone reproduces its markup,
design tokens, assets and behaviour on Next.js 16 + React 19 + Tailwind v4.

## Status

Desktop renders **pixel-identical** at six of seven tested scroll offsets; the seventh differs only
inside the autoplaying hero video. Mobile (390px) matches on every measured property. Full
evidence in [`docs/research/VISUAL_QA.md`](docs/research/VISUAL_QA.md).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + production build
```

## Layout

```
src/
  app/
    layout.tsx            # metadata, viewport, font preloads
    globals.css           # @font-face, Tailwind v3 palette + radius scale, page defaults
    page.tsx              # section assembly
  components/
    Navbar.tsx            # the only client component (mobile menu toggle)
    Hero.tsx
    HowItWorks.tsx
    Features.tsx
    AboutChris.tsx
    BehindTheScenes.tsx
    Footer.tsx
    icons.tsx             # 8 SVGs lifted verbatim from the target
  types/content.ts
public/                   # 81 assets, mirroring the target's own paths
docs/
  research/               # DESIGN_TOKENS, PAGE_TOPOLOGY, BEHAVIORS, VISUAL_QA, components/*.spec.md
  design-references/      # paired original/ and clone/ screenshots, plus diff masks
scripts/
  download-assets.mjs     # re-fetches every asset from the manifest
  asset-manifest.json
```

## Notes

- Assets keep the target's original URLs (`/_optimized/…`, `/videos/…`, `/fonts/…`) so the markup
  and `srcset` strings are copied verbatim. YouTube thumbnails are rehosted under `/youtube/`.
- The clone re-declares Tailwind v3's gray ramp and the stock radius scale, because the shadcn
  scaffold rescales `--radius-*` and v4 ships different OKLCH grays.
- Two intentional class-list deviations (hero `h1` line-height, footer link hover) are explained in
  `docs/research/VISUAL_QA.md`.
- Pure emulation: no customisation, no backend, no SEO or accessibility work beyond what the
  target itself does.
