import { Globe, Instagram, Linkedin, Mail } from "lucide-react";

import { SectionBadge } from "@/components/ui/section-badge";

const contactLinks = [
  { icon: Mail, label: "soktp@mailbox.sc.edu", href: "mailto:soktp@mailbox.sc.edu", external: false },
  { icon: Globe, label: "ktpusc.com", href: "https://ktpusc.com", external: true },
  { icon: Instagram, label: "@ktpusc", href: "https://www.instagram.com/ktpusc", external: true },
  { icon: Linkedin, label: "KTP at USC", href: "https://www.linkedin.com/company/ktpusc", external: true },
];

const facts = [
  {
    title: "A professional technology fraternity",
    description:
      "Kappa Theta Pi is a co-ed organization built around technology, with chapters at universities across the country.",
  },
  {
    title: "Professional Development Team",
    description:
      "Our Professional Development (PD) Team ensures our members excel in the workforce through workshops, events like this, and industry connections!",
  },
  {
    title: "Students running it end to end",
    description:
      "PalmettoHacks is planned and staffed by chapter members. The people checking you in are the people who built the event.",
  },
];

export default function OrganizersSection() {
  return (
    <section id="organizers" className="relative overflow-hidden px-4 py-24" style={{ background: "#07091a" }}>
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-100 w-100 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 h-125 w-125 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative mx-auto max-w-5xl">
        {/* Identity */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <SectionBadge>Organizers</SectionBadge>

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-black text-[#60a5fa]">
            ΚΘΠ
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Kappa Theta Pi
            </h2>
            <p className="mt-2 text-sm text-white/50">
              PD Team · University of South Carolina
            </p>
          </div>

          <p className="leading-relaxed text-white/60">
            PalmettoHacks is organized by the Professional Development Team @ Kappa Theta
            Pi. We&apos;re students at USC who wanted a hackathon here, so we built
            one — and we answer every email that comes through the addresses below.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {contactLinks.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition hover:border-white/20 hover:text-white"
              >
                <Icon className="h-4 w-4 text-[#60a5fa]" aria-hidden />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Facts */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {facts.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-white/20 hover:bg-white/5"
            >
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
