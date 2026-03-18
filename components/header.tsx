"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/60 border-b border-white/5">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2 font-bold text-white text-lg">
        <span className="text-[#4ade80]">Palmetto</span>Hacks
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
        <Button
          size="sm"
          className="bg-[#4ade80] text-black font-semibold hover:bg-[#22c55e]"
        >
          Register
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white/70 hover:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
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
        <div className="absolute inset-x-0 top-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
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
          <Button
            size="sm"
            className="w-fit bg-[#4ade80] text-black font-semibold hover:bg-[#22c55e]"
          >
            Register
          </Button>
        </div>
      )}
    </header>
  );
}