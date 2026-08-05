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
            Sponsors{" "}
            <span className="text-[#60a5fa]">Coming Soon</span>
          </h2>
          <p className="max-w-xl text-white/60">
            PalmettoHacks is made possible through the collaboration of industry
            professionals who share our commitment to empowering the next
            generation of technologists. Our 2026 sponsors and partners will be
            announced soon.
          </p>
        </div>

        {/* Placeholder grid until the 2026 lineup is announced */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-3xl border border-dashed border-white/10 bg-white/3 p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl font-bold text-white/25">
                  ?
                </div>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/40">
                  TBD
                </span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white/40">
                  To Be Announced
                </h4>
                <p className="mt-2 text-sm text-white/35 leading-relaxed">
                  This spot is reserved for a PalmettoHacks 2026 sponsor. Check
                  back soon.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/10 p-8 text-center">
          <p className="text-white/50 text-sm">
            Interested in sponsoring PalmettoHacks 2026?
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
