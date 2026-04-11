export default function MLHSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4" style={{ background: "#07091a" }}>
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-200 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.04) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="mx-auto max-w-4xl relative flex flex-col items-center gap-8 text-center">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/10 px-4 py-1.5 text-sm text-[#60a5fa]">
          MLH Recognized
        </div>

        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-10 py-10 max-w-2xl w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg"
            alt="Major League Hacking"
            className="h-14 w-auto"
          />
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-2xl font-bold text-white">An Official MLH Hack Day</h3>
            <p className="text-white/60 leading-relaxed">
              PalmettoHacks is recognized by Major League Hacking (MLH), the official student hackathon league. MLH powers over 200 hackathons worldwide and supports student hackers with resources, mentorship, and community.
            </p>
            <a
              href="https://events.mlh.io/events/13993-palmettohacks"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
            >
              View on MLH →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}