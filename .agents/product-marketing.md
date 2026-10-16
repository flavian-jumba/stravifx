# Product Marketing Context: StraviFX

**Document version:** 1.0 · **Last updated:** 2026-10-16
**Read this first.** Every marketing task (SEO pages, Play listing copy, ads, emails, directory listings, social posts) starts from this file, so it doesn't re-guess the product. Facts here are checked against the app and site code. Anything unconfirmed is marked **TBD (owner)**.

> This repo is public. Keep private numbers (revenue, conversion rates, user counts) out of this file; record them privately and add only what is safe to publish.

---

## 1. Product overview

- **Name:** StraviFX (exact casing). Old spelling "Stravifx" survives in older links and reviews; never "FXP", "fxp" or "Stravi FX" in new copy.
- **One-liner:** Point your camera at any chart and get a clear trade plan: trend, key levels, entry, stop loss, two targets and the lot size for your account.
- **Tagline:** Any chart. A clear plan.
- **Category:** AI chart analysis / trading tools (Google Play category: Finance).
- **Platform:** Android only (Google Play, package `com.flavian.fxp`). No iOS app. A web version is mentioned in the privacy policy; it is not marketed.
- **Website:** https://www.stravifx.app · **Play listing:** https://play.google.com/store/apps/details?id=com.flavian.fxp
- **Publisher:** Infinytech Solutions, Nairobi, Kenya.
- **How it works (6 steps):** Scan (camera photo or screenshot) → Read (market structure in plain English) → Decide (buy / sell / stand aside + confidence score) → Plan (execution ladder: entry, stop, TP1, TP2 with pips and R:R) → Size (lot size from equity and risk %) → Track (journal follows each setup to target hit / stop hit / open).
- **Markets:** forex majors and crosses, gold (XAU/USD), crypto (BTC, ETH, SOL, XRP…), stocks (e.g. AAPL, TSLA). Timeframes 5m to 1W, with a 1H/4H/1D brief in one view. "Signals" checks six markets hourly: EUR/USD, GBP/USD, USD/JPY, XAU/USD, GBP/JPY, AUD/USD.
- **Under the hood:** chart images are analysed with Google Gemini and checked against live OHLC market data (Twelve Data, Finnhub, Yahoo Finance). Levels are validated against the numeric data, not just the picture.

### Pricing and plans
| | Free | Premium (Pro) |
|---|---|---|
| Analyses per day | 3 | 13 |
| Analysis depth | Standard | Extended: levels anchored to structure, checked for a minimum R:R |
| Instant market read (no screenshot) | No | Yes |
| Swing signals | No | Monthly plans and longer |
| Thesis monitoring (watchlist alerts on briefs) | No | Yes |
| Outcome alerts (target / stop hit) | Yes | Yes |
| Performance insights (win rate by market and timeframe) | Yes | Yes |
| Journal and risk tools (lot size calculator, glossary) | Yes | Yes |

Billing: weekly, monthly, 3-month or yearly through Google Play (RevenueCat). Exact prices: **TBD (owner)**, set in Play Console.
**StraviFX Learn:** a paid-waitlist course cohort sold on the website (Paystack, KES pricing). Modules: Foundations, Reading price, Market structure, Liquidity, Risk first, The trade plan, Journal and review.

## 2. Target audience

- **Primary:** retail traders who trade forex and gold on mobile and want to stop guessing levels: beginners to early-intermediate, often self-taught from YouTube and Telegram, trading small accounts.
- **Geography:** global English-speaking, with a home-market focus on Kenya and Africa (Nigeria, South Africa); funding with M-Pesa or cards.
- **Secondary:** price-action and smart-money-concept (SMC) traders who already mark structure and want a fast second opinion plus a journal.
- **Not B2B.** No personas section.

## 3. Problems and pain points

- Charts are noisy ("pairs, timeframes, indicators, headlines"); by the time they've drawn their lines, price has moved.
- They don't know where to put the stop loss and take profit, so they skip stops or set random ones.
- They size positions by feel, not by risk, so one loss wipes out a week.
- Trading terms (BOS, CHoCH, FVG, order block, liquidity sweep) are confusing.
- Paid signal groups give calls without reasoning, and nobody keeps an honest record of the losses.

## 4. Competitive landscape

| Competitor | What it is | Notes |
|---|---|---|
| ChartAI, ChartsGPT, Chart AI: Technical Analyzer, Charted, Trade AI, SnapTrader | Screenshot → AI levels | Mostly **iOS-only**; weekly/monthly subscriptions |
| Master AI: Trading Chart AI | Android screenshot analyser | Direct Android competitor; thin listing |
| ChartPulse AI | Chrome extension, signal output | $39–79/month |
| TradingView | Charting platform | Not a competitor for analysis; it's where users take screenshots |
| Telegram/WhatsApp signal groups | Human "calls" | The status quo StraviFX replaces |
| Myfxbook, Forex Tester calculators | Free web lot-size calculators | Compete with our /tools pages in search |

