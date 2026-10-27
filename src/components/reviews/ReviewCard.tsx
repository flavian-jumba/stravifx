import { Stars } from "@/components/reviews/Stars";
import type { PlayReview } from "@/lib/reviews";
import { cn } from "@/lib/utils";

/** "2026-10-14" → "Oct 14, 2026", pinned to UTC so server and client agree. */
export function formatReviewDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function initials(name: string) {
  const parts = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

/** Gold initials on ink, ringed like the app's avatar chip. */
export function Monogram({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid size-10 shrink-0 place-items-center rounded-full bg-ink-3 font-mono text-[0.8125rem] font-medium tracking-wide text-gold ring-1 ring-white/10",
        "before:absolute before:inset-[-3px] before:rounded-full before:bg-[conic-gradient(from_200deg,rgba(246,186,24,0.55),transparent_35%,transparent_65%,rgba(246,186,24,0.35))] before:[mask:radial-gradient(farthest-side,transparent_calc(100%-1.5px),#000_calc(100%-1px))]",
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}

/** One Google Play review, styled as a quiet ink card with a cursor spotlight. */
export function ReviewCard({
  review,
  className,
}: {
  review: PlayReview;
  className?: string;
}) {
  return (
    <figure
      data-spotlight
      className={cn(
        "spotlight flex flex-col rounded-[26px] border border-white/[0.07] bg-ink-2 p-6 transition-[border-color,translate] duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-white/[0.12] sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Stars value={review.stars} starClassName="size-[15px]" />
        <time
          dateTime={review.date}
          className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-fg-3"
        >
          {formatReviewDate(review.date)}
        </time>
      </div>

      <blockquote className="mt-5 text-[1.0625rem] leading-[1.55] text-fg [text-wrap:pretty]">
        <p>
          <span className="text-gold/80">“</span>
          {review.text}
          <span className="text-gold/80">”</span>
        </p>
      </blockquote>

      {review.reply ? (
        <div className="mt-5 rounded-2xl border border-white/[0.06] bg-ink-3/70 p-4">
          <p className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-gold">
            <span className="size-1.5 rounded-full bg-gold" />
            StraviFX replied
          </p>
          <p className="mt-2 text-[0.9375rem] leading-[1.5] text-fg-2">
            {review.reply}
          </p>
        </div>
      ) : null}

      <figcaption className="mt-6 flex items-center gap-3">
        <Monogram name={review.name} />
        <div className="min-w-0">
          <p className="truncate text-[0.9375rem] font-medium text-fg">
            {review.name}
          </p>
          <p className="text-xs text-fg-3">Review on Google Play</p>
        </div>
      </figcaption>
    </figure>
  );
}
