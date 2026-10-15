"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LINES = [
  "The market never stops talking.",
  "Pairs, timeframes, indicators, headlines. By the time you’ve drawn your lines, price has already moved.",
  "StraviFX turns the chart in front of you into a plan you can act on, or walk away from.",
];

const WORDS = LINES.flatMap((line, lineIndex) =>
  line.split(" ").map((word) => ({ word, lineIndex })),
);

/** A paragraph that lights up word by word as it scrolls through the viewport. */
export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (reduceMotion) {
        setLit(WORDS.length);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.82;
      const end = vh * 0.3;
      const progress = (start - rect.top) / (rect.height + start - end);
      setLit(Math.round(Math.min(1, Math.max(0, progress)) * WORDS.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="why" className="bg-ink px-6 py-24 sm:py-44">
      <p
        ref={ref}
        className="mx-auto max-w-[1000px] text-[clamp(1.625rem,7.4vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
      >
        {WORDS.map(({ word, lineIndex }, i) => (
          <span
            key={i}
            className={cn(
              "transition-colors duration-500",
              i < lit
                ? lineIndex === 2
                  ? "text-gold-soft"
                  : "text-fg"
                : "text-fg/15",
            )}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
