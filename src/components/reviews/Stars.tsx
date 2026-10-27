import { cn } from "@/lib/utils";

const STAR_PATH =
  "M12 2.6l2.83 5.9 6.47.84-4.74 4.5 1.2 6.42L12 17.14l-5.76 3.12 1.2-6.42L2.7 9.34l6.47-.84L12 2.6z";

/* Static so Tailwind can see them. One step per star, left to right. */
const FILL_DELAY = [
  "[transition-delay:350ms]",
  "[transition-delay:470ms]",
  "[transition-delay:590ms]",
  "[transition-delay:710ms]",
  "[transition-delay:830ms]",
];

type StarsProps = {
  /** 0–5, decimals fill the last star partly. */
  value: number;
  className?: string;
  /** Tailwind size class for each star. */
  starClassName?: string;
  /** Empty-star colour class. */
  emptyClassName?: string;
  /** Filled-star colour class. */
  fillClassName?: string;
  /**
   * When true, the gold sweeps in star by star once an ancestor gets
   * data-visible="true" (set by <Reveal> or the scorecard).
   */
  sweep?: boolean;
};

/** A row of five stars with partial fill, labelled for screen readers. */
export function Stars({
  value,
  className,
  starClassName = "size-4",
  emptyClassName = "text-white/15",
  fillClassName = "text-gold",
  sweep = false,
}: StarsProps) {
  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5 stars`}
      className={cn("inline-flex items-center gap-[0.12em]", className)}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className={cn("relative inline-block", starClassName)}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={cn("absolute inset-0 size-full", emptyClassName)}
            >
              <path d={STAR_PATH} fill="currentColor" />
            </svg>
            <span
              className={cn(
                "absolute inset-y-0 left-0 overflow-hidden",
                sweep &&
                  "[clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-700 ease-out-expo group-data-[visible=true]/score:[clip-path:inset(0_0_0_0)]",
                sweep && FILL_DELAY[i],
                fill >= 1 && "w-full",
                fill <= 0 && "w-0",
                fill > 0 && fill < 1 && "w-[var(--fill)]",
              )}
              style={
                fill > 0 && fill < 1
                  ? ({ "--fill": `${fill * 100}%` } as React.CSSProperties)
                  : undefined
              }
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={cn(
                  "max-w-none drop-shadow-[0_0_6px_rgba(246,186,24,0.35)]",
                  starClassName,
                  fillClassName,
                )}
              >
                <path d={STAR_PATH} fill="currentColor" />
              </svg>
            </span>
          </span>
        );
      })}
    </span>
  );
}
