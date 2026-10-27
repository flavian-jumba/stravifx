import { Reveal } from "@/components/Reveal";
import { formatReviewDate, Monogram } from "@/components/reviews/ReviewCard";
import { Stars } from "@/components/reviews/Stars";
import type { PlayReview } from "@/lib/reviews";

type FeaturedReviewProps = {
  review: PlayReview;
  /** Words at the end of the quote to mark in gold, e.g. "be more patient". */
  highlight?: string;
};

/**
 * The lead quote, on paper: the site's counter-mode, so it reads as a voice
 * from outside the product. Words blur into focus one by one, then the key
 * phrase gets a gold marker stroke.
 */
export function FeaturedReview({ review, highlight }: FeaturedReviewProps) {
  const words = review.text.split(" ");
  const markCount = highlight ? highlight.split(" ").length : 0;
  const markFrom =
    highlight && review.text.endsWith(highlight)
      ? words.length - markCount
      : words.length;

  const word = (w: string, i: number) => (
    <span
      key={i}
      className="quote-word"
      style={{ "--i": i } as React.CSSProperties}
    >
      {w}
    </span>
  );

  return (
    <Reveal className="h-full">
      <figure className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-paper p-7 text-ink-text shadow-[0_40px_120px_-40px_rgba(246,186,24,0.35)] sm:rounded-[36px] sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-40 size-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(246,186,24,0.28),transparent)] blur-2xl"
        />
        {/* Pixel-art opening quote, in the film's pixel language */}
        <svg
          aria-hidden="true"
          viewBox="0 0 40 32"
          className="pointer-events-none absolute right-12 top-11 hidden w-24 text-gold sm:block"
        >
          {[0, 24].map((x) => (
            <g key={x} fill="currentColor" transform={`translate(${x} 0)`}>
              <rect x="8" y="0" width="8" height="8" />
              <rect x="0" y="8" width="8" height="8" />
              <rect x="0" y="16" width="16" height="16" />
            </g>
          ))}
        </svg>

        <div className="relative flex items-center gap-3">
          <p className="rounded-full bg-ink-text px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.22em] text-paper">
            Featured review
          </p>
          <Stars
            value={review.stars}
            starClassName="size-[18px]"
            emptyClassName="text-ink-text/15"
            fillClassName="text-gold-deep"
          />
        </div>

        <blockquote className="relative mt-10 sm:mt-14">
          <p className="max-w-[24ch] text-[clamp(1.75rem,3.4vw,2.875rem)] font-semibold leading-[1.12] tracking-[-0.03em] [text-wrap:pretty]">
            <span className="sr-only">{review.text}</span>
            <span aria-hidden="true">
              {words.slice(0, markFrom).map((w, i) => (
                <span key={i}>
                  {word(w, i)}{" "}
                </span>
              ))}
              {markFrom < words.length ? (
                <span
                  className="quote-mark"
                  style={{ "--i": words.length } as React.CSSProperties}
                >
                  {words.slice(markFrom).map((w, j) => (
                    <span key={markFrom + j}>
                      {word(w, markFrom + j)}
                      {markFrom + j < words.length - 1 ? " " : ""}
                    </span>
                  ))}
                </span>
              ) : null}
            </span>
          </p>
        </blockquote>

        <figcaption className="relative mt-auto flex items-center gap-3.5 pt-12">
          <Monogram
            name={review.name}
            className="size-12 bg-ink-text text-[0.9375rem] ring-0"
          />
          <div>
            <p className="text-[1.0625rem] font-semibold">{review.name}</p>
            <p className="text-sm text-ink-muted">
              Google Play review ·{" "}
              <time dateTime={review.date}>{formatReviewDate(review.date)}</time>
            </p>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
