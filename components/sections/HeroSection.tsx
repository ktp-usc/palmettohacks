"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock, MapPin, Zap } from "lucide-react";

const eventStart = new Date("2026-10-10T09:00:00-04:00");

const eventMeta = [
  { icon: CalendarDays, label: "Saturday, October 10, 2026" },
  { icon: Clock, label: "24 Hours" },
  { icon: MapPin, label: "University of South Carolina" },
];

const trustPoints = ["Free to attend", "All majors welcome", "Meals provided", "Official MLH event"];

type Countdown = { Days: number; Hours: number; Minutes: number; Seconds: number };

function useCountdown(target: Date) {
  // Rendered only after mount so the server and client markup agree.
  const [parts, setParts] = useState<Countdown | null>(null);

  useEffect(() => {
    const tick = () => {
      const remaining = target.getTime() - Date.now();
      if (remaining <= 0) return setParts(null);
      setParts({
        Days: Math.floor(remaining / 86400000),
        Hours: Math.floor((remaining / 3600000) % 24),
        Minutes: Math.floor((remaining / 60000) % 60),
        Seconds: Math.floor((remaining / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return parts;
}

export default function HeroSection() {
  const countdown = useCountdown(eventStart);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-20 text-center"
      style={{ background: "#05080f" }}
    >
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hero-bg-anim" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hero-bg-noise" />

      {/* Blue glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 h-[60vw] w-[90vw] max-h-175 max-w-250 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(96,165,250,0.12) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-[20%] z-0 h-[40vw] w-[40vw] max-h-100 max-w-100 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[40%] z-0 h-[35vw] w-[35vw] max-h-87.5 max-w-87.5 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6">

        {/* Title */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl">
          Palmetto
          <span className="text-[#60a5fa]">Hacks</span>
          <span className="mt-3 block text-sm font-semibold tracking-[0.45em] text-white/40 sm:text-base">
            2026
          </span>
        </h1>

        {/* Theme */}
        <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
          {/* Rules are dropped on mobile, where the lockup needs the full width to stay on one line. */}
          <span
            aria-hidden
            className="hidden h-px bg-gradient-to-r from-transparent to-ph-yellow/60 sm:block sm:w-20"
          />
          <span className="flex items-center gap-2 sm:gap-3">
            <Zap
              aria-hidden
              className="hero-zap h-5 w-5 shrink-0 fill-ph-yellow text-ph-yellow sm:h-7 sm:w-7"
            />
            {/* Negative margin cancels the trailing letter-space so the line optically centers. */}
            <span className="hero-theme -mr-[0.15em] whitespace-nowrap text-xl font-extrabold uppercase tracking-[0.15em] sm:-mr-[0.2em] sm:text-3xl sm:tracking-[0.2em]">
              Bring the Energy
            </span>
          </span>
          <span
            aria-hidden
            className="hidden h-px bg-gradient-to-l from-transparent to-ph-yellow/60 sm:block sm:w-20"
          />
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg text-white/60 sm:text-xl">
          Build something cool, enjoy free food, and win prizes. No tech-experience needed.
        </p>

        {/* Event meta */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/50">
          {eventMeta.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-[#60a5fa]" aria-hidden />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Doors open in
          </span>

          <div
            className="flex items-start gap-2 sm:gap-4"
            role="timer"
            aria-live="off"
            aria-label="Time remaining until PalmettoHacks 2026 begins"
          >
            {(["Days", "Hours", "Minutes", "Seconds"] as const).map((unit) => (
              <div
                key={unit}
                className="flex min-w-16 flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur sm:min-w-24 sm:px-5 sm:py-5"
              >
                <span className="font-mono text-3xl font-extrabold tabular-nums text-white sm:text-5xl">
                  {countdown ? String(countdown[unit]).padStart(2, "0") : "--"}
                </span>
                <span className="text-[0.65rem] uppercase tracking-widest text-white/40 sm:text-xs">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-2 text-xs text-white/40 sm:text-sm">
          {trustPoints.map((point, i) => (
            <li key={point} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-ph-yellow/50" />}
              {point}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .hero-theme {
          background-image: linear-gradient(
            100deg,
            var(--ph-yellow-deep) 0%,
            var(--ph-yellow) 30%,
            #fff6e0 48%,
            var(--ph-yellow) 62%,
            var(--ph-yellow-deep) 100%
          );
          background-size: 300% 100%;
          background-position: 100% 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: hero-theme-sweep 5s linear infinite;
        }

        .hero-zap {
          filter: drop-shadow(0 0 10px rgba(248, 185, 42, 0.55));
          animation: hero-zap-pulse 5s ease-in-out infinite;
        }

        @keyframes hero-theme-sweep {
          to { background-position: -200% 0; }
        }

        @keyframes hero-zap-pulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.12); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-theme { animation: none; background-position: 50% 0; }
          .hero-zap { animation: none; }
        }

        .hero-bg-anim {
          background:
            radial-gradient(900px 600px at 50% 55%, rgba(96,165,250,0.09), transparent 68%),
            radial-gradient(800px 600px at 15% 25%, rgba(139,92,246,0.07), transparent 62%),
            radial-gradient(900px 650px at 85% 30%, rgba(56,189,248,0.06), transparent 62%),
            radial-gradient(900px 700px at 50% 85%, rgba(96,165,250,0.06), transparent 64%),
            radial-gradient(1200px 800px at 50% 50%, rgba(15,23,42,1), transparent 80%);
          background-size: 100% 100%, 170% 170%, 185% 185%, 175% 175%, 100% 100%;
          background-position: 50% 55%, 30% 30%, 70% 30%, 50% 70%, 50% 50%;
          filter: blur(18px);
          opacity: 0.95;
          animation: hero-bg-pan 14s ease-in-out infinite;
          will-change: background-position, background-size, opacity;
        }

        .hero-bg-noise {
          background-image: repeating-linear-gradient(
            0deg,
            rgba(255,255,255,0.03) 0px,
            rgba(255,255,255,0.03) 1px,
            transparent 2px,
            transparent 6px
          );
          background-size: 180px 180px;
          background-position: 0 0;
          opacity: 0.05;
          mix-blend-mode: overlay;
          animation: hero-noise-pan 4.25s linear infinite;
          will-change: background-position;
        }

        @keyframes hero-bg-pan {
          0%   { background-position: 50% 55%, 22% 28%, 78% 32%, 52% 76%, 50% 50%; background-size: 100% 100%, 170% 170%, 185% 185%, 175% 175%, 100% 100%; opacity: 0.92; }
          25%  { background-position: 50% 55%, 40% 18%, 66% 46%, 70% 64%, 50% 50%; background-size: 100% 100%, 178% 178%, 192% 192%, 182% 182%, 100% 100%; opacity: 0.98; }
          50%  { background-position: 50% 55%, 60% 52%, 44% 58%, 36% 44%, 50% 50%; background-size: 100% 100%, 188% 188%, 200% 200%, 190% 190%, 100% 100%; opacity: 1.0; }
          75%  { background-position: 50% 55%, 34% 62%, 72% 40%, 44% 86%, 50% 50%; background-size: 100% 100%, 180% 180%, 194% 194%, 184% 184%, 100% 100%; opacity: 0.98; }
          100% { background-position: 50% 55%, 22% 28%, 78% 32%, 52% 76%, 50% 50%; background-size: 100% 100%, 170% 170%, 185% 185%, 175% 175%, 100% 100%; opacity: 0.92; }
        }

        @keyframes hero-noise-pan {
          0%   { background-position: 0 0; }
          50%  { background-position: -90px 120px; }
          100% { background-position: -180px 180px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-anim, .hero-bg-noise { animation: none; }
        }
      `}</style>
    </section>
  );
}
