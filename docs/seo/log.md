# StraviFX SEO daily log

Newest entry first. One entry per daily run.

## 2026-10-15

- Shipped: shared `ContentPage` layout (`src/components/ContentPage.tsx`: breadcrumbs, one H1, direct-answer slot, risk note linking /disclaimer, "Get StraviFX" CTA, BreadcrumbList JSON-LD plus optional extra schema) + a "Resources" row in the footer → visible on every page, e.g. https://www.stravifx.app/
- Health: 13/13 URLs 200 (8 fixed paths + 5 sitemap URLs); title, canonical, JSON-LD (5 types parse) and Play links (`id=com.flavian.fxp`) OK; PageSpeed mobile unavailable (API daily quota exceeded, 429)
- Visibility (rough web search, not Google rank): "StraviFX" → not seen (Strava, StriveFX, StreamFX instead); "StraviFX app" → not seen. No content page shipped yet, so there's no target keyword to check
- Notes: the Resources column only lists live destinations (Learn → /#learn, Trading FAQ → /#faq). Tools and Glossary links were left out on purpose because /tools and /glossary don't exist yet, and linking them would send visitors and crawlers to 404s. Add each one to `RESOURCE_LINKS` in `src/lib/site.ts` when its hub ships. `ContentPage` has no route using it yet; the lot size calculator will be the first.

## 2026-10-15 (setup)

- Baseline: site live with 5 indexable URLs (/, /privacy, /terms, /disclaimer, /delete-account)
- Web search for "StraviFX": site not yet visible; results show Strava, StriveFX, Stravix
- Daily task created; it starts with Phase 1 of `docs/seo/plan.md`