## 5. Differentiation (why StraviFX)

1. **Full plan, not just a call:** entry, stop, two targets, pips, R:R and the lot size in one flow.
2. **Works without a screenshot:** live-market read in one tap (Premium).
3. **Honest record:** every setup is tracked to its outcome; losses stay visible.
4. **Plain English:** every trading term links to a definition.
5. **Android-first,** in a niche where most rivals are iOS-only.
6. **Generous free tier:** journal, outcome alerts, insights and risk tools are free.

## 6. Objections and anti-personas

- "AI can't read charts." → Levels are checked against live price data; the confidence score is evidence, not a promise; see /disclaimer.
- "Is this a signal service?" → No. It's analysis and planning; it never places trades, and the decision stays with the user.
- "Another subscription?" → 3 free analyses daily, with core tools free forever.
- **Anti-personas:** people looking for guaranteed profits, copy-trading or auto-execution bots; high-frequency scalpers needing tick-level data; anyone wanting financial advice.

## 7. Switching dynamics

- **Push:** losing money without a plan; signal groups with no accountability; hours spent marking charts.
- **Pull:** a plan in seconds, lot size done for them, an honest journal.
- **Habit:** marking charts by hand; following a group they trust.
- **Anxiety:** "Will the AI be wrong?" Answer it with transparency (reasoning, confidence explained, losses tracked), never with accuracy claims.

## 8. Customer language (from real Play reviews, Oct 2026)

- "The instant analysis is something amazing."
- "All I know is GREEN means UP and RED means DOWN" → beginners; the product must feel easy.
- "Makes trading easy even for a five year old" (don't reuse as a claim; it implies trading is easy).
- "Good interface and AI integration"
- Pain: "I had to wait for the next subscription to upgrade… allow someone to switch through subscriptions."
Words users use: *analysis, signals, chart, levels, upgrade.* Words we prefer in our own copy: *plan, levels, structure, risk, journal.*

## 9. Brand voice

- **Calm, precise, honest. "Straight with you."** No hype, no "🚀", no "guaranteed", "100% accurate", "get rich" or "never lose".
- Short declarative sentences ending with a period. Sentence case. The payoff word goes last.
- Principles used on the site: *Rules, not predictions. · Confidence is not a promise. · Losses stay on the record.*
- Visuals: black ink (#000/#0A0A0B), off-white text (#F5F5F7), one gold accent (#F6BA18); fonts Figtree, IBM Plex Mono, Departure Mono (numerals). Green/red only inside app data.
- Always include a risk note on marketing pages: information and education only, not financial advice; trading carries a high risk of loss.

## 10. Proof points (only what's true)

- Real features shown in real app screenshots (the scan, result, plan and journal screens).
- Google Play listing with genuine user reviews (don't quote star ratings in copy; they change).
- **Do not invent:** user counts, win rates, accuracy percentages, testimonials, awards or press. Publish a track record only when it comes from real journal data.

## 11. Goals

- Rank www.stravifx.app for winnable long-tail searches (calculators, trading glossary, "AI chart analysis app android", Kenya forex) and get cited in AI answers.
- Grow organic Play installs and listing conversion before running paid ads.
- Ads: **not yet.** Google Ads disapproves ads whose destination gives forex signals; any future ad must land on education/tools pages and avoid the word "signals".

## 12. Paid ads

None running (as of 2026-10-16).

## 13. Constraints and compliance

- Google Play: financial features declaration; accurate Data safety form; In-App Review prompt with **no question before it**; no incentivised reviews.
- Google Ads: complex speculative financial products policy (forex/CFD signals).
- Every page and listing: "not financial advice" risk note; no performance promises.
- Legal pages: /privacy, /terms, /disclaimer, /delete-account. Support: stravifxapp@gmail.com · Privacy: privacy@stravifx.app.

## 14. Learnings

- (2026-10-15) Brand was invisible in search; results showed Strava, StriveFX and Stravix. Entity setup started (schema `sameAs`, consistent naming).
- (2026-10-16) FAQ rich results are gone from Google; keep FAQPage schema only where a visible FAQ exists. See `docs/seo/research.md`.
- (2026-10-16) The app asks for a review right after onboarding (too early); 14 reviews arrived on one day. Fix planned.
- Open questions **TBD (owner):** exact prices; the Play "Contains ads" label (the app code has no ads SDK, so it may be wrong); founder name for the About page.

## Changelog

- **1.0 (2026-10-16):** first version, drafted from the app code, website, Play listing and reviews.
