# Stravifx — landing page

The marketing site for Stravifx, an Android app that reads a chart and lays out a trade plan.
One page, built on Next.js 16 + React 19 + Tailwind v4.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + production build
```

## Before you ship

Everything site-wide lives in [`src/lib/site.ts`](src/lib/site.ts):

- `playStoreUrl` — currently a Play Store **search** for "Stravifx". Replace it with the real
  listing URL.
- `url` — the canonical origin used for metadata and social cards (assumed `https://stravifx.com`).

## Layout

```
src/
  app/
    layout.tsx            # fonts (Figtree, IBM Plex Mono, Departure Mono), metadata
    globals.css           # design tokens: ink / paper modes, gold accent, motion
    page.tsx              # section assembly
    icon.svg              # favicon (the wordmark's star)
    opengraph-image.jpg   # social card, a frame from the film
  components/
    SiteNav.tsx  SiteFooter.tsx
    FilmPlayer.tsx        # the product film: plays muted in view, scales in on scroll
    WatchFilmButton.tsx   # restarts the film with sound
    Reveal.tsx            # scroll-reveal wrapper
    CandleField.tsx       # decorative candlestick backdrop
    PlayBadge.tsx  Eyebrow.tsx  icons.tsx
    sections/
      Hero.tsx  Statement.tsx  HowItReads.tsx  Features.tsx
      Markets.tsx  Principles.tsx  Faq.tsx  FinalCta.tsx
  lib/site.ts             # name, URLs, nav links
public/
  film/                   # stravifx-film.mp4 (web encode) + poster.jpg
  screens/                # app screenshots, status bars cropped
  brand/                  # wordmark, official Google Play badge
```

## Design notes

- **Two modes, as in the film.** Ink (black) is the default; one paper section carries the
  principles and FAQ.
- **One accent.** Stravifx gold. Green, red and cyan appear only inside app data.
- **Type.** Figtree for speech, Departure Mono (pixel) for numbers, IBM Plex Mono for labels.
- **Real numbers.** The feature tiles are vector rebuilds of app UI using the EUR/USD 1H setup
  from the screenshots. No win-rate or performance claims anywhere.
- **Motion** respects `prefers-reduced-motion`; the film does not autoplay in that case.

## History

This repo started as a clone of another site made with `ai-website-cloner-template`. The old
components and assets are parked in `.archive/amy-clone/` (not built, not served) and can be
deleted once you no longer need them. `docs/research/` and `docs/design-references/` still
describe that original clone.
# stravifx
