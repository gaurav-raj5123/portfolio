"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monospace Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white group"
        >
          <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">&lt;</span>
          <span className="text-emerald-400 font-extrabold">{portfolioData.personal.monogram}</span>
          <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">/&gt;</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-emerald-400 bg-emerald-950/40 font-semibold"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] active:scale-95"
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg bg-zinc-900/80 border border-zinc-800"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-emerald-400 transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 text-xs">#</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center text-xs font-mono font-bold px-4 py-3 rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 transition-colors"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
