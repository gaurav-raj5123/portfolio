"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Download, Github, Linkedin, Mail, Phone, Terminal, Award, Code2, Sparkles } from "lucide-react";

export const Hero = () => {
  const roles = portfolioData.personal.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? fullText.substring(0, displayText.length - 1)
            : fullText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[200px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Terminal Greeting Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-sm">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-zinc-500">&gt;</span>
          <span>HELLO, WORLD. I&apos;M</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Big Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-4">
          <span className="hover:text-emerald-400 transition-colors duration-300">
            {portfolioData.personal.name}
          </span>
        </h1>

        {/* Typewriter Rotating Roles */}
        <div className="h-10 sm:h-12 flex items-center justify-center font-mono text-lg sm:text-2xl text-emerald-400 mb-6">
          <span className="text-zinc-500 mr-2">$</span>
          <span>{displayText}</span>
          <span className="w-2.5 h-6 bg-emerald-400 ml-1 inline-block animate-pulse" />
        </div>

        {/* Bio Subtitle */}
        <p className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 font-sans">
          Information Technology undergraduate at{" "}
          <span className="text-zinc-200 font-medium">Delhi Technological University (DTU)</span>.
          Passionate about Data Analytics, high-performance graph algorithms, and production-grade AI systems.
        </p>

        {/* Highlight Badges (Competitive Programming, JEE, NPTEL) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>500+ Algorithmic Problems</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Top 1% NPTEL · IIT Madras</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>98.6%ile JEE Mains (99.9%ile Physics)</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-mono text-sm font-semibold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:shadow-[0_0_25px_rgba(34,197,94,0.55)] active:scale-95"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-mono text-sm font-medium hover:bg-zinc-800 transition-all active:scale-95"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Social Links */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${portfolioData.personal.phone}`}
            className="p-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
