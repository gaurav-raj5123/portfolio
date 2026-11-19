"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
            <span>02.</span>
            <span className="uppercase tracking-widest">Experience & Education</span>
            <div className="h-px bg-zinc-800 flex-1 ml-2 max-w-xs" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Where I&apos;ve Been
          </h2>
        </div>

        {/* Tab Toggle */}
        <div className="inline-flex p-1 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === "experience"
                ? "bg-emerald-500 text-black font-semibold shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === "education"
                ? "bg-emerald-500 text-black font-semibold shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>
        </div>
      </div>

      {/* Experience Tab Content */}
      {activeTab === "experience" && (
        <div className="space-y-6">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 card-hover-border relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-emerald-400 font-mono text-sm font-medium mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 bg-zinc-800/80 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-zinc-800/80 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <ul className="space-y-2.5 mb-6 text-zinc-300 text-sm leading-relaxed">
                {exp.description.map((item, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-300 border border-zinc-700/50"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education Tab Content */}
      {activeTab === "education" && (
        <div className="relative border-l-2 border-zinc-800 ml-4 pl-6 space-y-10">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.5)]" />

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 card-hover-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-zinc-300 font-mono text-sm mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1 bg-zinc-800/80 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {edu.period}
                    </span>
                    <span className="bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-md font-semibold">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-mono text-zinc-400 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{edu.location}</span>
                </div>

                {edu.highlights && (
                  <div className="mt-3 text-xs sm:text-sm text-zinc-400 border-t border-zinc-800/60 pt-3">
                    {edu.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="leading-relaxed">
                        {h}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
