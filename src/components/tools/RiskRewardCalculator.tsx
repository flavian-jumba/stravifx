"use client";

import { useState } from "react";

/**
 * Risk-to-reward from entry, stop loss and take profit, plus the win rate a
 * setup needs to break even.
 *
 * - Risk = |entry − stop|, reward = |target − entry|, both in pips.
 * - Optional costs (spread + commission, in pips) are added to the risk and
 *   taken off the reward, because the trader pays them either way.
 * - R:R = reward ÷ risk. Break-even win rate = risk ÷ (risk + reward).
 * Everything runs in the browser; no prices are fetched.
 */

type Direction = "buy" | "sell";

type Instrument = {
  label: string;
  /** Price move that counts as one pip. */
  pipSize: number;
  example: { entry: string; stop: string; target: string };
};

const INSTRUMENTS: Instrument[] = [
  {
    label: "Most forex pairs (0.0001 pip)",
    pipSize: 0.0001,
    example: { entry: "1.1000", stop: "1.0970", target: "1.1060" },
  },
  {
    label: "JPY pairs (0.01 pip)",
    pipSize: 0.01,
    example: { entry: "150.00", stop: "149.60", target: "150.60" },
  },
  {
    label: "Gold, XAU/USD ($0.01 pip)",
    pipSize: 0.01,
    example: { entry: "4000.00", stop: "3990.00", target: "4030.00" },
  },
];

const WIN_RATES = [0.3, 0.4, 0.5, 0.6];

const FIELD =
  "h-13 w-full rounded-2xl border border-white/10 bg-ink-3 px-4 text-base text-fg placeholder:text-fg-3 transition-colors duration-300 focus:border-gold focus:outline-none";

function toNumber(value: string): number {
  const n = Number(value.replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : NaN;
}

function fixed(value: number, digits = 1) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  }).format(value);
}

function signedR(value: number) {
  const rounded = Math.round(value * 100) / 100;
  if (rounded === 0) return "0.00R";
  return `${rounded > 0 ? "+" : "−"}${Math.abs(rounded).toFixed(2)}R`;
}

