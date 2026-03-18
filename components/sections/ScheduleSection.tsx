const days: { label: string; events: { time: string; title: string; description: string; type: "main" | "food" | "workshop" | "judging" }[] }[] = [
  {
    label: "Day 1 — Kickoff",
    events: [
      { time: "5:00 PM", title: "Check-In Opens", description: "Get your badge, swag bag, and meet your fellow hackers.", type: "main" },
      { time: "6:00 PM", title: "Opening Ceremony", description: "Welcome remarks from KTP leadership, Microsoft, and Capgemini.", type: "main" },
      { time: "7:00 PM", title: "Hacking Begins", description: "Form your teams and start building!", type: "main" },
      { time: "7:30 PM", title: "Dinner", description: "Fuel up for the long night ahead.", type: "food" },
      { time: "8:00 PM", title: "Workshop: Azure AI", description: "Hands-on intro to Azure AI services with Microsoft engineers.", type: "workshop" },
      { time: "9:30 PM", title: "Workshop: Agile in Practice", description: "How Capgemini teams ship great products fast.", type: "workshop" },
      { time: "11:00 PM", title: "Midnight Snacks", description: "Late-night fuel to keep the ideas flowing.", type: "food" },
    ],
  },
  {
    label: "Day 2 — Crunch Time",
    events: [
      { time: "8:00 AM", title: "Breakfast", description: "Rise, shine, and eat before the final push.", type: "food" },
      { time: "9:00 AM", title: "Mentorship Hours", description: "Get 1-on-1 time with mentors from Microsoft and Capgemini.", type: "workshop" },
      { time: "12:00 PM", title: "Lunch", description: "Midday recharge.", type: "food" },
      { time: "4:00 PM", title: "Submissions Due", description: "Submit your project on Devpost before the deadline!", type: "main" },
      { time: "4:30 PM", title: "Judging Begins", description: "Demo your project to our panel of industry judges.", type: "judging" },
      { time: "6:30 PM", title: "Closing Ceremony & Awards", description: "Winners announced, prizes awarded. Celebrate your hard work!", type: "main" },
    ],
  },
];

const typeColors: Record<string, string> = {
  main: "bg-[#4ade80]/20 text-[#4ade80] border-[#4ade80]/30",
  food: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  workshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  judging: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const typeLabels: Record<string, string> = {
  main: "Event",
  food: "Food",
  workshop: "Workshop",
  judging: "Judging",
};

export default function ScheduleSection() {
  return (
    <section id="schedule" className="bg-black py-24 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/10 px-4 py-1.5 text-sm text-[#4ade80]">
            Schedule
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            24 Hours of{" "}
            <span className="text-[#4ade80]">Innovation</span>
          </h2>
          <p className="max-w-xl text-white/60">
            From the opening ceremony to the final demo, every moment of
            PalmettoHacks is packed with learning and building.
          </p>
        </div>

        {/* Day columns */}
        <div className="flex flex-col gap-12">
          {days.map((day) => (
            <div key={day.label}>
              <h3 className="mb-6 text-lg font-semibold text-white/80 uppercase tracking-widest text-sm">
                {day.label}
              </h3>
              <div className="flex flex-col gap-3">
                {day.events.map((event, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    {/* Time */}
                    <div className="w-20 shrink-0 text-sm font-mono text-white/40 pt-0.5">
                      {event.time}
                    </div>
                    {/* Content */}
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-white">{event.title}</span>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${typeColors[event.type]}`}
                        >
                          {typeLabels[event.type]}
                        </span>
                      </div>
                      <p className="text-sm text-white/50">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
