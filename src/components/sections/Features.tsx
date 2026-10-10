import { Eyebrow } from "@/components/Eyebrow";
import { Bolt } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
   Bento grid. Every tile is a vector rebuild of real app UI, using the values
   from the EUR/USD 1H setup shown in the film.
   --------------------------------------------------------------------------- */

type TileProps = {
  kicker: string;
  title: string;
  body: string;
  className?: string;
  children: React.ReactNode;
  note?: string;
};

function Tile({ kicker, title, body, className, children, note }: TileProps) {
  return (
    <Reveal className={cn("h-full", className)}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.07] bg-ink-2 p-6 transition-colors duration-500 hover:border-white/[0.14] sm:rounded-[36px] sm:p-9">
        <div>
          <Eyebrow>{kicker}</Eyebrow>
          <h3 className="mt-4 text-[clamp(1.625rem,2.4vw,2.25rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
            {title}
          </h3>
          <p className="mt-3 max-w-[460px] text-[1.0625rem] leading-[1.5] text-fg-2">
            {body}
          </p>
          {note ? (
            <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-fg-3">
              {note}
            </p>
          ) : null}
        </div>
        <div className="mt-10 flex flex-1 flex-col justify-end">{children}</div>
      </article>
    </Reveal>
  );
}

/* ---- Execution ladder ---------------------------------------------------- */

type Rung = {
  tag: string;
  name: string;
  sub: string;
  value: string;
  tone: "buy" | "entry" | "sell";
};

const RUNGS: Rung[] = [
  {
    tag: "TP 2",
    name: "(Runner)",
    sub: "+10 pips · 3.0:1 R:R",
    value: "1.1262",
    tone: "buy",
  },
  {
    tag: "TP 1",
    name: "(Trim)",
    sub: "+7 pips · 2.1:1 R:R",
    value: "1.1259",
    tone: "buy",
  },
  {
    tag: "ENTRY",
    name: "(Optimal Entry)",
    sub: "Current zone",
    value: "1.1252",
    tone: "entry",
  },
  {
    tag: "STOP",
    name: "(Stop Loss)",
    sub: "-3 pips · Invalidation",
    value: "1.1249",
    tone: "sell",
  },
];

const TONE = {
  buy: { bar: "bg-buy", text: "text-buy" },
  entry: { bar: "bg-cyan", text: "text-cyan" },
  sell: { bar: "bg-sell", text: "text-sell" },
} as const;

