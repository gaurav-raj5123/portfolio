"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 py-12 px-4 bg-[#080808]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-1 font-mono text-base font-bold text-white group"
          >
            <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">&lt;</span>
            <span className="text-emerald-400">{portfolioData.personal.monogram}</span>
            <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">/&gt;</span>
          </a>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <p className="text-xs font-mono text-zinc-400 text-center sm:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 p-2 rounded-lg bg-zinc-800/70 hover:bg-zinc-700 text-zinc-400 hover:text-emerald-400 transition-all border border-zinc-700/50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
