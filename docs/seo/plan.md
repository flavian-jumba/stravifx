# StraviFX SEO backlog

The daily SEO task works through this file top to bottom. It does the first
unchecked item in **Backlog** each day, ticks it, and logs the result in
`docs/seo/log.md`. Reorder or add items freely; the task always takes the first
unchecked one.

Goal: rank www.stravifx.app for winnable long-tail searches (calculators,
trading terms, "AI chart analysis app android", Kenya forex) and get StraviFX
cited by AI search, without breaking Google's spam policies.

## Done before the daily task started (15 Oct 2026)

- [x] robots.txt, sitemap.xml, manifest, llms.txt
- [x] Organization / WebSite / MobileApplication / VideoObject / FAQPage JSON-LD
- [x] Play buttons point at the real listing with a website referrer
- [x] /privacy, /terms, /disclaimer, /delete-account
- [x] Brand renamed to StraviFX everywhere ("Stravifx" kept as an alternate name)

## Backlog

### Phase 1: free tools (highest search demand, most linkable)
- [x] Shared `ContentPage` layout for non-legal pages (breadcrumbs, risk note, "Get the app" CTA, BreadcrumbList JSON-LD) + a "Resources" column in the footer linking Tools, Glossary and Learn (shipped 2026-10-15)
- [ ] `/tools/lot-size-calculator`: forex, gold (XAU/USD) and JPY pairs; inputs: balance, risk %, stop in pips, pair; output: lots, units, money at risk. Explain the formula, worked example, FAQ (FAQPage JSON-LD), link to the app
- [ ] `/tools/pip-calculator`: pip value per standard/mini/micro lot for majors, JPY pairs and gold, any account currency the page supports
- [ ] `/tools/risk-reward-calculator`: entry, stop, target → R:R, break-even win rate
- [ ] `/tools` hub page listing every tool

### Phase 2: glossary (definitions are what AI answers quote)
Source of truth: the app's glossary, `~/coding/ReactNative/fxp/src/config/glossary.ts`. Expand each term into a page that starts with a 40–60-word direct answer, then an example, why it matters, common mistakes, related terms, and a link to the app. Three terms per run.
- [ ] `/glossary` hub + Market structure, Break of Structure (BOS), Change of Character (CHoCH)
- [ ] Market Structure Shift (MSS), Swing high / swing low, Higher highs / higher lows
- [ ] Range / consolidation, Retest, Liquidity
- [ ] Liquidity sweep / stop hunt, Buy-side / sell-side liquidity, Equal highs / equal lows
- [ ] Order block, Fair Value Gap (FVG), Breaker block
- [ ] Mitigation block, Supply / demand zone, Premium / discount
- [ ] Optimal Trade Entry (OTE), Entry, Stop loss
- [ ] Take profit (TP1 / TP2), Invalidation, Confluence
- [ ] Timeframe alignment, Risk-to-reward (R:R), Position size / lot
- [ ] Pip, Drawdown, Spread
- [ ] RSI, Divergence, Candlestick / OHLC

### Phase 3: Learn guides (one long guide per run, 1,200–2,000 words, original)
- [ ] `/learn` hub page (the homepage Learn section stays; this indexes the guides)
- [ ] How to set a stop loss and take profit (links to the R:R calculator)
- [ ] The 1% risk rule and position sizing (links to the lot size calculator)
- [ ] Market structure for beginners: trends, swings and breaks
- [ ] Liquidity in forex: where stops sit and why price hunts them
- [ ] How to read candlestick charts
- [ ] How to keep a trading journal that improves your results
- [ ] Forex trading in Kenya for beginners: regulation (CMA), choosing a licensed broker, M-Pesa funding, taxes. Facts must be checked against current official sources and cited
- [ ] Is AI chart analysis accurate? What it can and can't do (honest, links to /disclaimer)

### Phase 4: markets and comparisons
- [ ] `/markets` hub + `/markets/xauusd`: evergreen guide to trading gold (sessions, what moves it, typical pip value, how StraviFX reads it). No live prices or calls unless real data is wired in
- [ ] `/markets/eurusd` and `/markets/gbpusd`
- [ ] `/markets/usdjpy`, `/markets/gbpjpy` and `/markets/audusd`
- [ ] "Best AI chart analysis apps for Android": honest, researched, cites sources, names competitors' strengths
- [ ] `/compare/chartai`: StraviFX vs ChartAI, factual and sourced

### Phase 5: technical polish
- [ ] Add `sizes` to every `next/image` so phones don't download 3840px screenshots; check PageSpeed mobile LCP before/after
- [ ] PNG favicon (48×48+) and apple-icon.png
- [ ] Per-page Open Graph images for tools and guides
- [ ] Internal-link audit: every page reachable from the homepage within 2 clicks, no orphans, descriptive anchor text

### When the backlog is empty
Pick the weakest page (thinnest content or worst PageSpeed) and improve it, or propose new items in the log for the owner to approve.

## Blocked: needs the owner (the task must not do these)
- [ ] Send the Play app-signing SHA-256 (Play Console → Setup → App signing) for `/.well-known/assetlinks.json`
- [ ] Track-record page: needs real, aggregated outcome data from the app's journal
- [ ] About page with founder name/photo: owner decides what personal info to publish
- [ ] New social profiles (YouTube, X, TikTok, LinkedIn, Product Hunt): add each URL to `SITE.sameAs` in `src/lib/site.ts`
- [ ] Postal address for emails (currently Airmont, NY)
- [ ] Search Console: submit sitemap, request indexing; Bing Webmaster Tools: import from GSC
- [ ] Play Console: new title, short/long description, tags, website, Data safety form
- [ ] Expo: set production `EXPO_PUBLIC_PRIVACY_POLICY_URL` to https://www.stravifx.app/privacy, then ship a new build
