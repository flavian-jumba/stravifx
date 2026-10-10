import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/** Wide-tracked mono label that sits above a headline. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.6875rem] uppercase tracking-[0.28em] text-fg-3 sm:text-xs",
        className,
      )}
    >
      {children}
    </p>
  );
}
