import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { FeaturedReview } from "@/components/reviews/FeaturedReview";
import { ReviewWall } from "@/components/reviews/ReviewWall";
import { Scorecard } from "@/components/reviews/Scorecard";
import { FEATURED_REVIEW, getPlayRating, PLAY_REVIEWS } from "@/lib/reviews";

/**
 * Social proof from the Google Play listing: the live rating, one lead quote
 * on paper, and a drifting wall of the rest, critical ones included.
 */
export async function Reviews() {
  const rating = await getPlayRating();

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative overflow-hidden bg-ink-1 py-24 sm:py-40"
    >
      {/* Faint gold horizon behind the header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(1100px,140%)] -translate-x-1/2 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(246,186,24,0.10),transparent)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-8">
        <Reveal className="mx-auto max-w-[900px] text-center">
          <Eyebrow>Reviews</Eyebrow>
          <h2
            id="reviews-title"
            className="mt-5 text-[clamp(2rem,9.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
          >
            Heard on Google Play.
            <br />
            <span className="text-fg-3">In traders’ own words.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[600px] text-[clamp(1.125rem,1.7vw,1.4375rem)] leading-[1.4] text-fg-2">
            Reviews from the StraviFX listing, quoted as written. The ones that
            asked us to fix something are here too.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:mt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Reveal className="h-full">
            <Scorecard rating={rating} />
          </Reveal>
          <FeaturedReview review={FEATURED_REVIEW} highlight="be more patient" />
        </div>
      </div>

      <div className="relative mx-auto mt-5 max-w-[1240px] sm:mt-16 md:px-8">
        <ReviewWall reviews={PLAY_REVIEWS} />
      </div>

      <Reveal className="relative mx-auto mt-10 max-w-[1240px] px-6 sm:px-8">
        <p className="max-w-[760px] font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.16em] text-fg-3">
          Reviews from the StraviFX listing on Google Play, shown with first
          name and last initial. “…” marks a shortened quote. Reviews are
          users’ own opinions. AI-generated analysis. Not financial advice.
        </p>
      </Reveal>
    </section>
  );
}
