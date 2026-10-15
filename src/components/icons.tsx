type IconProps = { className?: string };

/** The four-point star from the StraviFX wordmark. */
export function Sparkle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M24 0c2.6 16.4 7.6 21.4 24 24-16.4 2.6-21.4 7.6-24 24-2.6-16.4-7.6-21.4-24-24 16.4-2.6 21.4-7.6 24-24Z"
      />
    </svg>
  );
}

/** Lightning bolt used by the app for live-data actions. */
export function Bolt({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
      className={className}
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}
