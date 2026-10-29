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
- [x] `/tools/lot-size-calculator`: forex, gold (XAU/USD) and JPY pairs; inputs: balance, risk %, stop in pips, pair; output: lots, units, money at risk. Explain the formula, worked example, FAQ (FAQPage JSON-LD), link to the app (shipped 2026-10-16)
- [x] `/tools/pip-calculator`: pip value per standard/mini/micro lot for majors, JPY pairs and gold, any account currency the page supports (shipped 2026-10-17)
- [x] `/tools/risk-reward-calculator`: entry, stop, target → R:R, break-even win rate (shipped 2026-10-18)
- [x] `/tools` hub page listing every tool (shipped 2026-10-19)

### Phase 2: glossary (definitions are what AI answers quote)
Source of truth: the app's glossary, `~/coding/ReactNative/fxp/src/config/glossary.ts`. Expand each term into a page that starts with a 40–60-word direct answer, then an example, why it matters, common mistakes, related terms, and a link to the app. Three terms per run.
- [x] `/glossary` hub + Market structure, Break of Structure (BOS), Change of Character (CHoCH) (shipped 2026-10-20)
- [x] Market Structure Shift (MSS), Swing high / swing low, Higher highs / higher lows (shipped 2026-10-21)
- [x] Range / consolidation, Retest, Liquidity (shipped 2026-10-22)
- [x] Liquidity sweep / stop hunt, Buy-side / sell-side liquidity, Equal highs / equal lows (shipped 2026-10-23)
- [x] Order block, Fair Value Gap (FVG), Breaker block (shipped 2026-10-24)
- [x] Mitigation block, Supply / demand zone, Premium / discount (shipped 2026-10-25)
- [x] Optimal Trade Entry (OTE), Entry, Stop loss (shipped 2026-10-27)
- [x] Take profit (TP1 / TP2), Invalidation, Confluence (shipped 2026-10-28)
- [x] Timeframe alignment, Risk-to-reward (R:R), Position size / lot (shipped 2026-10-29)
- [ ] Pip, Drawdown, Spread
- [ ] RSI, Divergence, Candlestick / OHLC

### Phase 3: Learn guides (one long guide per run, 1,200–2,000 words, original)
- [ ] `/learn` hub page (the homepage Learn section stays; this indexes the guides)
- [ ] How to set a stop loss and take profit (links to the R:R calculator)
- [ ] The 1% risk rule and position sizing (links to the lot size calculator). Cover forex lots and pips, the 0.01-lot small-account case, losing-streak math, and "stop first, then size" vs "risk first" (research log 2026-10-25)
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
- [ ] "How to choose an AI chart analysis app": a neutral buyer's guide, not a ranked list. State the criteria (platform, what the analysis outputs, whether levels are checked against price data, risk tools, journal/track record, free tier, pricing model, privacy), explain each, say honestly where StraviFX fits and where it doesn't (e.g. Android only), and cite competitors' official pages for any fact about them. Never rank StraviFX first or publish a "best apps" list. (Replaced the "Best AI chart analysis apps for Android" item on 2026-10-20: Q1 answered, self-ranking lists tend to be cited without the publisher being recommended; research log 2026-10-20)
- [ ] `/compare/chartai`: StraviFX vs ChartAI, factual and sourced

### Phase 5: technical polish
- [ ] Add `sizes` to every `next/image` so phones don't download 3840px screenshots; check PageSpeed mobile LCP before/after
- [ ] PNG favicon (48×48+) and apple-icon.png
- [ ] Per-page Open Graph images for tools and guides
- [ ] Internal-link audit: every page reachable from the homepage within 2 clicks, no orphans, descriptive anchor text

