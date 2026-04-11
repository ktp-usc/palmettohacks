const collaborators = [
  {
    name: "Microsoft",
    description:
      "PalmettoHacks is held in collaboration with Zach Oxendine of Microsoft. He will be on-site during the hackathon to mentor students and judge projects.",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/logos/microsoft.svg" alt="Microsoft" className="h-10 w-10" />
    ),
    badge: "Collaborator",
    badgeClass: "border-[#60a5fa]/40 bg-[#60a5fa]/10 text-[#60a5fa]",
  },
  {
    name: "Capgemini",
    description:
      "Capgemini is a global leader in consulting, digital transformation, and technology services, helping organizations accelerate their business and technology journeys.",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/logos/capgemini.svg" alt="Capgemini" className="h-10 w-10 rounded-xl" />
    ),
    badge: "Partner",
    badgeClass: "border-[#60a5fa]/40 bg-[#60a5fa]/10 text-[#60a5fa]",
  },
  {
    name: "SC Department of Health and Human Services",
    description:
      "The South Carolina Department of Health and Human Services (SCDHHS) administers the state's Medicaid program and works to improve the health and well-being of South Carolinians through innovative programs and partnerships.",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/logos/scdhhs.jpg" alt="SCDHHS" className="h-10 w-10 rounded-xl" />
    ),
    badge: "Partner",
    badgeClass: "border-[#60a5fa]/40 bg-[#60a5fa]/10 text-[#60a5fa]",
  },
  {
    name: "USC Division of Information Technology",
    description:
      "The University of South Carolina's Division of Information Technology (DoIT) provides the technology infrastructure and services that power the university, supporting students, faculty, and staff across the UofSC system.",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/logos/doit.jpg" alt="USC DoIT" className="h-10 w-10 rounded-xl" />
    ),
    badge: "Sponsor",
    badgeClass: "border-[#60a5fa]/40 bg-[#60a5fa]/10 text-[#60a5fa]",
  },
];

export default function SponsorsSection() {
  return (
    <section id="partners" className="relative overflow-hidden py-24 px-4" style={{ background: "#060810" }}>
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-200 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.05) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="mx-auto max-w-5xl relative">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/10 px-4 py-1.5 text-sm text-[#60a5fa]">
            Our Partners
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Backed by Industry{" "}
            <span className="text-[#60a5fa]">Leaders</span>
          </h2>
          <p className="max-w-xl text-white/60">
            PalmettoHacks is made possible through the collaboration of industry
            professionals who share our commitment to empowering the next
            generation of technologists.
          </p>
        </div>

        {/* Partners grid - side by side */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {collaborators.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/3 p-8 transition hover:border-white/20 hover:bg-white/6"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  {c.logo}
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${c.badgeClass}`}>
                  {c.badge}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">{c.name}</h4>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/10 p-8 text-center">
          <p className="text-white/50 text-sm">
            Interested in partnering with PalmettoHacks?
          </p>
          <a
            href="mailto:soktp@mailbox.sc.edu"
            className="text-[#60a5fa] text-sm font-medium hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
