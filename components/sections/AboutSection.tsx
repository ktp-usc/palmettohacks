const stats = [
  { value: "12hrs", label: "Building Time" },
  { value: "100+", label: "Builders" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 px-4" style={{ background: "#07091a" }}>
      {/* Background glows */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-10 h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="mx-auto max-w-6xl relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/10 px-4 py-1.5 text-sm text-[#60a5fa]">
              About PalmettoHacks
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Where Ideas Become{" "}
              <span className="text-[#60a5fa]">Reality</span>
            </h2>

            <p className="text-white/60 leading-relaxed text-base">
              PalmettoHacks is a premier 12-hour hackathon hosted by{" "}
              <span className="text-white font-medium">Kappa Theta Pi</span> — the
              nation&apos;s leading professional technology fraternity. We bring
              together students and industry professionals to collaborate, learn,
              and build projects that push the boundaries of technology.
            </p>

            <p className="text-white/60 leading-relaxed text-base">
              Whether you&apos;re an experienced engineer or picking up your first
              programming language, PalmettoHacks is the place to grow.
              With mentors from{" "}
              <span className="text-white font-medium">Microsoft</span> and{" "}
              <span className="text-white font-medium">Capgemini</span>,
              world-class workshops, and exciting prizes, you&apos;ll leave inspired
              and leveled up.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Open to All Skill Levels", "Free to Attend", "Meals Provided"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <span className="text-4xl font-extrabold text-[#60a5fa]">
                  {s.value}
                </span>
                <span className="text-sm text-white/50">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* KTP blurb */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            {/* KTP logo placeholder */}
            <div className="shrink-0 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-black text-[#60a5fa]">
              ΚΘΠ
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                About Kappa Theta Pi
              </h3>
              <p className="mt-2 text-white/60 leading-relaxed">
                Kappa Theta Pi (KTP) is America&apos;s leading professional technology
                fraternity, dedicated to bridging the gap between academia and
                industry. With chapters across the nation, KTP empowers students
                to become the next generation of tech leaders through networking,
                mentorship, and hands-on projects like PalmettoHacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
