/**
 * StraviFX Learn — the curriculum shown in the Learn section.
 * Price, currency and refund wording are server settings: see .env.example.
 */

export const LEARN = {
  /** DRAFT outline — edit freely. */
  modules: [
    {
      title: "Foundations",
      body: "What moves a currency pair. Pips, lots, leverage and trading sessions.",
    },
    {
      title: "Reading price",
      body: "Candlesticks, timeframes and trend, without a screen full of indicators.",
    },
    {
      title: "Market structure",
      body: "Swing highs and lows, breaks of structure, ranges and retests.",
    },
    {
      title: "Liquidity",
      body: "Where orders gather, and why price is drawn to those levels.",
    },
    {
      title: "Risk first",
      body: "Stops, reward-to-risk and sizing a position you can afford to lose.",
    },
    {
      title: "The trade plan",
      body: "Entry, invalidation and targets, written down before you place the trade.",
    },
    {
      title: "Journal and review",
      body: "Tracking every setup to its outcome and learning from the losses.",
    },
  ],
} as const;
