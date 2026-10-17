"use client";

import { useId, useState } from "react";

/**
 * Pip value per lot for forex pairs and gold, in a USD, EUR or GBP account.
 *
 * One pip on one standard lot is worth, in the pair's quote currency:
 * - most pairs: 100,000 × 0.0001 = 10 units of the quote currency.
 * - JPY-quoted pairs: 100,000 × 0.01 = ¥1,000.
 * - XAU/USD: 100 oz × $0.01 = $1.
 * That amount is then converted into the account currency with the
 * conventional pair between the two (e.g. USD/JPY, EUR/USD, GBP/USD).
 * Everything runs in the browser; no prices are fetched.
 */

type Currency = "EUR" | "GBP" | "AUD" | "NZD" | "USD" | "CAD" | "CHF" | "JPY";
type AccountCurrency = "USD" | "EUR" | "GBP";

/** Market convention: the currency earlier in this list is quoted as the base. */
const PRIORITY: Currency[] = ["EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"];

/** Example rates for the blank fields. Not live prices. */
const EXAMPLE_RATES: Record<string, string> = {
  "EUR/USD": "1.1000",
  "GBP/USD": "1.3000",
  "USD/CAD": "1.3700",
  "USD/CHF": "0.8000",
  "USD/JPY": "150.00",
  "EUR/GBP": "0.8500",
  "EUR/CAD": "1.5000",
  "EUR/CHF": "0.9300",
  "EUR/JPY": "165.00",
  "GBP/CAD": "1.7800",
  "GBP/CHF": "1.0400",
  "GBP/JPY": "195.00",
};

type Instrument = {
  symbol: string;
  quote: Currency;
  /** Units in one standard lot. */
  contract: number;
  /** Price move that counts as one pip. */
  pipSize: number;
  unitName: string;
};

const INSTRUMENTS: Instrument[] = [
  { symbol: "EUR/USD", quote: "USD", contract: 100_000, pipSize: 0.0001, unitName: "units" },
  { symbol: "GBP/USD", quote: "USD", contract: 100_000, pipSize: 0.0001, unitName: "units" },
  { symbol: "AUD/USD", quote: "USD", contract: 100_000, pipSize: 0.0001, unitName: "units" },
  { symbol: "NZD/USD", quote: "USD", contract: 100_000, pipSize: 0.0001, unitName: "units" },
  { symbol: "USD/JPY", quote: "JPY", contract: 100_000, pipSize: 0.01, unitName: "units" },
  { symbol: "EUR/JPY", quote: "JPY", contract: 100_000, pipSize: 0.01, unitName: "units" },
  { symbol: "GBP/JPY", quote: "JPY", contract: 100_000, pipSize: 0.01, unitName: "units" },
  { symbol: "AUD/JPY", quote: "JPY", contract: 100_000, pipSize: 0.01, unitName: "units" },
  { symbol: "USD/CAD", quote: "CAD", contract: 100_000, pipSize: 0.0001, unitName: "units" },
  { symbol: "USD/CHF", quote: "CHF", contract: 100_000, pipSize: 0.0001, unitName: "units" },
  { symbol: "EUR/GBP", quote: "GBP", contract: 100_000, pipSize: 0.0001, unitName: "units" },
  { symbol: "XAU/USD (gold)", quote: "USD", contract: 100, pipSize: 0.01, unitName: "oz" },
];

const ACCOUNTS: AccountCurrency[] = ["USD", "EUR", "GBP"];

const LOTS = [
  { label: "Standard (1.00)", lots: 1 },
  { label: "Mini (0.10)", lots: 0.1 },
  { label: "Micro (0.01)", lots: 0.01 },
];

/**
 * The pair needed to turn the quote currency into the account currency, and
 * whether its price multiplies (quote is its base) or divides the amount.
 */
function conversionFor(quote: Currency, account: AccountCurrency) {
  if (quote === account) return null;
  const quoteFirst = PRIORITY.indexOf(quote) < PRIORITY.indexOf(account);
  return quoteFirst
    ? { pair: `${quote}/${account}`, multiply: true }
    : { pair: `${account}/${quote}`, multiply: false };
}

