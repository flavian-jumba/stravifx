# StraviFX SEO daily log

Newest entry first. One entry per daily run.

## 2026-10-19

- Shipped: `/tools` hub (cards for the three calculators with the question each answers, inputs and outputs; which calculator to use first; one EUR/USD trade worked through all three: 1:2, 33.3% break-even, $10 a pip, 0.16 lots risking $48; shared lot and pip conventions; ItemList + BreadcrumbList JSON-LD, risk note, Get StraviFX CTA) → https://www.stravifx.app/tools . Added to sitemap (updated 2026-10-19), footer `RESOURCE_LINKS` ("All tools") and `llms.txt` Tools. The three calculators now have a Home → Tools → page breadcrumb (visible and BreadcrumbList); their titles, H1s, canonicals and sitemap dates are unchanged. Live on the 3rd poll (~30 s after push)
- Health: 16/16 URLs 200 (8 fixed paths + 8 sitemap URLs, before the ship); after the ship the homepage is 200 and the sitemap lists /tools. Title, canonical, JSON-LD (Organization, WebSite, MobileApplication, VideoObject, FAQPage parse) and Play links (`id=com.flavian.fxp`, 14 links) OK. PageSpeed mobile unavailable (API daily quota exceeded, 429)
- Visibility (rough web search, not Google rank): "StraviFX" → not seen (Strava, StriveFX, StreamFX); "StraviFX app" → not seen (Strava, StravistiX); "risk reward calculator forex break-even win rate" → not seen (TradingView scripts, VT Markets, Liberated Stock Trader)
- Title changes: none
- Research: Google Search: Google's 2026-10-01 generative AI guidance asks for a manual fact-check of AI-written content and its metadata before publishing; no ranking update is rolling out (September spam update ended ~10-08); Playbook changed (+1 bullet); proposal added under Research proposals (human fact-check and AI-assisted disclosure)
- Notes: Verified at 375px before pushing (one H1, H2/H3 order logical, no horizontal scroll, canonical https://www.stravifx.app/tools). The hub's title is "Free Forex & Gold Trading Calculators · StraviFX" (48 characters). Next: `/glossary` hub + Market structure, BOS, CHoCH; apply the 2026-10-18 finding (name the close-vs-wick variants and state StraviFX's convention, which should be checked against the app's glossary).

## 2026-10-18

- Shipped: risk reward calculator (buy or sell; most forex pairs, JPY pairs and gold; entry, stop, target and optional spread + commission in pips → R:R, risk and reward in pips, break-even win rate, average result per trade in R at 30–60% win rates; formulas, 4 worked examples, 5-question FAQ with FAQPage JSON-LD, BreadcrumbList, risk note, Get StraviFX CTA) → https://www.stravifx.app/tools/risk-reward-calculator . Added to sitemap (updated 2026-10-18), footer `RESOURCE_LINKS` and `llms.txt` Tools. Live on the 3rd poll (~30 s after push)
- Health: 15/15 URLs 200 (8 fixed paths + 7 sitemap URLs, before the ship); after the ship the homepage is 200 and the sitemap lists the new URL. Title, canonical, JSON-LD (5 types parse) and Play links (`id=com.flavian.fxp`, 14 links) OK. PageSpeed mobile unavailable (API daily quota exceeded, 429)
- Visibility (rough web search, not Google rank): "StraviFX" → not seen (Strava, StriveFX, StreamFX); "StraviFX app" → not seen (Strava, StravistiX); "pip calculator forex gold JPY account currency" → not seen (FXCM, Dukascopy, TradingView scripts)
- Title changes: none
- Research: Content and keyword opportunities: BOS/CHoCH results are mostly TradingView posts and broker blogs that disagree on definitions; Google's helpful content doc (updated 2026-10-05) now scores main content, tools included, on effort, originality, skill and accuracy; Playbook changed (+3 bullets, 1 confirmed); proposal added to Phase 6 (visible publisher + last-updated line)
- Notes: Verified in the browser at 375px (one H1, no horizontal scroll, BreadcrumbList + FAQPage parse): EUR/USD buy 1.1000 / 1.0970 / 1.1060 → 1:2.00, 33.3%; with 1.5 pips of costs → 1:1.86, 35%; the Sell toggle mirrors the levels (1.1030 / 1.0940) → 1:2.00; gold 4000 / 3990 / 4030 → 1,000 / 3,000 pips, 1:3.00, 25%; a buy stop above the entry and costs above the reward both show plain error messages. Prices are labelled examples; no live data. The R:R page links to the lot size and pip calculators, but those two pages don't link back yet. The /tools hub (next item) will tie all three together. Next: `/tools` hub. When it ships, add the Tools crumb to the three calculators' breadcrumbs.

## 2026-10-17

- Shipped: pip calculator (12 instruments: XXX/USD majors, USD/JPY and JPY crosses, USD/CAD, USD/CHF, EUR/GBP, XAU/USD; USD, EUR or GBP account; pip value per standard/mini/micro lot and a custom size; formula, 5 worked examples, FAQ with FAQPage JSON-LD, BreadcrumbList, risk note, Get StraviFX CTA) → https://www.stravifx.app/tools/pip-calculator . Added to sitemap (updated 2026-10-17), footer `RESOURCE_LINKS`, `llms.txt`, and linked from the lot size calculator's formula section. Live on the 3rd poll (~30 s after push)
- Health: 14/14 URLs 200 (8 fixed paths + 6 sitemap URLs, before the ship); after the ship the homepage is 200 and the sitemap lists the new URL. Title, canonical, JSON-LD (5 types parse) and Play links (`id=com.flavian.fxp`, 14 links) OK. PageSpeed mobile unavailable (API daily quota exceeded, 429)
- Visibility (rough web search, not Google rank): "StraviFX" → not seen (Strava, StriveFX, StreamFX); "StraviFX app" → not seen (Strava, StravistiX); "gold lot size calculator forex" → not seen (TradingView scripts only)
- Title changes: none
- Research: Links and digital PR: Google names keyword-rich widget links, distributed footer links and low-quality directory links as link spam; links "happen naturally over time"; Playbook changed (+2 bullets); proposal added under Research proposals (embeddable calculators)
- Notes: Verified in the browser at 375px (one H1, no horizontal scroll, BreadcrumbList + FAQPage parse): EUR/USD USD acct → $10.00 / $1.00 / $0.10; USD/JPY at 150 → $6.67; EUR/GBP USD acct at GBP/USD 1.30 → $13.00; EUR/USD EUR acct at 1.10 → €9.09; gold → $1.00 per lot; GBP/JPY GBP acct at 195 → £5.13. Conversion rates are labelled example values (no live prices); the visitor can type today's rate. The lot size calculator gained one sentence linking to the pip calculator; its sitemap date was not bumped (no reader-visible content change beyond a cross-link). Account currencies are USD, EUR and GBP only; KES was left out because the conversion pairs and broker account currencies for it are uncommon.

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
