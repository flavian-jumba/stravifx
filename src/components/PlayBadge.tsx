import Image from "next/image";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type PlayBadgeProps = {
  className?: string;
  /** Rendered height of the badge artwork in px (it includes Google's clear space). */
  size?: "md" | "lg";
};

/** Google's official "Get it on Google Play" badge, unmodified, with a gold shimmer tracing its border. */
export function PlayBadge({ className, size = "md" }: PlayBadgeProps) {
  return (
    <a
      href={SITE.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get StraviFX on Google Play"
      className={cn(
        "relative isolate inline-block transition-transform duration-300 ease-out-expo hover:scale-[1.03] active:scale-[0.98]",
        className,
      )}
    >
      <Image
        src="/brand/google-play-badge.png"
        alt="Get it on Google Play"
        width={646}
        height={250}
        className={cn("w-auto", size === "lg" ? "h-[88px]" : "h-[72px]")}
      />
      <span
        aria-hidden="true"
        className={cn(
          "badge-shimmer",
          size === "lg" ? "[--badge-radius:6.5px]" : "[--badge-radius:5.25px]",
        )}
      />
    </a>
  );
}
