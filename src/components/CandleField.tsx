import { cn } from "@/lib/utils";

/** Small deterministic PRNG so the server and client render the same candles. */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Candle = {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  up: boolean;
};

const WIDTH = 1600;
const HEIGHT = 520;

function buildCandles(count: number, seed: number): Candle[] {
  const rand = mulberry32(seed);
  const step = WIDTH / count;
  const candles: Candle[] = [];
  let level = HEIGHT * 0.72;
  for (let i = 0; i < count; i++) {
    const open = level;
    const close = open - HEIGHT * 0.0065 + (rand() - 0.46) * 46;
    const high = Math.min(open, close) - rand() * 26;
    const low = Math.max(open, close) + rand() * 26;
    candles.push({
      x: step * (i + 0.5),
      open,
      close,
      high,
      low,
      up: close < open,
    });
    level = close;
  }
  return candles;
}

type CandleFieldProps = {
  className?: string;
  count?: number;
  seed?: number;
};

/** A faint, decorative run of candlesticks drifting upward. Purely atmospheric. */
export function CandleField({
  className,
  count = 64,
  seed = 7,
}: CandleFieldProps) {
  const candles = buildCandles(count, seed);
  const step = WIDTH / count;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn("pointer-events-none text-white", className)}
    >
      {candles.map((c) => (
        <g key={c.x}>
          <line
            x1={c.x}
            x2={c.x}
            y1={c.high}
            y2={c.low}
            stroke="currentColor"
            strokeWidth={1.5}
          />
          <rect
            x={c.x - step * 0.28}
            y={Math.min(c.open, c.close)}
            width={step * 0.56}
            height={Math.max(2, Math.abs(c.close - c.open))}
            fill={c.up ? "currentColor" : "#000"}
            stroke="currentColor"
            strokeWidth={1.5}
          />
        </g>
      ))}
    </svg>
  );
}