export function RiskRewardCalculator() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("buy");
  const inst = INSTRUMENTS[index];
  const [entry, setEntry] = useState(inst.example.entry);
  const [stop, setStop] = useState(inst.example.stop);
  const [target, setTarget] = useState(inst.example.target);
  const [costs, setCosts] = useState("0");

  function pickInstrument(next: number) {
    const ex = INSTRUMENTS[next].example;
    setIndex(next);
    setDirection("buy");
    setEntry(ex.entry);
    setStop(ex.stop);
    setTarget(ex.target);
  }

  function flipDirection(next: Direction) {
    if (next === direction) return;
    // Mirror the levels around the entry so the example stays valid.
    const e = toNumber(entry);
    const s = toNumber(stop);
    const t = toNumber(target);
    const decimals = inst.pipSize < 0.01 ? 4 : 2;
    if (e > 0 && s > 0 && t > 0) {
      setStop((2 * e - s).toFixed(decimals));
      setTarget((2 * e - t).toFixed(decimals));
    }
    setDirection(next);
  }

  const e = toNumber(entry);
  const s = toNumber(stop);
  const t = toNumber(target);
  const c = costs.trim() === "" ? 0 : toNumber(costs);

  let error: string | null = null;
  if (!(e > 0) || !(s > 0) || !(t > 0)) {
    error = "Enter an entry, stop loss and take profit above zero.";
  } else if (direction === "buy" && !(s < e && t > e)) {
    error = "For a buy, the stop goes below the entry and the target above it.";
  } else if (direction === "sell" && !(s > e && t < e)) {
    error = "For a sell, the stop goes above the entry and the target below it.";
  } else if (!(c >= 0)) {
    error = "Costs can't be negative. Enter 0 to leave them out.";
  }

  const riskPips = Math.abs(e - s) / inst.pipSize;
  const rewardPips = Math.abs(t - e) / inst.pipSize;
  const netRisk = riskPips + c;
  const netReward = rewardPips - c;
  if (!error && netReward <= 0) {
    error = "Costs are larger than the distance to the target, so the trade can't make money.";
  }

  const ratio = netReward / netRisk;
  const breakEven = netRisk / (netRisk + netReward);

  return (
    <div className="mt-10 grid gap-6 rounded-[28px] border border-white/10 bg-ink-2 p-5 sm:p-8 md:grid-cols-2 md:gap-10">
      <form
        className="flex flex-col gap-4"
        onSubmit={(ev) => ev.preventDefault()}
        aria-label="Risk reward inputs"
      >
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Market</span>
          <select
            value={index}
            onChange={(ev) => pickInstrument(Number(ev.target.value))}
            className={FIELD}
          >
            {INSTRUMENTS.map((i, n) => (
              <option key={i.label} value={n}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <fieldset className="flex flex-col gap-1.5">
          <legend className="text-sm text-fg-2">Direction</legend>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            {(["buy", "sell"] as const).map((d) => (
              <button
                key={d}
                type="button"
                aria-pressed={direction === d}
                onClick={() => flipDirection(d)}
                className={
                  direction === d
                    ? "h-12 rounded-2xl border border-gold bg-gold/10 text-base font-semibold text-fg"
                    : "h-12 rounded-2xl border border-white/10 bg-ink-3 text-base text-fg-2 transition-colors duration-300 hover:text-fg"
                }
              >
                {d === "buy" ? "Buy (long)" : "Sell (short)"}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Entry price</span>
          <input
            inputMode="decimal"
            value={entry}
            onChange={(ev) => setEntry(ev.target.value)}
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Stop loss</span>
          <input
            inputMode="decimal"
            value={stop}
            onChange={(ev) => setStop(ev.target.value)}
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Take profit</span>
          <input
            inputMode="decimal"
            value={target}
            onChange={(ev) => setTarget(ev.target.value)}
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Costs in pips (optional)</span>
          <input
            inputMode="decimal"
            value={costs}
            onChange={(ev) => setCosts(ev.target.value)}
            className={FIELD}
          />
          <span className="text-xs text-fg-3">
            Spread plus commission for the round trip. Added to the risk and
            taken off the reward.
          </span>
        </label>
      </form>

      <div aria-live="polite" className="flex flex-col">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-gold sm:text-xs">
          Risk to reward
        </p>
        {error ? (
          <p className="mt-4 text-fg-2">{error}</p>
        ) : (
          <>
            <p className="mt-4 text-[clamp(2.5rem,9vw,3.5rem)] font-semibold leading-none tracking-[-0.04em]">
              1 : {ratio.toFixed(2)}
            </p>
            <p className="mt-3 text-sm text-fg-2">
              Each unit risked aims to make {ratio.toFixed(2)}.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-y-3 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
                <dt className="text-fg-3">Risk</dt>
                <dd className="text-fg">{fixed(netRisk)} pips</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/5 pb-3">
                <dt className="text-fg-3">Reward</dt>
                <dd className="text-fg">{fixed(netReward)} pips</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-fg-3">Break-even win rate</dt>
                <dd className="text-fg">{fixed(breakEven * 100)}%</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-[1.6] text-fg-2">
              You need to win more than {fixed(breakEven * 100)}% of trades
              like this one to come out ahead
              {c > 0 ? `, after ${fixed(c, 2)} pips of costs` : ""}.
            </p>
            <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-fg-3">
              Average result per trade
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
              {WIN_RATES.map((w) => (
                <div key={w} className="flex justify-between gap-3">
                  <dt className="text-fg-3">{w * 100}% wins</dt>
                  <dd className="text-fg">{signedR(w * ratio - (1 - w))}</dd>
                </div>
              ))}
            </dl>
          </>
        )}
      </div>
    </div>
  );
}
