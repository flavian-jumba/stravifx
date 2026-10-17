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
- Never build links that Google's link spam policy names: keyword-rich, hidden or low-quality links inside widgets spread across sites, widely distributed footer/template links, or low-quality directory and bookmark links. If a calculator is ever offered as an embed, its credit link uses the brand name as anchor and `rel="nofollow"`. ([Spam policies: link spam](https://developers.google.com/search/docs/essentials/spam-policies), updated 2026-08-28)
- Links mostly help Google discover pages and "happen naturally over time"; promotion through communities, social and word of mouth is fine, but overdoing it can harm the site. So every new page gets sitemap + internal links on day one, and off-site promotion stays an owner decision. ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), updated 2025-12-10)

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

### 2026-10-17: Links and digital PR: how can StraviFX's free calculators earn links without breaking Google's link spam policy?
- Finding: Google's spam policy lists as link spam "keyword-rich, hidden, or low-quality links embedded in widgets that are distributed across various sites", widely distributed footer/template links, and low-quality directory or bookmark links. (Evidence: confirmed) [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies), updated 2026-08-28
- Finding: Google's long-standing advice is to nofollow links inside widgets and embeds, and not to rely on them for links; sites ignoring it risked manual actions. (Evidence: strong, but dated) [Search Engine Land: Matt Cutts recommends nofollowing widget links](https://searchengineland.com/googles-matt-cutts-i-recommend-nofollowing-links-on-widgets-169487), 2013-08; [Search Engine Land: Google's stance on links within widgets](https://searchengineland.com/official-googles-latest-official-stance-on-links-within-widgets-181475), 2014-01
- Finding: `rel="sponsored"` for paid placements, `ugc` for user content, `nofollow` otherwise; Google may still crawl the target via sitemaps. (Evidence: confirmed) [Qualify your outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links), updated 2025-12-10
- Finding: Google says it primarily finds pages through links, that other sites linking to you "happens naturally over time", that promotion (social, community, word of mouth) speeds discovery, and that over-promoting can harm a site. (Evidence: confirmed) [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), updated 2025-12-10
- Finding: Gary Illyes said in Sept 2023 that links are not a top-3 ranking signal and that ranking with zero links is possible. (Evidence: strong, several independent reports of the same talk, not on a Google page) e.g. [Outrank](https://www.outrank.co.uk/latest-news/are-links-still-the-kingpin-of-google-search-rankings/), [Footbridge Media](https://www.footbridgemedia.com/marketing-tips/did-google-say-links-dont-matter), 2023
- Finding: free tools are often called the best linkable asset (e.g. a URL builder with 100+ links, an Etsy fee calculator with 30+ referring domains). (Evidence: anecdotal, vendor blogs, no controlled data) [Gaurav Tiwari](https://gauravtiwari.org/link-bait-search-engines/), [Linkody](https://blog.linkody.com/seo/linkable-asset), 2025
- SERP check: "pip calculator forex" (US web search, 2026-10-17) is led by broker and comparison brands (FXCM UK/AU, ForexBrokers.com, HelloSafe) plus an iOS app, and also shows scraped copies on hacked unrelated domains. StraviFX won't out-authority brokers soon; its angles are the clear account-currency conversion, JPY and gold conventions explained, and worked examples.
- Finding: Kenyan forex coverage found (Finance Magnates, Khusoko) was built around launches with a named spokesperson and the CMA licensing angle. Submission routes for Techweez/TechCabal/Business Daily were not found. (Evidence: anecdotal) [Finance Magnates: Pepperstone in Kenya](https://www.financemagnates.com/forex/brokers/pepperstone-launches-forex-trading-services-in-kenya/); [Khusoko: Exinity in Kenya](https://khusoko.com/2021/11/24/exinity-capital-enters-kenyan-market-as-non-dealing-online-forex-broker/), 2021
- Rejected: followed, keyword-anchored "Powered by" links in an embeddable calculator (named link spam); mass directory submission services and badge-swap directories (low-quality directory links); guest posts or paid placements without `rel="sponsored"`.
- Playbook change: added 2 bullets (link spam boundaries; links come with time, so internal links + sitemap on day one)
- Proposal: "Embeddable calculators" added under Research proposals: owner decides (it puts our code on other sites)

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
