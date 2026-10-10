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
- `url` — the canonical origin used for metadata and social cards (`https://www.stravifx.app`).

### Learn (paid waitlist)

Visitors enter a name and email in the Learn section, pay on Paystack, and land on
`/learn/welcome`. The payment logic runs in **Supabase Edge Functions**, so every secret lives
in Supabase and the site holds none.

```
form ──▶ learn-checkout ──▶ pending row in learn_waitlist ──▶ Paystack pay page
                                                                   │
/learn/welcome ──▶ learn-confirm ──▶ asks Paystack ◀───────────────┤
                   paystack-webhook ◀── Paystack's own confirmation ┘
```

A seat only becomes `paid` after a function has verified the transaction with Paystack and the
amount matches what was quoted. The return page and the webhook share that one check.

**To open checkout** (the site shows "Checkout opens soon" until this is done):

```bash
npx supabase login                      # the account that owns the Stravifx project
npx supabase link --project-ref <ref>   # the ref is the subdomain of NEXT_PUBLIC_SUPABASE_URL
npx supabase db push                    # creates the learn_waitlist table
npx supabase functions deploy           # learn-checkout, learn-confirm, paystack-webhook
npx supabase secrets set PAYSTACK_SECRET_KEY=sk_live_... LEARN_PRICE_AMOUNT=2500 SITE_URL=https://your-domain
```

Then in Paystack → Settings → API Keys & Webhooks, set the **Webhook URL** to
`https://<ref>.supabase.co/functions/v1/paystack-webhook`.

All settings are listed in [`.env.example`](.env.example). The price shown on the site is read
from Supabase and refreshes within five minutes of a change. The curriculum outline in
[`src/lib/learn.ts`](src/lib/learn.ts) is a draft: edit the modules there.

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
      Markets.tsx  Learn.tsx  Principles.tsx  Faq.tsx  FinalCta.tsx
  app/learn/welcome/      # where buyers land after paying
  lib/site.ts             # name, URLs, nav links
  lib/learn.ts            # Learn curriculum
  lib/learn-api.ts        # the site's calls to the Supabase functions
supabase/
  migrations/             # SQL for the waitlist table
  functions/              # learn-checkout, learn-confirm, paystack-webhook
    _shared/learn.ts      # all the payment logic
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
- **Phones.** Below 1024px the six steps become a swipeable deck, the film gains a full-screen
  button, and every control has a thumb-sized hit area. Checked from 320px to 1440px.

## History

This repo started as a clone of another site made with `ai-website-cloner-template`. The old
components and assets are parked in `.archive/amy-clone/` (not built, not served) and can be
deleted once you no longer need them. `docs/research/` and `docs/design-references/` still
describe that original clone.
# stravifx