### Phase 6: from research (added automatically by the daily research step)
On-site, low-risk ideas the research step found evidence for. Each item names its source in `docs/seo/research.md`. They run after Phases 1–5 unless the owner moves them up.
- [ ] `ContentPage`: add a visible "Published by Infinytech Solutions, Nairobi · Last updated <date>" line under the H1 on tools, glossary and guide pages, the date taken from the same `PAGES` entry in `src/app/sitemap.ts` (one source of truth, so it stays truthful), linking to /disclaimer until an About page exists. Also add a WebPage JSON-LD node with `dateModified` set to that same date as a full ISO datetime (`T00:00:00+03:00`), so the visible and structured dates always match (research log 2026-10-27). Must not change any title, H1, canonical or URL. Why: Google's helpful content self-assessment asks whether it's clear who made the content and whether it is easily verified, and finance is YMYL (research log 2026-10-18)
- [ ] Glossary hub: add a short "Where to start" section above the term cards giving a reading order for the Structure terms (swing high / swing low → higher highs / higher lows → market structure → BOS → CHoCH → MSS), one line each on what the next page adds, so the overlapping pages read as a path rather than competing copies. Must not change the hub's title, meta description, H1 or URL; bump `/glossary` in the sitemap (a reader-visible new section). Why: the three terms shipped 2026-10-21 overlap with market structure, and Google's guidance favours distinct, well-linked pages over duplication (research log 2026-10-21)
- [ ] Lot size calculator: when the size works out below 0.01 lots, also show what 0.01 lots would risk on that stop (money and % of the balance) and the widest stop that keeps the chosen risk at 0.01 lots (e.g. $50 at 1% on EUR/USD: 0.01 lots on a 20-pip stop risks $2.00, 4%; the widest stop is 5 pips). Add one sentence to the page's small-account FAQ answer pointing to it. Must not change the page's title, meta description, H1 or URL; bump `/tools/lot-size-calculator` in the sitemap (a reader-visible new output). Verify with worked examples for EUR/USD, USD/JPY and gold before shipping. Why: small accounts at the 0.01-lot minimum are a question forums ask and no ranking guide answers, and our audience trades small accounts (research log 2026-10-25)
- [ ] Risk reward calculator: add an optional second target (TP2) and a "% closed at TP1" input, and show what each outcome pays in money and R (stop before TP1; TP1 then the original stop; TP1 then a stop at the entry; TP1 and TP2) next to the single-target result, with the formulas on the page. Default to off so the existing calculator is unchanged. Verify with the worked example on /glossary/take-profit (EUR/USD, 30-pip stop, TP1 45 pips, TP2 75 pips, half and half: −1R, +0.25R, +0.75R, +2R) plus a gold and a USD/JPY example. Must not change the page's title, meta description, H1 or URL; bump `/tools/risk-reward-calculator` in the sitemap (a reader-visible new output). Why: ranking pages for TP1/TP2 describe partial exits but none works out what each outcome pays (research log 2026-10-28)

### When the backlog is empty
Pick the weakest page (thinnest content or worst PageSpeed) and improve it, or propose new items in the log for the owner to approve.

## Research proposals: owner decides (the task must not do these)
Ideas from research that involve money, accounts, outreach, off-site posting, the app, Play Console, or anything with policy risk. To approve one, move it into the Backlog (or do it yourself) and tick it here.

- [ ] **Monthly AI-visibility check** (from the `ai-seo` skill review, 2026-10-16). Once a month, ask each of these in ChatGPT, Perplexity and Google (AI Overview / AI Mode), 3 times each because answers vary between runs. Record per platform how often StraviFX or stravifx.app is mentioned (e.g. "2/3") and which sites are cited instead; add a line to `docs/seo/log.md`. Sites that keep getting cited are the targets for directories and PR.
  1. best AI chart analysis app for Android
  2. app that analyses a trading chart from a screenshot
  3. AI forex chart analysis app
  4. how to calculate lot size for gold
  5. forex lot size calculator
  6. what is a break of structure in trading
  7. best forex app for beginners in Kenya
  8. ChartAI alternative for Android
  9. what is StraviFX
  10. is StraviFX legit
