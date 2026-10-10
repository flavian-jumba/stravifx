"use client";

import { Play } from "lucide-react";
import { WATCH_FILM_EVENT } from "@/components/FilmPlayer";

/** Scrolls to the film and restarts it with sound (a click counts as consent to audio). */
export function WatchFilmButton() {
  const onClick = () => {
    document
      .getElementById("film")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new Event(WATCH_FILM_EVENT));
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-3 rounded-full py-2 pr-2 text-[1.0625rem] font-medium text-fg transition-colors duration-300 hover:text-gold-soft"
    >
      <span className="grid size-11 place-items-center rounded-full border border-white/20 transition-colors duration-300 group-hover:border-gold/60">
        <Play className="size-4 translate-x-px fill-current" />
      </span>
      Watch the film
    </button>
  );
}
