"use client";

import { useId, useState } from "react";

/**
 * Lot size from balance, risk % and stop distance, for a USD account.
 *
 * Pip value per standard lot (100,000 units, or 100 oz of gold), in USD:
 * - XXX/USD pairs: 100,000 × 0.0001 = $10, fixed.
 * - USD/XXX pairs: 100,000 × 0.0001 ÷ price, so the price is needed.
 * - USD/JPY: 100,000 × 0.01 ÷ price.
 * - JPY crosses: 1,000 yen per pip, converted at the USD/JPY rate.
 * - XAU/USD: 100 oz × 0.01 = $1.
 * Everything runs in the browser; no prices are fetched.
 */

type PairGroup = {
  id: string;
  label: string;
  /** Units in one standard lot. */
  contract: number;
  /** Shown next to the units figure. */
  unitName: string;
  /** Which extra rate the pip value needs, if any. */
  rate?: { label: string; hint: string; fallback: string };
  /** USD value of one pip on one standard lot. */
  pipValue: (rate: number) => number;
};

const PAIRS: PairGroup[] = [
  {
    id: "xxxusd",
    label: "EUR/USD, GBP/USD, AUD/USD, NZD/USD",
    contract: 100_000,
    unitName: "units",
    pipValue: () => 10,
  },
  {
    id: "usdjpy",
    label: "USD/JPY",
    contract: 100_000,
    unitName: "units",
    rate: {
      label: "USD/JPY price",
      hint: "The current USD/JPY quote, e.g. 150.00",
      fallback: "150.00",
    },
    pipValue: (rate) => 1_000 / rate,
  },
  {
    id: "jpycross",
    label: "GBP/JPY, EUR/JPY, AUD/JPY (JPY crosses)",
    contract: 100_000,
    unitName: "units",
    rate: {
      label: "USD/JPY price",
      hint: "Needed to turn yen into dollars, e.g. 150.00",
      fallback: "150.00",
    },
    pipValue: (rate) => 1_000 / rate,
  },
  {
    id: "usdxxx",
    label: "USD/CAD, USD/CHF",
    contract: 100_000,
    unitName: "units",
    rate: {
      label: "Pair price",
      hint: "The current quote of the pair, e.g. 1.3700",
      fallback: "1.3700",
    },
    pipValue: (rate) => 10 / rate,
  },
  {
    id: "xauusd",
    label: "XAU/USD (gold)",
    contract: 100,
    unitName: "oz",
    pipValue: () => 1,
  },
];

const FIELD =
  "h-13 w-full rounded-2xl border border-white/10 bg-ink-3 px-4 text-base text-fg placeholder:text-fg-3 transition-colors duration-300 focus:border-gold focus:outline-none";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const plain = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

function toNumber(value: string): number {
  const n = Number(value.replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : NaN;
}

export function LotSizeCalculator() {
  const uid = useId();
  const [pairId, setPairId] = useState(PAIRS[0].id);
  const [balance, setBalance] = useState("5000");
  const [riskPct, setRiskPct] = useState("1");
  const [stopPips, setStopPips] = useState("25");
  const [rate, setRate] = useState("");

  const pair = PAIRS.find((p) => p.id === pairId) ?? PAIRS[0];
  const rateValue = pair.rate ? toNumber(rate || pair.rate.fallback) : 1;

  const b = toNumber(balance);
  const r = toNumber(riskPct);
  const s = toNumber(stopPips);

  let error: string | null = null;
  if (!(b > 0)) error = "Enter an account balance above zero.";
  else if (!(r > 0) || r > 100) error = "Enter a risk between 0 and 100%.";
  else if (!(s > 0)) error = "Enter a stop loss above zero pips.";
  else if (!(rateValue > 0)) error = "Enter a price above zero.";

  const riskMoney = b * (r / 100);
  const pipValue = pair.pipValue(rateValue);
  const exactLots = riskMoney / (s * pipValue);
  // Round down to 0.01 lots so the trade never risks more than planned.
  const lots = Math.floor(exactLots * 100 + 1e-9) / 100;
  const actualRisk = lots * s * pipValue;
  const units = lots * pair.contract;

  return (
    <div className="mt-10 grid gap-6 rounded-[28px] border border-white/10 bg-ink-2 p-5 sm:p-8 md:grid-cols-2 md:gap-10">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Lot size inputs"
      >
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Pair</span>
          <select
            value={pairId}
            onChange={(e) => {
              setPairId(e.target.value);
              setRate("");
            }}
            className={FIELD}
          >
            {PAIRS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Account balance (USD)</span>
          <input
            inputMode="decimal"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Risk per trade (%)</span>
          <input
            inputMode="decimal"
            value={riskPct}
            onChange={(e) => setRiskPct(e.target.value)}
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">
            Stop loss (pips{pair.id === "xauusd" ? ", 1 pip = $0.01" : ""})
          </span>
          <input
            inputMode="decimal"
            value={stopPips}
            onChange={(e) => setStopPips(e.target.value)}
            className={FIELD}
          />
        </label>
        {pair.rate ? (
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-fg-2">{pair.rate.label}</span>
            <input
              inputMode="decimal"
              value={rate}
              placeholder={pair.rate.fallback}
              aria-describedby={`${uid}-rate`}
              onChange={(e) => setRate(e.target.value)}
              className={FIELD}
            />
            <span id={`${uid}-rate`} className="text-xs text-fg-3">
              {pair.rate.hint}. Blank uses {pair.rate.fallback}.
            </span>
          </label>
        ) : null}
      </form>

      <div aria-live="polite" className="flex flex-col">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-gold sm:text-xs">
          Result
        </p>
        {error ? (
          <p className="mt-4 text-fg-2">{error}</p>
        ) : (
          <>
            <p className="mt-4 text-[clamp(2.5rem,9vw,3.5rem)] font-semibold leading-none tracking-[-0.04em]">
              {lots.toFixed(2)}
              <span className="ml-2 text-[1.125rem] font-normal tracking-normal text-fg-2">
                lots
              </span>
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 font-mono text-sm">
              <div>
                <dt className="text-fg-3">Units</dt>
                <dd className="mt-1 text-fg">
                  {plain.format(units)} {pair.unitName}
                </dd>
              </div>
              <div>
                <dt className="text-fg-3">Risk budget</dt>
                <dd className="mt-1 text-fg">{usd.format(riskMoney)}</dd>
              </div>
              <div>
                <dt className="text-fg-3">Money at risk</dt>
                <dd className="mt-1 text-fg">{usd.format(actualRisk)}</dd>
              </div>
              <div>
                <dt className="text-fg-3">Pip value / lot</dt>
                <dd className="mt-1 text-fg">{usd.format(pipValue)}</dd>
              </div>
            </dl>
            {lots < 0.01 ? (
              <p className="mt-6 text-sm leading-[1.6] text-fg-2">
                The size works out below 0.01 lots (exactly{" "}
                {exactLots.toFixed(4)}). Many brokers can&apos;t open a trade
                that small. Don&apos;t tighten a well-placed stop just to make it
                fit; skipping the trade is a valid choice.
              </p>
            ) : (
              <p className="mt-6 text-sm leading-[1.6] text-fg-2">
                Exact size {exactLots.toFixed(4)} lots, rounded down to the
                nearest 0.01 so you never risk more than planned.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
