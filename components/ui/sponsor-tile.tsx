"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export type Sponsor = {
  name: string;
  href: string;
  /** Path under /public. Falls back to a wordmark if absent or the file fails to load. */
  logo?: string;
  /** Artwork is light-coloured, so it needs a dark card rather than the light one. */
  darkSurface?: boolean;
  /**
   * Multiplier on the tier's base optical height. Logos differ in how much of their
   * frame the lettering occupies — a stacked two-line mark needs a taller frame than
   * a single-line wordmark to read at the same size — so this matches apparent type
   * size rather than bounding-box height.
   */
  scale?: number;
};

const tiers = {
  presenting: {
    vars: "[--logo-h:1.9rem] sm:[--logo-h:2.75rem]",
    card: "rounded-2xl p-8 sm:p-10",
    text: "text-2xl sm:text-3xl",
  },
  premier: {
    vars: "[--logo-h:1.65rem] sm:[--logo-h:2.35rem]",
    card: "rounded-2xl p-7 sm:p-9",
    text: "text-xl sm:text-2xl",
  },
  major: {
    vars: "[--logo-h:1.4rem] sm:[--logo-h:2rem]",
    card: "rounded-2xl p-7 sm:p-8",
    text: "text-lg sm:text-xl",
  },
  supporting: {
    vars: "[--logo-h:1.15rem] sm:[--logo-h:1.6rem]",
    card: "rounded-xl p-6",
    text: "text-base sm:text-lg",
  },
} as const;

export type SponsorTier = keyof typeof tiers;

export function SponsorTile({ sponsor, tier }: { sponsor: Sponsor; tier: SponsorTier }) {
  // A missing or broken file degrades to the wordmark rather than a broken-image icon.
  const [failed, setFailed] = useState(false);
  const t = tiers[tier];
  const scale = sponsor.scale ?? 1;

  return (
    <a
      href={sponsor.href}
      target="_blank"
      rel="noreferrer"
      aria-label={sponsor.name}
      className={cn(
        "flex items-center justify-center transition-transform duration-300 hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ph-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#060810]",
        sponsor.darkSurface
          ? "bg-[#111a2b] shadow-lg shadow-black/40 ring-1 ring-white/10"
          : "bg-[#f1f4f9] shadow-lg shadow-black/30 ring-1 ring-black/5",
        t.card,
        t.vars
      )}
    >
      {sponsor.logo && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          onError={() => setFailed(true)}
          style={{ height: `calc(var(--logo-h) * ${scale})` }}
          className="w-auto max-w-full object-contain"
        />
      ) : (
        <span
          className={cn(
            "text-center font-bold leading-tight",
            sponsor.darkSurface ? "text-white" : "text-[#0b1020]",
            t.text
          )}
        >
          {sponsor.name}
        </span>
      )}
    </a>
  );
}
