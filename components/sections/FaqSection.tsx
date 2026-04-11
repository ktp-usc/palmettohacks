"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who can participate in PalmettoHacks?",
    a: "PalmettoHacks is open to all university and college students, regardless of year or major, as well as industry professionals. Whether you're a freshman or a seasoned professional, all skill levels are welcome. You don't need to be a CS major to join!",
  },
  {
    q: "Is there a registration fee?",
    a: "PalmettoHacks is completely free to attend. We cover meals for all registered participants. Just bring your laptop and your ideas!",
  },
  {
    q: "Do I need a team to register?",
    a: "You can register as an individual or as part of a team. Teams can have up to 4 members. If you don't have a team yet, don't worry, we'll host a team formation event at the start of the hackathon so you can find collaborators.",
  },
  {
    q: "What should I bring?",
    a: "Bring your laptop, charger, and any water/snacks you want. We'll provide meals, snacks, Wi-Fi, and a comfortable working environment. PalmettoHacks runs from 9 AM to 9 PM on a single day, so no overnight stay is needed.",
  },
  {
    q: "What kind of projects can I build?",
    a: "We'll share challenge themes from our collaborators and sponsors once the event begins. You can build pretty much anything, as long as you're creative!",
  },
  {
    q: "Will there be mentors available?",
    a: "Yes! We'll have mentors from Microsoft, Capgemini, and KTP on-site throughout the hackathon to help with technical challenges, ideation, and project scoping.",
  },
  {
    q: "How will projects be judged?",
    a: "Projects are evaluated on innovation, technical feasibility, design, and real-world impact. Each team will give a live demo to a panel of judges from our partner companies.",
  },
  {
    q: "What are the prizes?",
    a: "We'll have prizes for the overall top teams after the judging completes. Prize details will be announced closer to the event, but they may include both monetary and mentorship-based prizes.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden py-24 px-4" style={{ background: "#060810" }}>
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-100 w-175 rounded-full"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(96,165,250,0.06) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div aria-hidden className="pointer-events-none absolute left-[10%] top-[20%] h-75 w-75 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="mx-auto max-w-3xl relative">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#60a5fa]/20 bg-[#60a5fa]/10 px-4 py-1.5 text-sm text-[#60a5fa]">
            FAQ
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Common{" "}
            <span className="text-[#60a5fa]">Questions</span>
          </h2>
          <p className="max-w-xl text-white/60">
            Everything you need to know about PalmettoHacks. If you have a
            question that isn&apos;t answered here, feel free to reach out!
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/3 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white hover:bg-white/3 transition"
                aria-expanded={open === i}
              >
                <span className="font-medium">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-[#60a5fa] transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center text-white/50 text-sm">
          Still have questions?{" "}
          <a href="mailto:soktp@mailbox.sc.edu" className="text-[#60a5fa] hover:underline">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