function Ladder() {
  return (
    <ul className="flex flex-col gap-2.5">
      {RUNGS.map((rung) => {
        const entry = rung.tone === "entry";
        return (
          <li
            key={rung.tag}
            className={cn(
              "flex items-center gap-3 rounded-2xl border px-3.5 py-3.5 sm:gap-5 sm:rounded-[22px] sm:px-6 sm:py-5",
              entry
                ? "border-cyan/70 bg-[#0e2a30] shadow-[0_0_48px_-12px_rgba(30,198,228,0.55)]"
                : "border-white/[0.06] bg-ink-3",
            )}
          >
            <span
              className={cn(
                "h-10 w-1.5 shrink-0 rounded-full",
                TONE[rung.tone].bar,
              )}
            />
            <div className="min-w-0 flex-1">
              <p className="text-[0.9375rem] font-medium leading-tight text-fg sm:text-xl">
                <span className={cn("font-semibold", TONE[rung.tone].text)}>
                  {rung.tag}
                </span>{" "}
                {rung.name}
              </p>
              <p className="mt-0.5 text-xs text-fg-3 sm:text-sm">{rung.sub}</p>
            </div>
            <p
              className={cn(
                "font-pixel text-[1.375rem] sm:text-4xl",
                entry ? "text-cyan" : "text-fg",
              )}
            >
              {rung.value}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

/* ---- Verdict --------------------------------------------------------------- */

function Verdict() {
  return (
    <div className="rounded-[22px] border border-buy/25 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(48,198,84,0.16),transparent_60%)] p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-pixel text-6xl leading-none text-buy sm:text-7xl">
            BUY
          </p>
          <p className="mt-2 text-sm text-fg-2">Bullish · AI decision</p>
        </div>
        <p className="shrink-0 whitespace-nowrap rounded-full border border-buy/40 bg-buy/10 px-3.5 py-1.5 text-sm text-fg">
          <span className="font-pixel text-buy">75%</span> confidence
        </p>
      </div>
      <p className="mt-6 text-[0.9375rem] leading-[1.55] text-fg-2">
        EUR/USD has been in a general uptrend, marked by{" "}
        <span className="text-fg underline decoration-gold decoration-2 underline-offset-4">
          higher lows
        </span>{" "}
        and{" "}
        <span className="text-fg underline decoration-gold decoration-2 underline-offset-4">
          higher highs
        </span>
        , with price currently{" "}
        <span className="text-fg underline decoration-gold decoration-2 underline-offset-4">
          consolidating
        </span>
        …
      </p>
      <p className="mt-5 border-t border-white/[0.08] pt-4 font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.16em] text-fg-3">
        Confidence reflects this analysis’s evidence, not profit probability.
      </p>
    </div>
  );
}

/* ---- Position calculator --------------------------------------------------- */

function Calculator() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Account equity", value: "$ 5,000" },
          { label: "Risk %", value: "1.25 %" },
        ].map((field) => (
          <div key={field.label}>
            <p className="text-xs text-fg-3">{field.label}</p>
            <p className="mt-1.5 rounded-2xl border border-white/[0.06] bg-ink-3 py-3 text-center text-lg font-medium text-fg">
              {field.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-[22px] border border-gold/60 bg-black/40 px-4 py-6 text-center">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-gold">
          Recommended position
        </p>
        <p className="mt-2 flex items-baseline justify-center gap-2.5">
          <span className="font-pixel text-6xl leading-none text-fg">1.83</span>
          <span className="text-2xl font-semibold text-gold">Lots</span>
        </p>
        <p className="mt-2.5 text-sm text-fg-3">Risk $62.22 · Stop 3 pips</p>
      </div>
    </div>
  );
}

/* ---- Journal --------------------------------------------------------------- */

type Entry = {
  pair: string;
  levels: string;
  side: "LONG" | "SHORT";
  badge: "TP2 HIT" | "TP1 HIT" | "SL HIT" | "OPEN";
};

const ENTRIES: Entry[] = [
  {
    pair: "EUR/USD · 1H",
    levels: "Entry 1.1252 · SL 1.1249",
    side: "LONG",
    badge: "TP2 HIT",
  },
  {
    pair: "EUR/USD · 1H",
    levels: "Entry 1.1378 · SL 1.1368",
    side: "LONG",
    badge: "TP1 HIT",
  },
  {
    pair: "EUR/USD · 1H",
    levels: "Entry 1.1466 · SL 1.1470",
    side: "SHORT",
    badge: "SL HIT",
  },
  {
    pair: "EUR/USD · 5M",
    levels: "Entry 1.1255 · SL 1.1254",
    side: "LONG",
    badge: "OPEN",
  },
];

const BADGE: Record<Entry["badge"], string> = {
  "TP2 HIT": "border-buy/60 bg-buy/10 text-buy",
  "TP1 HIT": "border-buy/60 bg-buy/10 text-buy",
  "SL HIT": "border-sell/60 bg-sell/10 text-sell",
  OPEN: "border-cyan/60 bg-cyan/10 text-cyan",
};

function Journal() {
  return (
    <ul className="@container flex flex-col gap-2.5">
      {ENTRIES.map((entry) => (
        <li
          key={entry.levels}
          className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-ink-3 p-3"
        >
          <span className="hidden size-11 shrink-0 place-items-center rounded-xl border border-cyan/25 bg-[#11313a] text-cyan @[300px]:grid">
            <Bolt className="size-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-fg">
              {entry.pair}{" "}
              <span
                className={cn(
                  "ml-1 text-[0.625rem] font-bold tracking-[0.08em]",
                  entry.side === "LONG" ? "text-buy" : "text-sell",
                )}
              >
                {entry.side}
              </span>
            </p>
            <p className="truncate text-xs text-fg-3">{entry.levels}</p>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-lg border px-2.5 py-1.5 text-[0.625rem] font-bold tracking-[0.08em]",
              BADGE[entry.badge],
            )}
          >
            {entry.badge}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---- Signals --------------------------------------------------------------- */

const SIGNAL_MARKETS = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "XAU/USD",
  "GBP/JPY",
  "AUD/USD",
];

const PULSE_DELAY = [
  "[animation-delay:0ms]",
  "[animation-delay:400ms]",
  "[animation-delay:800ms]",
  "[animation-delay:1200ms]",
  "[animation-delay:1600ms]",
  "[animation-delay:2000ms]",
];

function Signals() {
  return (
    <ul className="grid grid-cols-2 gap-2.5">
      {SIGNAL_MARKETS.map((market, i) => (
        <li
          key={market}
          className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-ink-3 px-4 py-3.5"
        >
          <span className="font-pixel text-base text-fg">{market}</span>
          <span
            className={cn(
              "size-1.5 animate-pulse-dot rounded-full bg-gold",
              PULSE_DELAY[i],
            )}
          />
        </li>
      ))}
    </ul>
  );
}

/* ---- Market brief ---------------------------------------------------------- */

const TRENDS = [
  { tf: "1H", trend: "Bullish", tone: "text-buy border-buy/40 bg-buy/10" },
  { tf: "4H", trend: "Bearish", tone: "text-sell border-sell/40 bg-sell/10" },
  { tf: "1D", trend: "Neutral", tone: "text-fg-2 border-white/15 bg-white/5" },
];

const STATS = [
  { label: "RSI", value: "67" },
  { label: "EMA 20", value: "1.12571" },
  { label: "EMA 50", value: "1.12599" },
  { label: "EMA 200", value: "1.13186" },
  { label: "ATR", value: "0.00047" },
];

function Brief() {
  return (
    <div className="rounded-[22px] border border-white/[0.06] bg-ink-3 p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-fg-3">
            EUR/USD · Market snapshot
          </p>
          <p className="mt-2 font-pixel text-5xl leading-none text-fg sm:text-6xl">
            1.12581
          </p>
        </div>
        <ul className="flex gap-2">
          {TRENDS.map((t) => (
            <li
              key={t.tf}
              className={cn("rounded-xl border px-3 py-2 text-center", t.tone)}
            >
              <p className="font-pixel text-sm">{t.tf}</p>
              <p className="text-[0.6875rem] font-medium">{t.trend}</p>
            </li>
          ))}
        </ul>
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/[0.08] pt-5 sm:grid-cols-5">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-fg-3">
              {stat.label}
            </dt>
            <dd className="mt-1 font-pixel text-lg text-fg">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-[0.9375rem] leading-[1.5] text-fg-2">
        <span className="font-semibold text-gold">Neutral structure.</span>{" "}
        Mixed signals across timeframes suggest a lack of clear directional
        conviction.
      </p>
    </div>
  );
}

/* ---- Glossary -------------------------------------------------------------- */

const TERMS = [
  { term: "Market structure", lit: false },
  { term: "Break of Structure (BOS)", lit: true },
  { term: "Change of Character (CHoCH)", lit: false },
  { term: "Market Structure Shift (MSS)", lit: false },
  { term: "Swing high / swing low", lit: false },
  { term: "Higher highs / higher lows", lit: true },
  { term: "Range / consolidation", lit: false },
  { term: "Retest", lit: false },
];

function Glossary() {
  return (
    <ul className="flex flex-wrap gap-2">
      {TERMS.map(({ term, lit }) => (
        <li
          key={term}
          className={cn(
            "rounded-full border px-4 py-2 text-sm",
            lit
              ? "border-gold/50 bg-gold/10 text-gold-soft"
              : "border-white/[0.08] bg-ink-3 text-fg-2",
          )}
        >
          {term}
        </li>
      ))}
    </ul>
  );
}

/* ---- Section --------------------------------------------------------------- */

export function Features() {
  return (
    <section id="features" className="bg-ink py-24 sm:py-40">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <Reveal className="mx-auto max-w-[900px] px-2 text-center">
          <Eyebrow>Features</Eyebrow>
          <h2 className="mt-5 text-[clamp(2rem,9.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Your whole trading desk.{" "}
            <span className="text-gold-gradient">One app.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-20 sm:gap-5 md:grid-cols-2 xl:grid-cols-12">
          <Tile
            className="md:col-span-2 xl:col-span-7"
            kicker="Execution ladder"
            title="Every level, before you enter."
            body="Entry, stop loss and two targets, each with its distance in pips and its reward-to-risk."
          >
            <Ladder />
          </Tile>

          <Tile
            className="xl:col-span-5"
            kicker="AI decision"
            title="A call, with its reasoning."
            body="Buy, sell or neutral. The read behind it is written out, with trading terms linked to the glossary."
          >
            <Verdict />
          </Tile>

          <Tile
            className="xl:col-span-4"
            kicker="Position calculator"
            title="Risk first. Size second."
            body="Set your equity and your risk. Get a lot size that fits the stop."
          >
            <Calculator />
          </Tile>

          <Tile
            className="xl:col-span-4"
            kicker="Trade journal"
            title="Wins and losses, on the record."
            body="Setups save automatically and are tracked to their outcome."
          >
            <Journal />
          </Tile>

          <Tile
            className="xl:col-span-4"
            kicker="Signals"
            title="Six markets, checked every hour."
            body="Rules-based setups from daily trend, 4H structure and 1H confirmation, with alerts for the pairs you choose."
            note="Included with Monthly and longer plans"
          >
            <Signals />
          </Tile>

          <Tile
            className="md:col-span-2 xl:col-span-7"
            kicker="Market brief"
            title="1H, 4H and 1D in one brief."
            body="Structure, momentum and alignment across three timeframes. Pro members can monitor a thesis for level, trend and stale-analysis alerts."
          >
            <Brief />
          </Tile>

          <Tile
            className="md:col-span-2 xl:col-span-5"
            kicker="Glossary"
            title="Trading terms, in plain English."
            body="Plain-language explanations for the setups you trade, searchable and one tap from any analysis."
          >
            <Glossary />
          </Tile>
        </div>
      </div>
    </section>
  );
}
