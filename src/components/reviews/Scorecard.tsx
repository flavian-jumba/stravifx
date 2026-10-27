"use client";

import { useEffect, useRef } from "react";
import { Stars } from "@/components/reviews/Stars";
import type { PlayRating } from "@/lib/reviews";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const BAR_DELAY = [
  "[transition-delay:500ms]",
  "[transition-delay:580ms]",
  "[transition-delay:660ms]",
  "[transition-delay:740ms]",
  "[transition-delay:820ms]",
];

const BAR_WIDTH_VAR = "w-[var(--share)]";

/** easeOutExpo, matching --ease-out-expo closely enough for a counter. */
function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * The rating panel: a counter that runs up to the live average, stars that
 * fill left to right, and a breakdown whose bars grow in, all on first view.
 */
export function Scorecard({ rating }: { rating: PlayRating }) {
  const ref = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const total = rating.histogram.reduce((a, b) => a + b, 0) || 1;

  useEffect(() => {
    const el = ref.current;
    const num = numberRef.current;
    if (!el || !num) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.dataset.visible = "true";
      return;
    }

    let frame = 0;
    // Server HTML shows the real number; reset only while it is off screen.
    num.textContent = "0.0";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        el.dataset.visible = "true";
        const start = performance.now() + 250;
        const duration = 1600;
        const tick = (now: number) => {
          const t = Math.max(0, (now - start) / duration);
          num.textContent = (rating.average * easeOutExpo(t)).toFixed(1);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [rating.average]);

  return (
    <div
      ref={ref}
      className="group/score relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-ink-2 p-7 sm:rounded-[36px] sm:p-10"
    >
      {/* Gold bloom that rises behind the number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-28 size-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(246,186,24,0.22),transparent)] opacity-0 blur-2xl transition-opacity duration-[1600ms] ease-out-expo group-data-[visible=true]/score:opacity-100"
      />

      <p className="relative flex items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-fg-2">
        <span className="relative flex size-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/60 [animation-duration:2.4s]" />
          <span className="relative size-2 rounded-full bg-gold" />
        </span>
        Live from Google Play
      </p>

      <div className="relative mt-8 flex items-end gap-3 sm:mt-10">
        <p
          className="font-pixel text-[clamp(6rem,15vw,9.5rem)] leading-[0.8] tracking-[-0.02em] text-fg tabular-nums"
          aria-label={`${rating.average} out of 5`}
        >
          <span ref={numberRef} aria-hidden="true">
            {rating.average.toFixed(1)}
          </span>
        </p>
        <p className="pb-1 font-pixel text-3xl leading-none text-fg-3 sm:text-4xl">
          /5
        </p>
      </div>

      <Stars
        value={rating.average}
        sweep
        className="relative mt-6"
        starClassName="size-7 sm:size-8"
      />
      <p className="relative mt-3 text-[1.0625rem] text-fg-2">
        Average of {rating.countLabel} on Google Play
      </p>

      <ul className="relative mt-9 flex flex-col gap-2.5" aria-label="Rating breakdown">
        {rating.histogram.map((count, i) => {
          const star = 5 - i;
          const share = count / total;
          return (
            <li
              key={star}
              className="grid grid-cols-[1.25rem_1fr_1.75rem] items-center gap-3"
            >
              <span className="font-pixel text-sm text-fg-2" aria-hidden="true">
                {star}
              </span>
              <span
                className="relative h-2 overflow-hidden rounded-full bg-white/[0.06]"
                aria-label={`${star} star: ${count}`}
              >
                <span
                  className={cn(
                    "absolute inset-y-0 left-0 origin-left scale-x-0 rounded-full bg-[linear-gradient(90deg,#a87800,#f6ba18_60%,#ffe08a)] shadow-[0_0_12px_rgba(246,186,24,0.45)] transition-transform duration-[1100ms] ease-out-expo group-data-[visible=true]/score:scale-x-100",
                    BAR_DELAY[i],
                    BAR_WIDTH_VAR,
                  )}
                  style={{ "--share": `${share * 100}%` } as React.CSSProperties}
                />
              </span>
              <span className="text-right font-mono text-xs tabular-nums text-fg-3">
                {count}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="relative mt-auto pt-10">
        <a
          href={SITE.playListingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 text-[0.9375rem] font-medium text-fg transition-colors hover:text-gold"
        >
          Read every review on Google Play
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="size-3.5 transition-transform duration-300 ease-out-expo group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          >
            <path
              d="M4.5 11.5l7-7M5.5 4.5h6v6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