const FIELD =
  "h-13 w-full rounded-2xl border border-white/10 bg-ink-3 px-4 text-base text-fg placeholder:text-fg-3 transition-colors duration-300 focus:border-gold focus:outline-none";

function toNumber(value: string): number {
  const n = Number(value.replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : NaN;
}

function money(currency: string, value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: value > 0 && value < 1 ? 4 : 2,
  }).format(value);
}

export function PipCalculator() {
  const uid = useId();
  const [symbol, setSymbol] = useState(INSTRUMENTS[0].symbol);
  const [account, setAccount] = useState<AccountCurrency>("USD");
  const [lotSize, setLotSize] = useState("0.20");
  const [rate, setRate] = useState("");

  const inst = INSTRUMENTS.find((i) => i.symbol === symbol) ?? INSTRUMENTS[0];
  const conv = conversionFor(inst.quote, account);
  const fallback = conv ? EXAMPLE_RATES[conv.pair] : "";
  const rateValue = conv ? toNumber(rate || fallback) : 1;
  const lots = toNumber(lotSize);

  let error: string | null = null;
  if (!(rateValue > 0)) error = "Enter an exchange rate above zero.";
  else if (!(lots > 0)) error = "Enter a lot size above zero.";

  // One pip on one standard lot, first in the quote currency, then the account's.
  const pipQuote = inst.contract * inst.pipSize;
  const pipAccount = conv
    ? conv.multiply
      ? pipQuote * rateValue
      : pipQuote / rateValue
    : pipQuote;

  return (
    <div className="mt-10 grid gap-6 rounded-[28px] border border-white/10 bg-ink-2 p-5 sm:p-8 md:grid-cols-2 md:gap-10">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Pip value inputs"
      >
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Pair</span>
          <select
            value={symbol}
            onChange={(e) => {
              setSymbol(e.target.value);
              setRate("");
            }}
            className={FIELD}
          >
            {INSTRUMENTS.map((i) => (
              <option key={i.symbol} value={i.symbol}>
                {i.symbol}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Account currency</span>
          <select
            value={account}
            onChange={(e) => {
              setAccount(e.target.value as AccountCurrency);
              setRate("");
            }}
            className={FIELD}
          >
            {ACCOUNTS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm text-fg-2">Your lot size</span>
          <input
            inputMode="decimal"
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value)}
            className={FIELD}
          />
        </label>
        {conv ? (
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-fg-2">{conv.pair} price</span>
            <input
              inputMode="decimal"
              value={rate}
              placeholder={fallback}
              aria-describedby={`${uid}-rate`}
              onChange={(e) => setRate(e.target.value)}
              className={FIELD}
            />
            <span id={`${uid}-rate`} className="text-xs text-fg-3">
              Turns {inst.quote} into {account}. Enter today&apos;s quote;
              blank uses the example rate {fallback}.
            </span>
          </label>
        ) : null}
      </form>

      <div aria-live="polite" className="flex flex-col">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-gold sm:text-xs">
          Pip value
        </p>
        {error ? (
          <p className="mt-4 text-fg-2">{error}</p>
        ) : (
          <>
            <p className="mt-4 text-[clamp(2.5rem,9vw,3.5rem)] font-semibold leading-none tracking-[-0.04em]">
              {money(account, pipAccount * lots)}
              <span className="ml-2 text-[1.125rem] font-normal tracking-normal text-fg-2">
                per pip
              </span>
            </p>
            <p className="mt-3 text-sm text-fg-2">
              On {lots} lots ({new Intl.NumberFormat("en-US").format(lots * inst.contract)}{" "}
              {inst.unitName}) of {inst.symbol}.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-y-3 font-mono text-sm">
              {LOTS.map((row) => (
                <div key={row.label} className="flex justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-fg-3">{row.label}</dt>
                  <dd className="text-fg">{money(account, pipAccount * row.lots)}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4">
                <dt className="text-fg-3">1 pip</dt>
                <dd className="text-fg">
                  {inst.pipSize} price move
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-[1.6] text-fg-2">
              One standard lot earns or loses{" "}
              {new Intl.NumberFormat("en-US").format(pipQuote)} {inst.quote} per
              pip
              {conv
                ? `, converted at ${conv.pair} ${rate || fallback}${rate ? "" : " (example rate)"}.`
                : "."}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
