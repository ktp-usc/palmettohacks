const collaborators = [
  {
    name: "Microsoft",
    description:
      "PalmettoHacks is held in collaboration with Microsoft. Their engineers will be on-site as mentors, running workshops on cloud and AI technologies throughout the event.",
    logo: (
      <svg viewBox="0 0 23 23" className="h-10 w-10" aria-label="Microsoft logo">
        <rect x="1" y="1" width="10" height="10" fill="#f25022" />
        <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
        <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
        <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
      </svg>
    ),
  },
];

const sponsors = [
  {
    name: "Capgemini",
    description:
      "Capgemini is a global leader in consulting, digital transformation, and technology services, helping organizations accelerate their business and technology journeys.",
    logo: (
      <svg viewBox="0 0 80 36" className="h-8 w-24" aria-label="Capgemini logo">
        <text
          x="0"
          y="28"
          fontFamily="Arial, sans-serif"
          fontWeight="900"
          fontSize="30"
          fill="#0070AD"
        >
          cap
        </text>
        <text
          x="40"
          y="28"
          fontFamily="Arial, sans-serif"
          fontWeight="900"
          fontSize="30"
          fill="#12ABDB"
        >
          g
        </text>
      </svg>
    ),
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-[#080808] py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/10 px-4 py-1.5 text-sm text-[#4ade80]">
            Our Partners
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Backed by Industry{" "}
            <span className="text-[#4ade80]">Leaders</span>
          </h2>
          <p className="max-w-xl text-white/60">
            PalmettoHacks is made possible through the generous support of our
            sponsor and the collaboration of industry professionals who share our
            commitment to empowering the next generation of technologists.
          </p>
        </div>

        {/* Industry Collaborators */}
        <div className="mt-16">
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            Industry Collaborator
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {collaborators.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    {c.logo}
                  </div>
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                    Collaborator
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
        </div>

        {/* Sponsors */}
        <div className="mt-12">
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            Sponsor
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    {s.logo}
                  </div>
                  <span className="rounded-full border border-[#4ade80]/40 bg-[#4ade80]/10 px-3 py-1 text-xs font-semibold text-[#4ade80]">
                    Sponsor
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{s.name}</h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/10 p-8 text-center">
          <p className="text-white/50 text-sm">
            Interested in sponsoring PalmettoHacks?
          </p>
          <a
            href="mailto:ktp@usc.edu"
            className="text-[#4ade80] text-sm font-medium hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
