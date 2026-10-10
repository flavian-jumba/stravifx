"use client";

import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";

/** Event the "Watch the film" button fires to restart the film with sound. */
export const WATCH_FILM_EVENT = "stravifx:watch-film";

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * The product film. Plays muted while on screen, pauses off screen, and grows
 * from 90 % to full width as it scrolls into place.
 */
export function FilmPlayer() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Play only while the film is actually on screen.
  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.35) {
          if (!userPaused.current && !reduceMotion) {
            video.play().catch(() => undefined);
          }
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.35, 1] },
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  // Scroll-linked scale, written straight to a CSS variable (no re-render).
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = easeOut(clamp01((vh - rect.top) / (vh * 0.7)));
      wrap.style.setProperty("--film-scale", String(0.9 + 0.1 * progress));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // "Watch the film": restart from the top with sound.
  useEffect(() => {
    const onWatch = () => {
      const video = videoRef.current;
      if (!video) return;
      userPaused.current = false;
      video.currentTime = 0;
      video.muted = false;
      setMuted(false);
      video.play().catch(() => undefined);
    };
    window.addEventListener(WATCH_FILM_EVENT, onWatch);
    return () => window.removeEventListener(WATCH_FILM_EVENT, onWatch);
  }, []);

  // Fullscreen hides our overlay, so hand over to the native controls there.
  useEffect(() => {
    const onChange = () => {
      const video = videoRef.current;
      if (video) video.controls = document.fullscreenElement === video;
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const onTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    const bar = barRef.current;
    if (!video || !bar || !video.duration) return;
    bar.style.scale = `${video.currentTime / video.duration} 1`;
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => undefined);
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  const goFullscreen = () => {
    const video = videoRef.current as
      (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => undefined);
    } else {
      // iOS Safari only exposes fullscreen on the <video> element itself.
      video.webkitEnterFullscreen?.();
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div
      ref={wrapRef}
      id="film"
      className="relative [scale:var(--film-scale,0.9)] will-change-[scale]"
    >
      {/* Gold floor-glow, as if the frame were back-lit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -bottom-16 top-1/3 bg-[radial-gradient(50%_60%_at_50%_60%,rgba(246,186,24,0.22),transparent_70%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-ink-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] sm:rounded-[32px]">
        <video
          ref={videoRef}
          className="block aspect-video w-full"
          src={SITE.film.src}
          poster={SITE.film.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Stravifx product film: from a noisy chart to a trade plan with entry, stop and targets."
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={onTimeUpdate}
          onClick={togglePlay}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-2.5 sm:p-5">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause film" : "Play film"}
            className="pointer-events-auto grid size-11 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/75 sm:size-11"
          >
            {playing ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className="size-4 translate-x-px fill-current" />
            )}
          </button>

          <div className="pointer-events-auto flex items-center gap-2">
            <button
              type="button"
              onClick={goFullscreen}
              aria-label="Watch full screen"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/75 sm:size-11"
            >
              <Maximize2 className="size-4" />
            </button>
            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={!muted}
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
              className="flex h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 text-[0.8125rem] font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-black/75 sm:h-11 sm:px-4"
            >
              {muted ? (
                <VolumeX className="size-4" />
              ) : (
                <Volume2 className="size-4" />
              )}
              <span className="max-[380px]:sr-only">
                {muted ? "Sound off" : "Sound on"}
              </span>
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
          <div
            ref={barRef}
            className="h-full origin-left bg-gold [scale:0_1]"
          />
        </div>
      </div>
    </div>
  );
}
