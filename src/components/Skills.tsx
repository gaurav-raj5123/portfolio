"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  Server,
  Database,
  Wrench,
  LineChart,
} from "lucide-react";

const getCategoryIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Code2 className="w-4 h-4 text-emerald-400" />;
    case 1:
      return <Cpu className="w-4 h-4 text-emerald-400" />;
    case 2:
      return <Server className="w-4 h-4 text-emerald-400" />;
    case 3:
      return <Database className="w-4 h-4 text-emerald-400" />;
    case 4:
      return <Wrench className="w-4 h-4 text-emerald-400" />;
    default:
      return <LineChart className="w-4 h-4 text-emerald-400" />;
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
          <span>04.</span>
          <span className="uppercase tracking-widest">Skills</span>
          <div className="h-px bg-zinc-800 flex-1 ml-2 max-w-xs" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Tech Stack & Expertise
        </h2>
        <p className="text-zinc-400 text-sm font-mono mt-2">
          Core competencies across software engineering, data systems, and machine learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 card-hover-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="font-mono text-sm font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-700/60 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
