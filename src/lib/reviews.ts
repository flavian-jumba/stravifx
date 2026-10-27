import { SITE } from "@/lib/site";

/* ---------------------------------------------------------------------------
   Google Play reviews shown on the homepage.

   The quotes are hand-picked and copied as written (typos included). "…" marks
   a cut. Cuts only remove lines our compliance rules forbid us to repeat:
   profit stories, accuracy claims and "trading is easy" lines
   (see .agents/product-marketing.md, sections 8, 9 and 13).

   The rating and star breakdown are read from the live listing once a day, so
   the site never shows a stale number. PLAY_RATING_SNAPSHOT is the fallback.
   --------------------------------------------------------------------------- */

export type PlayReview = {
  /** Shown as first name + last initial. */
  name: string;
  stars: 1 | 2 | 3 | 4 | 5;
  /** ISO date the review was posted. */
  date: string;
  text: string;
  /** Our developer reply, when it adds something. */
  reply?: string;
};

export type PlayRating = {
  /** Average rating, one decimal, as Google Play shows it. */
  average: number;
  /** Google's own label, e.g. "14 reviews" or "1.2K reviews". */
  countLabel: string;
  /** Reviews per star, index 0 = 5 stars … index 4 = 1 star. */
  histogram: [number, number, number, number, number];
  /** ISO date the numbers were read. */
  asOf: string;
};

/** The quote that leads the section. */
export const FEATURED_REVIEW: PlayReview = {
  name: "Wasike J.",
  stars: 5,
  date: "2026-10-11",
  text: "The app has really helped me improve how I analyze charts. I used to make entries too early but the confirmation levels have helped me be more patient",
};

/**
 * The scrolling wall, dealt into columns in turn (3 on desktop, 2 on tablet).
 * Keep at least 9 so every column is taller than the wall and loops cleanly.
 */
export const PLAY_REVIEWS: PlayReview[] = [
  {
    name: "Hailey M.",
    stars: 5,
    date: "2026-10-14",
    text: "The instant analysis is something amazing. I have less knowledge about trading, all I know is GREEN means UP and RED means DOWN. The market analysis it has been doing for me NO STRESS … Stravifx you did something outstanding",
  },
  {
    name: "Jennifer A.",
    stars: 3,
    date: "2026-10-14",
    text: "Great app, just a little fix on the emails",
    reply:
      "We understand how annoying that must be. We're working on a solution.",
  },
  {
    name: "John Jr",
    stars: 5,
    date: "2026-10-12",
    text: "One of the better forex analysis apps I've tried",
  },
  {
    name: "PCH",
    stars: 4,
    date: "2026-10-14",
    text: "Good interface and AI integration, the only problem I have is the upgrade process, I had to wait for the next subscription to upgrade to three monthly which has the diverse signal updates, I would wish you allow someone to switch through subscriptions. Overally great app",
  },
  {
    name: "David O.",
    stars: 5,
    date: "2026-10-12",
    text: "First time trying it out and wow, I love it, I fully recommend anyone interested in FX and strategies",
  },
  {
    name: "Hysong L.",
    stars: 4,
    date: "2026-10-14",
    text: "Super fast and easy to use and understand, great app",
  },
  {
    name: "Wendy B.",
    stars: 4,
    date: "2026-10-14",
    text: "… I've enjoyed using AI and learning from it. I like the apps UI and the signals and notifications are really helpfull",
  },
  {
    name: "Blessed B.",
    stars: 5,
    date: "2026-10-12",
    text: "A cool one for my trade",
  },
  {
    name: "Palenik E.",
    stars: 5,
    date: "2026-10-14",
    text: "This is an amazing app that I have come across with … helpful notifications … I would highly recommend this for beginers and anyone getting into trading and dont know where to start",
  },
];

/** What the listing showed on 27 Oct 2026. Used when the live read fails. */
export const PLAY_RATING_SNAPSHOT: PlayRating = {
  average: 4.2,
  countLabel: "14 reviews",
  histogram: [5, 7, 1, 0, 0],
  asOf: "2026-10-27",
};

const ONE_DAY = 60 * 60 * 24;

/**
 * Reads the average rating, review count and star breakdown from the public
 * Play listing. Cached for a day; any surprise in the markup falls back to the
 * snapshot instead of breaking the page.
 */
export async function getPlayRating(): Promise<PlayRating> {
  try {
    const res = await fetch(
      `${SITE.playListingUrl}&hl=en&gl=US`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
          "Accept-Language": "en-US,en;q=0.9",
        },
        next: { revalidate: ONE_DAY },
        signal: AbortSignal.timeout(6000),
      },
    );
    if (!res.ok) return PLAY_RATING_SNAPSHOT;
    const html = await res.text();

    const head = html.match(
      /Rated ([\d.]+) stars out of five stars"[\s\S]{0,800}?>([\d.,]+[KMB]?) reviews?</,
    );
    const average = head ? Number(head[1]) : NaN;
    if (!head || !(average >= 1 && average <= 5)) return PLAY_RATING_SNAPSHOT;

    const histogram: PlayRating["histogram"] = [0, 0, 0, 0, 0];
    let found = 0;
    for (const m of html.matchAll(
      /aria-label="([\d,]+) reviews? for star rating ([1-5])"/g,
    )) {
      const star = Number(m[2]);
      histogram[5 - star] = Number(m[1].replace(/,/g, ""));
      found += 1;
    }
    if (found < 5) return PLAY_RATING_SNAPSHOT;

    return {
      average: Math.round(average * 10) / 10,
      countLabel: `${head[2]} review${head[2] === "1" ? "" : "s"}`,
      histogram,
      asOf: new Date().toISOString().slice(0, 10),
    };
  } catch {
    return PLAY_RATING_SNAPSHOT;
  }
}
