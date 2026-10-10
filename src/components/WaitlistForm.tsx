"use client";

import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type WaitlistFormProps = {
  /** The learn-checkout Supabase function. */
  endpoint: string;
  /** "KES 2,500". Empty while checkout is not configured. */
  priceLabel: string;
  /** False until the payment settings are in place; the form is then replaced by a notice. */
  open: boolean;
};

const FIELD =
  "h-13 w-full rounded-2xl border border-white/10 bg-ink-3 px-4 text-base text-fg placeholder:text-fg-3 transition-colors duration-300 focus:border-gold focus:outline-none";

const BUTTON =
  "flex h-14 w-full items-center justify-center gap-2 rounded-full px-6 text-[1.0625rem] font-semibold transition-[background-color,scale,opacity] duration-300 ease-out-expo";

/** Collects a name and email, then sends the visitor to Paystack to pay for a seat. */
export function WaitlistForm({
  endpoint,
  priceLabel,
  open,
}: WaitlistFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!open) {
    return (
      <button
        type="button"
        disabled
        className={cn(BUTTON, "cursor-not-allowed bg-white/10 text-fg-3")}
      >
        Checkout opens soon
      </button>
    );
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    const form = new FormData(event.currentTarget);
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.get("fullName"),
          email: form.get("email"),
          hp: form.get("hp"),
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        url?: string;
        message?: string;
      } | null;
      if (!response.ok || !result?.url) {
        setError(
          result?.message ??
            "We couldn't start the payment. Please try again in a moment.",
        );
        setSubmitting(false);
        return;
      }
      // Stay in the "opening" state while the browser leaves for Paystack.
      window.location.assign(result.url);
    } catch {
      setError(
        "You appear to be offline. Check your connection and try again.",
      );
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}

      className="flex flex-col gap-3"
    >
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-fg-2">Full name</span>
        <input
          name="fullName"
          type="text"
          required
          minLength={2}
          maxLength={80}
          autoComplete="name"
          placeholder="Your name"
          className={FIELD}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-fg-2">Email</span>
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          className={FIELD}
        />
      </label>

      {/* Honeypot: hidden from people, tempting to bots. Named and marked so that
          browser autofill and password managers leave it alone. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] size-px overflow-hidden"
      >
        <input
          name="hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          data-1p-ignore
          data-lpignore="true"
          data-form-type="other"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          BUTTON,
          "mt-2 bg-gold text-black hover:bg-gold-soft active:scale-[0.98]",
          submitting && "cursor-wait opacity-80",
        )}
      >
        {submitting ? (
          <>
            <LoaderCircle className="size-5 animate-spin" />
            Opening Paystack…
          </>
        ) : (
          <>
            Pay {priceLabel} to join
            <ArrowUpRight className="size-5" />
          </>
        )}
      </button>

      <p role="alert" aria-live="polite" className="min-h-5 text-sm text-sell">
        {error}
      </p>
    </form>
  );
}
