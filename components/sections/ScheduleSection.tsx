import { SectionBadge } from "@/components/ui/section-badge";

type ScheduleEvent ={ time: string; title: string; description: string; highlight?: boolean };

const days: { day: string; date: string; events: ScheduleEvent[] }[] = [
  {
    day: "Saturday",
    date: "October 10",
    events: [
      { time: "9:00 AM",  title: "Check-In & Opening Ceremony", description: "Grab your badge and swag bag, then hear welcome remarks from KTP leadership." },
      { time: "10:00 AM", title: "Building Begins",             description: "Form your teams and start building. The 24-hour clock starts now.", highlight: true },
      { time: "12:00 PM", title: "CVS Health Workshop",         description: "A hands-on session on cloud engineering, led by CVS Health."                  },
      { time: "1:00 PM",  title: "Lunch",                       description: "Refuel and network with mentors and fellow hackers."                          },
      { time: "7:00 PM",  title: "Dinner",                      description: "Take a break, eat, and regroup with your team."                               },
    ],
  },
  {
    day: "Sunday",
    date: "October 11",
    events: [
      { time: "12:00 AM", title: "Midnight Snack",            description: "Late-night fuel and games to keep the energy up."                  },
      { time: "8:00 AM",  title: "Breakfast",                  description: "Coffee and breakfast before the final push."                       },
      { time: "10:00 AM", title: "Submissions Due",            description: "Submit your project on Devpost before the deadline.", highlight: true },
      { time: "10:00 AM", title: "Judging Begins",             description: "Demo your project to our panel of industry judges."                },
      { time: "11:00 AM", title: "Closing Ceremony & Awards",  description: "Winners announced, prizes awarded, and the event wraps."           },
    ],
  },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative overflow-hidden px-4 py-24" style={{ background: "#07091a" }}>
      {/* Background glows */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-125 w-125 rounded-full"
        style={{ background: "radial-gradient(ellipse at top right, rgba(96,165,250,0.06) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(139,92,246,0.05) 0%, transparent 65%)", filter: "blur(70px)" }} />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <SectionBadge>Schedule</SectionBadge>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            24 Hours of <span className="text-[#60a5fa]">Innovation</span>
          </h2>
          <p className="text-white/60">
            Doors open Saturday morning and the event wraps Sunday midday.
            You&apos;re welcome to head home to sleep and come back — plenty of
            people do.
          </p>
        </div>

        {/* Two-day timeline */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {days.map(({ day, date, events }) => (
            <div key={day} className="flex flex-col gap-5">
              <div className="flex items-baseline gap-3 border-b border-white/10 pb-3">
                <h3 className="text-xl font-bold text-white">{day}</h3>
                <span className="text-sm text-white/40">{date}</span>
              </div>

              <ol className="relative flex flex-col gap-6 pl-6">
                {/* Timeline spine */}
                <span
                  aria-hidden
                  className="absolute bottom-2 left-[3px] top-2 w-px bg-gradient-to-b from-[#60a5fa]/40 via-white/10 to-transparent"
                />
                {events.map((event) => (
                  <li key={event.title} className="relative flex gap-3">
                    <span
                      aria-hidden
                      className={`absolute -left-6 top-[9px] h-[7px] w-[7px] rounded-full ${
                        event.highlight ? "bg-ph-yellow" : "bg-[#60a5fa]/50"
                      }`}
                    />
                    {/* Fixed-width column so titles line up despite variable time widths. */}
                    <span className="w-[4.5rem] shrink-0 text-right font-mono text-xs leading-6 text-white/40">
                      {event.time}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium leading-6 text-white">{event.title}</span>
                      <p className="text-sm leading-relaxed text-white/50">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-white/30">
          Schedule is tentative and subject to change. Registered participants get
          the final version by email.
        </p>
      </div>
    </section>
  );
}
