"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const registrationUrl = "https://forms.gle/sx6Gqe11G7ftpRHK8";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Partners", href: "#partners" },
  { label: "Organizers", href: "#organizers" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Right padding keeps the Register CTA clear of the fixed MLH trust badge.
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-black/60 py-4 pl-6 pr-6 backdrop-blur-md md:pr-44">
      {/* Logo */}
      <a href="#" className="flex items-center text-lg font-bold text-white">
        <span className="text-[#60a5fa]">Palmetto</span>Hacks
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div className="hidden md:flex">
        <Button asChild size="sm" className="bg-ph-yellow text-black font-semibold hover:bg-ph-yellow-bright">
          <a href={registrationUrl} target="_blank" rel="noreferrer">
            Register Now
          </a>
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white/70 hover:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-fit bg-ph-yellow text-black font-semibold hover:bg-ph-yellow-bright">
            <a href={registrationUrl} target="_blank" rel="noreferrer">
              Register Now
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
