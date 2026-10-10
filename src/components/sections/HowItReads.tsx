"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Sparkle } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type ScreenKey = "scan" | "result" | "plan" | "journal";

type Step = {
  label: string;
  title: string;
  body: string;
  screen: ScreenKey;
  /** Where the spotlight sits on the screen while this step is active. */
  spot: string;
};

const STEPS: Step[] = [
  {
    label: "Scan",
    title: "Show it any chart.",
    body: "Take a photo of your screen, upload a screenshot, or skip the chart entirely: choose a market and a timeframe and Stravifx pulls live candles.",
    screen: "scan",
    spot: "top-0 h-full opacity-0",
  },
  {
    label: "Read",
    title: "It reads the structure.",
    body: "Trend, higher highs and higher lows, consolidation, support and resistance. Written in plain language, with every trading term linked to its definition.",
    screen: "result",
    spot: "top-[21.5%] h-[33.5%] opacity-100",
  },
  {
    label: "Decide",
    title: "It makes the call.",
    body: "Buy, sell or stand aside, with a confidence score. Confidence reflects the evidence in the analysis. It is not a probability of profit.",
    screen: "result",
    spot: "top-[11.6%] h-[9.4%] opacity-100",
  },
  {
    label: "Plan",
    title: "It plans every level.",
    body: "An execution ladder with entry, stop loss and two targets, each with its distance in pips and its reward-to-risk.",
    screen: "plan",
    spot: "top-[18.6%] h-[34.6%] opacity-100",
  },
  {
    label: "Size",
    title: "It sizes your risk.",
    body: "Enter your account equity and the percentage you’re willing to risk. The position calculator returns a lot size to match your stop.",
    screen: "plan",
    spot: "top-[54%] h-[27.6%] opacity-100",
  },
  {
    label: "Log",
    title: "Then it keeps score.",
    body: "Every setup is saved to your journal automatically and tracked to its outcome: target hit, stop hit or still open.",
    screen: "journal",
    spot: "top-0 h-full opacity-0",
  },
];

const SCREENS: Record<ScreenKey, { src: string; alt: string; fit: string }> = {
  scan: {
    src: "/screens/scan.webp",
    alt: "Stravifx camera viewfinder framing a candlestick chart on a monitor",
    fit: "object-contain object-bottom",
  },
  result: {
    src: "/screens/result.webp",
    alt: "Stravifx analysis of EUR/USD on the 1H timeframe with a Buy verdict at 75% confidence",
    fit: "object-cover object-top",
  },
  plan: {
    src: "/screens/plan.webp",
    alt: "Stravifx execution ladder with two targets, entry and stop, above the position calculator",
    fit: "object-cover object-top",
  },
  journal: {
    src: "/screens/journal.webp",
    alt: "Stravifx trade journal listing saved setups with target-hit and stop-hit outcomes",
    fit: "object-cover object-top",
  },
};

const SCREEN_KEYS = Object.keys(SCREENS) as ScreenKey[];

function Device({ active, className }: { active: number; className?: string }) {
  const step = STEPS[active];
  return (
    <div
      className={cn(
        "relative aspect-[720/1465] rounded-[13%/6.4%] bg-[#0c0c0d] p-[2.6%] shadow-[0_60px_120px_-40px_rgba(0,0,0,1),0_0_0_1px_rgba(255,255,255,0.10),inset_0_0_0_1px_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[11.5%/5.6%] bg-black">
        {SCREEN_KEYS.map((key) => {
          const screen = SCREENS[key];
          const isActive = step.screen === key;
          return (
            <Image
              key={key}
              src={screen.src}
              alt={isActive ? screen.alt : ""}
              aria-hidden={!isActive}
              fill
              sizes="(min-width: 1024px) 320px, 260px"
              className={cn(
                "transition-opacity duration-[900ms] ease-out-expo",
                screen.fit,
                isActive ? "opacity-100" : "opacity-0",
              )}
            />
          );
        })}
        {/* Spotlight: dims the screen except the part this step is about */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-[2.5%] rounded-[5%/12%] shadow-[0_0_0_999px_rgba(0,0,0,0.62)] ring-1 ring-gold/80 transition-[top,height,opacity] duration-[900ms] ease-out-expo",
            step.spot,
          )}
        />
      </div>
    </div>
  );
}

/** The film's progress HUD, reprised: a step label and six segments. */
function Hud({ active }: { active: number }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2/80 px-5 py-3 backdrop-blur-md">
      <Sparkle className="size-3.5 text-gold" />
      <span className="w-[4.5rem] font-mono text-xs uppercase tracking-[0.24em] text-fg">
        {STEPS[active].label}
      </span>
      <span className="flex gap-1.5" aria-hidden="true">
        {STEPS.map((step, i) => (
          <span
            key={step.label}
            className={cn(
              "h-1 w-7 rounded-full transition-colors duration-500",
              i <= active ? "bg-fg" : "bg-white/15",
            )}
          />
        ))}
      </span>
    </div>
  );
}

export function HowItReads() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // A step becomes active when it crosses the vertical middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActive(index);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" className="relative bg-ink-1">
      <div className="rule-fade" />
      <div className="mx-auto max-w-[1240px] px-6 pt-28 sm:px-8 sm:pt-40">
        <Reveal className="max-w-[820px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-[clamp(2.5rem,6.4vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            From chart to plan
            <br />
            <span className="text-fg-3">in six steps.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-x-16 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* Sticky stage (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-7">
            <Hud active={active} />
            <Device active={active} className="h-[min(68vh,640px)]" />
          </div>
        </div>

        <ol className="py-16 lg:py-0">
          {STEPS.map((step, i) => (
            <li
              key={step.label}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              id={`how-${step.label.toLowerCase()}`}
              data-index={i}
              className={cn(
                "flex flex-col justify-center py-12 transition-opacity duration-700 lg:min-h-[78vh] lg:py-0",
                i === active ? "lg:opacity-100" : "lg:opacity-25",
              )}
            >
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
                <span className="font-pixel text-sm tracking-normal">
                  0{i + 1}
                </span>
                <span className="mx-3 text-fg-3">—</span>
                {step.label}
              </p>
              <h3 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                {step.title}
              </h3>
              <p className="mt-5 max-w-[460px] text-lg leading-[1.5] text-fg-2 sm:text-xl">
                {step.body}
              </p>

              {/* Inline device (mobile / tablet) */}
              <Device
                active={i}
                className="mt-10 w-[min(72vw,280px)] lg:hidden"
              />
            </li>
          ))}
        </ol>
      </div>
      <div className="h-16 lg:h-24" />
    </section>
  );
}
