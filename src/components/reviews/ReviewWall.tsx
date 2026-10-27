"use client";

import { useCallback, useState } from "react";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import type { PlayReview } from "@/lib/reviews";
import { cn } from "@/lib/utils";

/* Each column drifts at its own pace; the middle one runs the other way. */
const COLUMN_STYLE = [
  "[--dur:52s]",
  "[--dur:64s] [animation-direction:reverse]",
  "[--dur:58s]",
];

function split<T>(items: T[], n: number) {
  const cols: T[][] = Array.from({ length: n }, () => []);
  items.forEach((item, i) => cols[i % n].push(item));
  return cols;
}

function Column({
  reviews,
  index,
}: {
  reviews: PlayReview[];
  index: number;
}) {
  return (
    <div className="review-lane min-w-0">
      <div className={cn("review-col flex flex-col", COLUMN_STYLE[index])}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            // The second copy only exists to make the loop seamless.
            aria-hidden={copy === 1 ? true : undefined}
            className="review-copy flex flex-col gap-5 pb-5"
          >
            {reviews.map((review) => (
              <li key={`${review.name}-${copy}`}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/**
 * Tablet and up: columns of reviews drifting vertically, each pausing under
 * the pointer, with a pause control for everyone else (WCAG 2.2.2).
 * Phones: a swipeable row, moved only by the reader.
 */
export function ReviewWall({ reviews }: { reviews: PlayReview[] }) {
  const [paused, setPaused] = useState(false);

  // One listener feeds every card's spotlight position.
  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-spotlight]",
    );
    if (!card) return;
    const box = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - box.left}px`);
    card.style.setProperty("--my", `${e.clientY - box.top}px`);
  }, []);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4 px-6 sm:px-8 md:px-0">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-fg-3">
          More from the listing
        </p>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="hidden items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-fg-2 transition-colors hover:border-gold/50 hover:text-fg md:inline-flex"
        >
          <span aria-hidden="true" className="flex h-2.5 items-center gap-[3px]">
            {paused ? (
              <svg viewBox="0 0 10 10" className="size-2.5">
                <path d="M2 1l7 4-7 4z" fill="currentColor" />
              </svg>
            ) : (
              <>
                <span className="h-full w-[3px] rounded-sm bg-current" />
                <span className="h-full w-[3px] rounded-sm bg-current" />
              </>
            )}
          </span>
          {paused ? "Play motion" : "Pause motion"}
        </button>
      </div>

      {/* Tablet and desktop */}
      <div
        data-paused={paused}
        onPointerMove={onPointerMove}
        className="review-wall mask-fade-y hidden h-[680px] overflow-hidden md:block"
      >
        <div className="grid grid-cols-2 gap-5 lg:hidden">
          {split(reviews, 2).map((col, i) => (
            <Column key={i} reviews={col} index={i} />
          ))}
        </div>
        <div className="hidden grid-cols-3 gap-5 lg:grid">
          {split(reviews, 3).map((col, i) => (
            <Column key={i} reviews={col} index={i} />
          ))}
        </div>
      </div>

      {/* Phones */}
      <ul
        onPointerMove={onPointerMove}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <li
            key={review.name}
            className="w-[84%] max-w-[360px] shrink-0 snap-start"
          >
            <ReviewCard review={review} className="h-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
