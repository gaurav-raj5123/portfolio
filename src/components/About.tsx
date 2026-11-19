"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Briefcase, MapPin, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
          <span>01.</span>
          <span className="uppercase tracking-widest">About</span>
          <div className="h-px bg-zinc-800 flex-1 ml-2 max-w-xs" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {portfolioData.about.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Card / Avatar Column */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative group w-52 h-52 sm:w-60 sm:h-60 rounded-2xl bg-zinc-900 border border-zinc-800 p-2 overflow-hidden card-hover-border">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-cyan-500/10 opacity-70 group-hover:opacity-100 transition-opacity" />
            
            {/* Inner Avatar Graphic */}
            <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 flex flex-col items-center justify-center border border-zinc-800/80">
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <span className="font-mono text-3xl font-extrabold text-emerald-400">
                  {portfolioData.personal.monogram}
                </span>
              </div>
              <span className="font-mono text-sm font-semibold text-zinc-200">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-zinc-400 font-mono mt-0.5">
                DTU IT &apos;27
              </span>
            </div>

            {/* Corner Decorative Tech Badges */}
            <div className="absolute bottom-3 right-3 bg-zinc-900/90 border border-emerald-500/40 text-[10px] font-mono px-2 py-0.5 rounded text-emerald-300 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DTU
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* Bio & Bento Stats Column */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
            <p className="text-lg font-medium text-white">
              {portfolioData.about.heading}
            </p>
            {portfolioData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-zinc-400">
                {p}
              </p>
            ))}
          </div>

          {/* 4 Bento Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 card-hover-border">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <GraduationCap className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-bold text-white">8.55</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">CGPA @ DTU</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 card-hover-border">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-bold text-white">2027</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">Graduation</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 card-hover-border">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Briefcase className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-bold text-white">Intern</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">Data Analyst</span>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 card-hover-border">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-bold text-white">Delhi</span>
              </div>
              <span className="text-xs font-mono text-zinc-400">Location (IN)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
