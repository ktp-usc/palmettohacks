"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 text-center"
    >
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hero-bg-anim" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hero-bg-noise" />

      {/* Green glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74,222,128,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto">
        {/* Hosted-by badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
          Hosted by Kappa Theta Pi · Powered by Microsoft &amp; Capgemini
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
          Palmetto
          <span className="text-[#4ade80]">Hacks</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg text-white/60 sm:text-xl">
          A 12-hour hackathon challenging students to build innovative technology
          solutions. Compete, collaborate, and create at the premier student
          hackathon in South Carolina.
        </p>

        {/* Event meta */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#4ade80]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Saturday, April 11, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#4ade80]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>12 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#4ade80]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>University of South Carolina</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            className="bg-[#4ade80] text-black font-semibold hover:bg-[#22c55e] px-8"
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 backdrop-blur"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
        <span>Scroll</span>
        <svg className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        .hero-bg-anim {
          background:
            radial-gradient(900px 600px at 50% 55%, rgba(74,222,128,0.06), transparent 68%),
            radial-gradient(1100px 700px at 15% 25%, rgba(255,255,255,0.08), transparent 62%),
            radial-gradient(900px 650px at 85% 30%, rgba(255,255,255,0.06), transparent 62%),
            radial-gradient(900px 700px at 50% 85%, rgba(74,222,128,0.05), transparent 64%);
          background-size: 100% 100%, 170% 170%, 185% 185%, 175% 175%;
          background-position: 50% 55%, 30% 30%, 70% 30%, 50% 70%;
          filter: blur(18px);
          opacity: 0.95;
          animation: hero-bg-pan 12s ease-in-out infinite;
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
          opacity: 0.06;
          mix-blend-mode: overlay;
          animation: hero-noise-pan 4.25s linear infinite;
          will-change: background-position;
        }

        @keyframes hero-bg-pan {
          0%   { background-position: 50% 55%, 22% 28%, 78% 32%, 52% 76%; background-size: 100% 100%, 170% 170%, 185% 185%, 175% 175%; opacity: 0.92; }
          25%  { background-position: 50% 55%, 40% 18%, 66% 46%, 70% 64%; background-size: 100% 100%, 178% 178%, 192% 192%, 182% 182%; opacity: 0.98; }
          50%  { background-position: 50% 55%, 60% 52%, 44% 58%, 36% 44%; background-size: 100% 100%, 188% 188%, 200% 200%, 190% 190%; opacity: 1.0; }
          75%  { background-position: 50% 55%, 34% 62%, 72% 40%, 44% 86%; background-size: 100% 100%, 180% 180%, 194% 194%, 184% 184%; opacity: 0.98; }
          100% { background-position: 50% 55%, 22% 28%, 78% 32%, 52% 76%; background-size: 100% 100%, 170% 170%, 185% 185%, 175% 175%; opacity: 0.92; }
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
