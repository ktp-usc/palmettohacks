import { ArrowRight } from "lucide-react";

import { SectionBadge } from "@/components/ui/section-badge";
import { SponsorTile, type Sponsor } from "@/components/ui/sponsor-tile";

// `scale` equalises apparent lettering size; see the note on Sponsor.scale.
const presenting: Sponsor = {
  name: "Boyd Innovation Center",
  href: "https://boydinnovation.org",
  logo: "/logos/biclogo.png",
  scale: 1.5,
  // Supplied artwork is white + green, which would vanish on a light card.
  darkSurface: true,
};

const majorSponsors: Sponsor[] = [
  { name: "QNX", href: "https://blackberry.qnx.com", logo: "/logos/qnxlogo.png", scale: 1.15 },
  {
    name: "Blue Cross Blue Shield of South Carolina",
    href: "https://www.southcarolinablues.com",
    logo: "/logos/bcbslogo.png",
    scale: 1.85,
  },
];

const supportingSponsors: Sponsor[] = [
  { name: "CVS Health", href: "https://www.cvshealth.com", logo: "/logos/cvslogo.svg", scale: 1.4 },
  {
    name: "Dominion Energy",
    href: "https://www.dominionenergy.com",
    logo: "/logos/dominionlogo.webp",
    scale: 2.3,
  },
  { name: "Capgemini", href: "https://www.capgemini.com", logo: "/logos/capgeminilogo.png", scale: 1.45 },
];

export default function SponsorsSection() {
  return (
    <section id="partners" className="relative overflow-hidden px-4 py-24" style={{ background: "#060810" }}>
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.05) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>Our Partners</SectionBadge>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Powered by Our <span className="text-[#60a5fa]">Sponsors</span>
          </h2>
          <p className="text-white/60">
            PalmettoHacks is free because these teams pay for it. They&apos;ll be
            on site with mentors, challenges, and people who are hiring.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {/* Presenting */}
          <div className="mx-auto max-w-xl">
            <SponsorTile sponsor={presenting} tier="presenting" />
          </div>

          {/* Major */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
            {majorSponsors.map((s) => (
              <SponsorTile key={s.name} sponsor={s} tier="major" />
            ))}
          </div>

          {/* Supporting */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {supportingSponsors.map((s) => (
              <SponsorTile key={s.name} sponsor={s} tier="supporting" />
            ))}
          </div>
        </div>

        {/* Become a partner */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/3 p-6 text-center sm:flex-row sm:p-8 sm:text-left">
          <div>
            <h3 className="font-semibold text-white">Interested in sponsoring?</h3>
            <p className="mt-1 text-sm text-white/50">
              Put your team in front of hundreds of student engineers at USC.
            </p>
          </div>
          <a
            href="mailto:soktp@mailbox.sc.edu"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#60a5fa]/30 bg-[#60a5fa]/10 px-5 py-2.5 text-sm font-medium text-[#60a5fa] transition hover:bg-[#60a5fa]/20"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
