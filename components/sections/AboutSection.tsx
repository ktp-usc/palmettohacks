import { SectionBadge } from "@/components/ui/section-badge";
import {
  BadgeDollarSign,
  GraduationCap,
  Trophy,
  UsersRound,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Free to attend",
    description: "No ticket, no entry fee. Bring a laptop and show up.",
  },
  {
    icon: UtensilsCrossed,
    title: "Every meal covered",
    description: "Lunch, dinner, a midnight snack, and breakfast are on us.",
  },
  {
    icon: GraduationCap,
    title: "Built for beginners",
    description: "Any major, any year, any skill level. First hackathon welcome.",
  },
  {
    icon: UsersRound,
    title: "Teams of up to 4",
    description: "Come with friends or come alone — we run team formation on site.",
  },
  {
    icon: Wrench,
    title: "Mentors in the room",
    description: "KTP members and industry mentors on hand for all 24 hours.",
  },
  {
    icon: Trophy,
    title: "Prizes on the line",
    description: "Awards for the top teams, judged by a panel of industry judges.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24" style={{ background: "#07091a" }}>
      {/* Background glows */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-125 w-125 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-10 h-100 w-100 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>About PalmettoHacks</SectionBadge>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Where Ideas Become <span className="text-[#60a5fa]">Reality</span>
          </h2>

          <p className="leading-relaxed text-white/60">
            PalmettoHacks is a 24-hour hackathon hosted by{" "}
            <span className="font-medium text-white">Kappa Theta Pi</span> at the
            University of South Carolina. You&apos;ll form a team, pick an idea, and
            build it into something you can demo — all in one weekend, with mentors,
            workshops, and food along the way.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-white/20 hover:bg-white/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#60a5fa]/20 bg-[#60a5fa]/10">
                <Icon className="h-5 w-5 text-[#60a5fa]" aria-hidden />
              </span>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