- [ ] **Directory and launch plan** (from the `directory-submissions` skill review, 2026-10-16). Start only after `/tools`, the glossary hub and at least one comparison page are live, so the links land on useful pages.
  - Week 1: Crunchbase, LinkedIn company page, AlternativeTo (as an alternative to ChartAI / TradingView-style tools), SaaSHub
  - Week 2: AI-tool directories: There's An AI For That, Futurepedia, Toolify, Future Tools
  - Week 3–4: Product Hunt launch (prepare ~3 weeks ahead: screenshots, the 35-second film, a founder story; ask for feedback, never for upvotes)
  - Write a different description for each directory (outcome-led for startup sites, "AI-first" for AI directories, "alternative to X" for AlternativeTo); never paste the same text everywhere
  - Never pay submission services; skip directories with no real traffic or that demand a badge swap. Wikidata only once independent sources (press) exist, since it has notability rules
  - Add each live profile URL to `SITE.sameAs` in `src/lib/site.ts`
  - Update 2026-10-24 (research log): AlternativeTo is free but the queue is long (thousands of apps; optional paid priority review, reported at $5, doesn't guarantee approval); SaaSHub is free, takes Android apps with a real website, and wants named competitors plus verification from an @stravifx.app email (privacy@stravifx.app exists; a support@ address would fit better); Product Hunt is free and forbids asking for upvotes. Paid AI directories now cost about $49 (TAAFT), $99 (Toolify, reported) and ~$497 (Futurepedia, reported); new listings' links are mostly reported as nofollow, so pay only if you want the referral traffic, not for SEO. The glossary hub and /tools are live; the comparison page this plan waits for isn't yet
- [ ] **Play listing improvements** (from the `android-aso` skill review, 2026-10-16)
  - Run Store Listing Experiments one element at a time (short description first, then the first screenshot, then the icon), at least 7 days each
  - Keep "AI chart analysis" and "forex" inside the first 167 characters of the full description (the part shown before "more")
  - Translate the listing (French for Francophone Africa, Portuguese (Brazil), Spanish (Latin America)); each language is a separate search index. Translate properly, not just machine output
  - Reply to every 1–3 star review; when you fix the problem, reply again with "Fixed in version X.X"
  - Write replies in plain words that answer the reviewer, reusing their own terms where natural ("chart analysis", "lot size"). Play may index reply text (one unconfirmed experiment, research log 2026-10-22), but never add keyword lists to replies, never ask for a higher rating, and never ask reviewers to use particular words
  - Remove the "Contains ads" label if the app shows no ads (the app code has no ads SDK)
  - Update 2026-10-29 (research log): Ask Play now builds side-by-side app comparisons from listings and reviews on points like subscription model and offline use. State plainly in the full description: 3 free analyses a day, the plan lengths (weekly, monthly, 3-month, yearly), Android only, and what needs an internet connection (the analysis does)
- [ ] **Let subscribers switch plans** (from review mining, 2026-10-16). A Play review asks to move between subscriptions without waiting for renewal. Google Play Billing and RevenueCat both support upgrades and downgrades; enable it in the app's paywall

- [ ] **Embeddable calculators** (from research 2026-10-17). Offer the lot size and pip calculators as an iframe embed for trading blogs, forums and Telegram/WhatsApp community sites. Rules if approved: the credit link reads "StraviFX" (never "best forex calculator"-type anchors), carries `rel="nofollow"`, and is visible; no hidden links; no requirement to link back. Value is referral traffic and brand awareness, not PageRank, because Google lists keyword-rich widget links as link spam. Needs owner approval because it distributes our code onto other sites and needs outreach to get used.

- [ ] **Search-keyword custom store listing** (from research 2026-10-22). Play Console lets you create up to 50 custom store listings tailored by country, user state or search keyword, and shows which keywords people use to find the app. Check Play Console's keyword report for searches about calculators or risk (e.g. "lot size calculator", "forex calculator"); if StraviFX gets real traffic from one, create a custom listing for that keyword whose short description and first screenshot lead with the free risk tools (the lot size calculator in the app), not the AI scan. Everything must stay accurate and within the Metadata policy (no "#1", no promo text in the title). Owner task: it's done in Play Console.

- [ ] **Human fact-check and AI-assisted disclosure** (from research 2026-10-19). Google's 2026-10-01 guidance asks publishers to manually fact-check AI-generated content, including titles, meta descriptions and structured data, before publishing, and calls AI or automation disclosures useful. Finance is YMYL, and today the daily task publishes with no human review. Two decisions for the owner: (1) read each day's shipped page within a day or two (the daily report links it) and reply with any errors; (2) whether to show a short, truthful line on tools, glossary and guide pages such as "Drafted with AI assistance; formulas checked with worked examples; sources cited" (it may only say "reviewed by" a person if one really reviews it). If (2) is approved, the task can fold it into the Phase 6 publisher / last-updated line.

- [ ] **Android vitals check and the April 2027 sign-in restore rule** (from research 2026-10-29). Google Play makes apps less discoverable when the user-perceived crash rate is above 1.09% (or 8% on one phone model) or the ANR rate above 0.47% (or 8% per model) over 28 days, and per-model breaches can put a warning on the listing; a 5% excessive-wake-lock threshold has applied since 2026-03-01 (StraviFX has FCM, notifications and a widget). (1) Open Play Console → Android vitals and check all four against the thresholds. (2) From April 2027, apps with sign-in must restore it on a new phone through the Restore Credentials API to keep "full publishing capabilities and optimal visibility"; the Block Store grandfather date (2026-09-30) has passed and the app uses Firebase Auth with no restore code. Plan the app change before then (or, if you believe StraviFX qualifies as a regulated financial app, request the exemption in Play Console before the date). R8 shrinking is already on, which covers the February 2027 DEX rule. Owner task: Play Console and app code.

## Blocked: needs the owner (the task must not do these)
- [ ] **Search Console data for the daily task** (deferred by the owner on 2026-10-17 until Google indexes pages). When Search Console → Pages shows **Indexed > 0**, ask Claude to walk through the one-time service-account setup (read-only "Restricted" user, key file kept outside the repos). Then the task gets a weekly "measure, learn, double down" loop: an experiments log, striking-distance pages (positions 8–20), low-CTR title tests and missing-page detection
- [ ] **Free PageSpeed Insights API key**, so the health check stops showing "unavailable" (the shared quota runs out daily)
- [ ] Send the Play app-signing SHA-256 (Play Console → Setup → App signing) for `/.well-known/assetlinks.json`
- [ ] Track-record page: needs real, aggregated outcome data from the app's journal
- [ ] About page with founder name/photo: owner decides what personal info to publish
- [ ] New social profiles (YouTube, X, TikTok, LinkedIn, Product Hunt): add each URL to `SITE.sameAs` in `src/lib/site.ts`
- [ ] Postal address for emails (currently Airmont, NY)
- [ ] Search Console: submit sitemap, request indexing; Bing Webmaster Tools: import from GSC
- [ ] Play Console: new title, short/long description, tags, website, Data safety form
- [ ] Expo: set production `EXPO_PUBLIC_PRIVACY_POLICY_URL` to https://www.stravifx.app/privacy, then ship a new build
