# StraviFX SEO daily log

Newest entry first. One entry per daily run.

## 2026-10-16

- Shipped: lot size calculator (forex XXX/USD, USD/JPY, JPY crosses, USD/CAD, USD/CHF, XAU/USD; formula, 3 worked examples, FAQ with FAQPage JSON-LD, BreadcrumbList, risk note, Get StraviFX CTA) → https://www.stravifx.app/tools/lot-size-calculator . Added to sitemap (updated 2026-10-16), footer `RESOURCE_LINKS` and `llms.txt` (new "Tools" section). Live on the 2nd poll (~15 s after push)
- Health: 13/13 URLs 200 (8 fixed paths + 5 sitemap URLs, before the ship); after the ship the homepage is 200 and the sitemap lists the new URL. Title, canonical, JSON-LD (5 types parse) and Play links (`id=com.flavian.fxp`, 14 links) OK. PageSpeed mobile unavailable (API daily quota exceeded, 429)
- Visibility (rough web search, not Google rank): "StraviFX" → not seen (Strava, StriveFX, StreamFX); "StraviFX app" → not seen (Strava, StravistiX); "lot size calculator" → not seen (page went live minutes earlier; results mix land-area and forex calculators)
- Title changes: none
- Research: Technical SEO: FAQ rich results ended for every site on 2026-05-07 and HowTo in 2023; BreadcrumbList is still supported; AI Overviews need no special schema; Playbook changed (+5 bullets); proposal none
- Notes: Verified the calculator in the browser at 375px (no horizontal scroll, one H1): EUR/USD $5,000 / 1% / 25 pips → 0.20 lots; gold 500 pips → 0.10 lots (10 oz); USD/JPY at 150 / 30 pips → 0.25 lots; $100 / 1% / 20 pips → below 0.01 lots, with an honest warning. The account currency is fixed to USD and the rate fields default to example values (USD/JPY 150.00, USD/CAD 1.3700) that the visitor can override; no live prices are fetched. Gold uses 1 pip = $0.01 and the page explains brokers that use $0.10. Breadcrumbs are Home → Lot size calculator for now, because /tools doesn't exist yet; add the Tools crumb when the hub ships. The FAQPage markup gives no Google rich result any more (see research), but it matches a visible FAQ and is harmless.

## 2026-10-15

- Shipped: shared `ContentPage` layout (`src/components/ContentPage.tsx`: breadcrumbs, one H1, direct-answer slot, risk note linking /disclaimer, "Get StraviFX" CTA, BreadcrumbList JSON-LD plus optional extra schema) + a "Resources" row in the footer → visible on every page, e.g. https://www.stravifx.app/
- Health: 13/13 URLs 200 (8 fixed paths + 5 sitemap URLs); title, canonical, JSON-LD (5 types parse) and Play links (`id=com.flavian.fxp`) OK; PageSpeed mobile unavailable (API daily quota exceeded, 429)
- Visibility (rough web search, not Google rank): "StraviFX" → not seen (Strava, StriveFX, StreamFX instead); "StraviFX app" → not seen. No content page shipped yet, so there's no target keyword to check
- Notes: the Resources column only lists live destinations (Learn → /#learn, Trading FAQ → /#faq). Tools and Glossary links were left out on purpose because /tools and /glossary don't exist yet, and linking them would send visitors and crawlers to 404s. Add each one to `RESOURCE_LINKS` in `src/lib/site.ts` when its hub ships. `ContentPage` has no route using it yet; the lot size calculator will be the first.

## 2026-10-15 (setup)

- Baseline: site live with 5 indexable URLs (/, /privacy, /terms, /disclaimer, /delete-account)
- Web search for "StraviFX": site not yet visible; results show Strava, StriveFX, Stravix
- Daily task created; it starts with Phase 1 of `docs/seo/plan.md`
