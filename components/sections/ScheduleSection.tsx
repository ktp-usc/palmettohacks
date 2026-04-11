const schedule: { time: string; title: string; description: string }[] = [
  { time: "8:30 AM",  title: "Check-In Opens",           description: "Get your badge, swag bag, and meet your fellow hackers."                   },
  { time: "9:00 AM",  title: "Opening Ceremony",          description: "Welcome remarks from KTP leadership and our industry partners."            },
  { time: "9:30 AM",  title: "Building Begins",            description: "Form your teams and start building!"                                     },
  { time: "7:30 PM",  title: "Submissions Due",           description: "Submit your project on Devpost before the deadline!"                      },
  { time: "7:30 PM",  title: "Judging Begins",            description: "Demo your project to our panel of industry judges."                       },
  { time: "8:30 PM",  title: "Closing Ceremony & Awards", description: "Winners announced, prizes awarded. Congratulations to all participants!" },
  { time: "9:00 PM",  title: "Event Ends",                description: "Thanks for hacking with us. See you next year!"                          },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative overflow-hidden py-24 px-4" style={{ background: "#07091a" }}>
      {/* Background glows */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-125 w-125 rounded-full"
        style={{ background: "radial-gradient(ellipse at top right, rgba(96,165,250,0.06) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div aria-hidden className="pointer-events-none absolute left-0 bottom-0 h-100 w-100 rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.05) 0%, transparent 65%)", filter: "blur(70px)" }} />

      <div className="mx-auto max-w-4xl relative">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/10 px-4 py-1.5 text-sm text-[#60a5fa]">
            Schedule
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            12 Hours of{" "}
            <span className="text-[#60a5fa]">Innovation</span>
          </h2>
          <p className="max-w-xl text-white/60">
            Saturday, April 11, 2026 · 9 AM – 9 PM. From the opening ceremony
            to the final demo, every moment of PalmettoHacks is packed with
            learning and building.
          </p>
        </div>

        {/* Events */}
        <div className="flex flex-col gap-3">
          {schedule.map((event, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Time */}
              <div className="w-24 shrink-0 text-sm font-mono text-white/40 pt-0.5">
                {event.time}
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-white">{event.title}</span>
                </div>
                <p className="text-sm text-white/50">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
