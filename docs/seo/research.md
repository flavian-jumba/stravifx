# StraviFX SEO research notebook

The daily SEO task studies one topic each day and records what it learns
here. The **Playbook** is the distilled, current best practice; the task
reads it before building anything, so each day's research changes how the
next pages get built. The research log below it holds the raw findings and
sources.

## Playbook (read before every build; keep it under ~40 bullets)

Each bullet: the practice, why, and the source plus date it was confirmed.
Replace bullets that newer evidence contradicts instead of stacking them.

- Start definition and guide pages with a 40–60-word direct answer; AI answers and featured snippets lift the first clean definition. (Seeded 2026-10-15; to be confirmed with sources)
- Keep the same name, description and logo on every profile, and list every profile in `SITE.sameAs`; consistent entity signals separate StraviFX from Strava and StriveFX. (Seeded 2026-10-15; to be confirmed)
- Bing's index feeds ChatGPT Search and Copilot; IndexNow speeds up Bing discovery. (Seeded 2026-10-15; to be confirmed)
- Finance is a YMYL topic: show who publishes the site, cite primary sources, keep risk disclosures visible. (Seeded 2026-10-15; to be confirmed)
- Don't expect a Google rich result from FAQPage markup: Google stopped showing FAQ rich results on 2026-05-07 and removed the docs on 2026-06-15. Keep FAQPage only where a real, visible FAQ exists; never add an FAQ just for schema. ([Search Central changelog](https://developers.google.com/search/updates), 2026-05-08 and 2026-06-15)
- Skip HowTo markup. Google stopped showing HowTo rich results on 2023-09-13, so it adds work and no visibility. ([Changes to HowTo and FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes), 2023-08-08, updated 2023-09-14)
- BreadcrumbList is still a supported rich result; keep it on every content page, with at least two items and the final item matching the page URL. ([Breadcrumb docs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), updated 2026-09-08)
- AI Overviews and AI Mode need no special schema, AI text files or markup; what matters is crawlable, helpful pages and structured data that matches visible text. Treat `llms.txt` as a cheap extra, never a priority. ([AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), updated 2025-12-10)
- The SoftwareApplication/MobileApplication rich result requires `aggregateRating` or `review`. StraviFX has no first-party ratings to mark up, so the app schema stays rating-free (no rich result) until genuine on-site reviews exist; never borrow Play Store ratings. ([Software app docs](https://developers.google.com/search/docs/appearance/structured-data/software-app), updated 2026-09-08; [review snippet guidelines on fake/incentivised reviews](https://developers.google.com/search/updates), 2026-07-24)

- Every date in structured data (`uploadDate`, `datePublished`, `dateModified`…) must be a full ISO 8601 datetime with a timezone, e.g. `2026-10-16T00:00:00+03:00` (Nairobi), never a bare `2026-10-16`. Search Console flagged the homepage VideoObject for exactly this. ([Video structured data](https://developers.google.com/search/docs/appearance/structured-data/video); Search Console Videos report, 2026-10-16)

## Research rotation

| Day | Theme |
|---|---|
| Monday | Google Search: Search Central updates, core and spam updates, ranking documentation |
| Tuesday | AI search (GEO): how ChatGPT, Perplexity, Gemini and AI Overviews pick and cite sources |
| Wednesday | SERP and competitor study for one target keyword from the backlog |
| Thursday | Google Play ASO: ranking factors, listing experiments, finance-app policy |
| Friday | Technical SEO: Core Web Vitals, Next.js SEO features, structured data changes |
| Saturday | Links and digital PR: directories, communities, Kenya/Africa fintech press, partnerships |
| Sunday | Content and keyword opportunities: question keywords, People Also Ask, topic gaps |

## Open research questions

Answer these first when the day's theme fits (move each into the log once answered).

- **Q1 (Tuesday, AI search):** Vendor research cited in the `ai-seo` skill claims ChatGPT cut citations of listicles by about 50% and of comparison pages by about 32% in August 2026, and that self-published "best X" lists often get the publisher's competitors recommended instead. Is this confirmed by independent or primary sources? Decides the Phase 4 "Best AI chart analysis apps" item. (Added 2026-10-16)
- **Q2 (Thursday, Play ASO):** Does Google Play index review text and developer replies for search? The `android-aso` skill says yes; no source was given. (Added 2026-10-16)
- **Q3 (Friday, technical):** Do non-Google AI engines (ChatGPT search, Perplexity, Copilot) use FAQPage or other schema when choosing what to cite, now that Google has dropped FAQ rich results? (Added 2026-10-16)

## Research log (newest first)

<!-- Entry format:
### YYYY-MM-DD: <theme>: <one-line question studied>
- Finding: <what was learned> (Evidence: confirmed | strong | anecdotal) [source title](url), published YYYY-MM-DD
- ...
- Playbook change: <added / updated / none>
- Proposal: <link to item added under "Research proposals" in plan.md, or "none">
-->

### 2026-10-16: Technical SEO: which structured data still earns Google rich results or AI visibility for a free calculator page?
- Finding: FAQ rich results no longer appear in Google Search for any site from 2026-05-07; the FAQ docs were removed 2026-06-15. (Evidence: confirmed) [Google Search Central documentation changelog](https://developers.google.com/search/updates), entries 2026-05-08 and 2026-06-15. Secondary coverage: [TechWyse](https://www.techwyse.com/news/ai-search/google-faq-rich-results-deprecated-2026), [PPC Land](https://ppc.land/google-kills-faq-rich-results-what-seos-saw-coming-since-2019/), 2026
- Finding: several outlets say Google "will continue to use FAQ structured data to understand pages". I could not find that sentence on a Google page. (Evidence: anecdotal) e.g. [Priority Pixels](https://prioritypixels.co.uk/insights/google-ends-faq-rich-results-in-search/), 2026
- Finding: HowTo rich results have been gone since 2023-09-13; markup can stay but adds no visibility. (Evidence: confirmed) [Changes to HowTo and FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes), 2023-08-08, updated 2023-09-14
- Finding: Google keeps pruning rarely used rich results (7 types in June 2025, more from Nov 2025, Search Console support removed from Jan 2026); removals don't affect ranking. (Evidence: confirmed) [Simplifying the search results page](https://developers.google.com/search/blog/2025/06/simplifying-search-results), 2025-06-12; [Update on our efforts](https://developers.google.com/search/blog/2025/11/update-on-our-efforts), 2025-11-05
- Finding: BreadcrumbList remains a supported rich result (the doc mentions desktop availability). (Evidence: confirmed) [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), updated 2026-09-08
- Finding: AI Overviews/AI Mode need no special schema, AI text files or markup. (Evidence: confirmed) [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), updated 2025-12-10
- Finding: SoftwareApplication rich results require `aggregateRating` or `review`; a 2026-07-24 guideline targets fake and undisclosed incentivised reviews. (Evidence: confirmed) [Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app), updated 2026-09-08
- Finding: Bing's Fabrice Canel reportedly said at SMX Munich (March 2025) that schema helps Microsoft's LLMs understand content. Only a second-hand report found. (Evidence: anecdotal) [Ahrefs (FR), schema markup guide](https://ahrefs.com/fr/blog/balisage-schema/)
- SERP check: "lot size calculator" (US web search) mixes real-estate land calculators with forex ones (Myfxbook, Forex Tester, TradingView scripts). Our title already disambiguates with "Forex, Gold & JPY Pairs".
- Rejected: none of the findings suggested grey-hat tactics. Marking up Play Store ratings as `aggregateRating` to win the app rich result was considered and rejected (ratings must be first-party and visible; fake/borrowed reviews break Google's review snippet guidelines).
- Playbook change: added 5 bullets (FAQPage, HowTo, BreadcrumbList, AI features, app rating schema)
- Proposal: none. The live site already uses only BreadcrumbList plus FAQPage on visible FAQs and no rating markup, so nothing needs fixing.
