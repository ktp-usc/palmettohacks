const stats = [
  { value: "24hrs", label: "Hacking Time" },
  { value: "200+", label: "Hackers" },
  { value: "$5k+", label: "In Prizes" },
  { value: "10+", label: "Workshops" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-black py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/10 px-4 py-1.5 text-sm text-[#4ade80]">
              About PalmettoHacks
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Where Ideas Become{" "}
              <span className="text-[#4ade80]">Reality</span>
            </h2>

            <p className="text-white/60 leading-relaxed text-base">
              PalmettoHacks is a premier 24-hour hackathon hosted by{" "}
              <span className="text-white font-medium">Kappa Theta Pi</span> — the
              nation&apos;s leading professional technology fraternity. We bring
              together students from across the country to collaborate, learn, and
              build projects that push the boundaries of technology.
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
              {["Open to All Skill Levels", "Free to Attend", "Meals Provided", "Swag & Prizes"].map(
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
                <span className="text-4xl font-extrabold text-[#4ade80]">
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
            <div className="shrink-0 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-black text-[#4ade80]">
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
