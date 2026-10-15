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
    body: "Take a photo of your screen, upload a screenshot, or skip the chart entirely: choose a market and a timeframe and StraviFX pulls live candles.",
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
    alt: "StraviFX camera viewfinder framing a candlestick chart on a monitor",
    fit: "object-contain object-bottom",
  },
  result: {
    src: "/screens/result.webp",
    alt: "StraviFX analysis of EUR/USD on the 1H timeframe with a Buy verdict at 75% confidence",
    fit: "object-cover object-top",
  },
  plan: {
    src: "/screens/plan.webp",
    alt: "StraviFX execution ladder with two targets, entry and stop, above the position calculator",
    fit: "object-cover object-top",
  },
  journal: {
    src: "/screens/journal.webp",
    alt: "StraviFX trade journal listing saved setups with target-hit and stop-hit outcomes",
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
              sizes="(min-width: 1024px) 320px, 240px"
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

/** The film's progress HUD, reprised: a step label and six tappable segments. */
function Hud({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-2/80 pl-4 pr-2 backdrop-blur-md sm:gap-4 sm:pl-5 sm:pr-3">
      <Sparkle className="size-3.5 shrink-0 text-gold" />
      <span
        aria-live="polite"
        className="w-16 font-mono text-xs uppercase tracking-[0.24em] text-fg sm:w-[4.5rem]"
      >
        {STEPS[active].label}
      </span>
      <span className="flex">
        {STEPS.map((step, i) => (
          <button
            key={step.label}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Step ${i + 1}: ${step.label}`}
            aria-current={i === active ? "step" : undefined}
            className="group px-[3px] py-5"
          >
            <span
              className={cn(
                "block h-1 w-5 rounded-full transition-colors duration-500 group-hover:bg-gold min-[360px]:w-6 sm:w-7",
                i <= active ? "bg-fg" : "bg-white/15",
              )}
            />
          </button>
        ))}
      </span>
    </div>
  );
}

function StepCopy({ step, index }: { step: Step; index: number }) {
  return (
    <>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
        <span className="font-pixel text-sm tracking-normal">0{index + 1}</span>
        <span className="mx-3 text-fg-3">—</span>
        {step.label}
      </p>
      <h3 className="mt-4 text-[clamp(1.75rem,4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.035em] lg:mt-5">
        {step.title}
      </h3>
      <p className="mt-3 max-w-[460px] text-[1.0625rem] leading-[1.5] text-fg-2 sm:text-xl lg:mt-5">
        {step.body}
      </p>
    </>
  );
}

export function HowItReads() {
  // Desktop: the step crossing the middle of the viewport drives the pinned phone.
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  // Phones and tablets: a swipeable deck; the centred card drives the HUD.
  const [card, setCard] = useState(0);
  const deckRef = useRef<HTMLOListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCard(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { root: deck, threshold: 0.6 },
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goToStep = (index: number) =>
    stepRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  const goToCard = (index: number) =>
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

  return (
    <section id="how" className="relative bg-ink-1">
      <div className="rule-fade" />
      <div className="mx-auto max-w-[1240px] px-6 pt-24 sm:px-8 sm:pt-40">
        <Reveal className="max-w-[820px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,9.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            From chart to plan
            <br />
            <span className="text-fg-3">in six steps.</span>
          </h2>
        </Reveal>
      </div>

      {/* Desktop: pinned phone, scrolling steps */}
      <div className="mx-auto hidden max-w-[1240px] grid-cols-2 gap-x-16 px-8 lg:grid">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-7">
          <Hud active={active} onSelect={goToStep} />
          <Device active={active} className="h-[min(68vh,640px)]" />
        </div>

        <ol>
          {STEPS.map((step, i) => (
            <li
              key={step.label}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              id={`how-${step.label.toLowerCase()}`}
              data-index={i}
              className={cn(
                "flex min-h-[78vh] flex-col justify-center transition-opacity duration-700",
                i === active ? "opacity-100" : "opacity-25",
              )}
            >
              <StepCopy step={step} index={i} />
            </li>
          ))}
        </ol>
      </div>

      {/* Phones and tablets: swipe through the steps */}
      <div className="pb-20 pt-10 lg:hidden">
        <div className="flex justify-center px-4">
          <Hud active={card} onSelect={goToCard} />
        </div>
        <ol
          ref={deckRef}
          aria-label="Six steps, swipe to move between them"
          className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-6 pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:gap-5 sm:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {STEPS.map((step, i) => (
            <li
              key={step.label}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-index={i}
              className={cn(
                "flex w-[82vw] max-w-[380px] shrink-0 snap-center flex-col rounded-[32px] border bg-ink-2 px-6 pb-8 pt-6 transition-[border-color,opacity] duration-500",
                i === card
                  ? "border-white/[0.14] opacity-100"
                  : "border-white/[0.06] opacity-60 sm:opacity-100",
              )}
            >
              <Device active={i} className="mx-auto w-[64%]" />
              <div className="mt-8">
                <StepCopy step={step} index={i} />
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-center font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-fg-3">
          Swipe · {card + 1} of {STEPS.length}
        </p>
      </div>
      <div className="hidden h-24 lg:block" />
    </section>
  );
}
