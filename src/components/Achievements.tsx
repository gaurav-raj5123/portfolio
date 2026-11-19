"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Trophy, Code, Award, Target, Users } from "lucide-react";

const getAchievementIcon = (iconName: string) => {
  switch (iconName) {
    case "trophy":
      return <Trophy className="w-5 h-5 text-amber-400" />;
    case "code":
      return <Code className="w-5 h-5 text-emerald-400" />;
    case "award":
      return <Award className="w-5 h-5 text-purple-400" />;
    case "target":
      return <Target className="w-5 h-5 text-cyan-400" />;
    case "users":
      return <Users className="w-5 h-5 text-emerald-400" />;
    default:
      return <Trophy className="w-5 h-5 text-emerald-400" />;
  }
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
          <span>05.</span>
          <span className="uppercase tracking-widest">Achievements & Leadership</span>
          <div className="h-px bg-zinc-800 flex-1 ml-2 max-w-xs" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Recognition & Leadership
        </h2>
        <p className="text-zinc-400 text-sm font-mono mt-2">
          Milestones across competitive programming, academics, athletics, and university leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.achievements.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 card-hover-border flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Row: Icon & Tag */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/60 group-hover:scale-110 transition-transform">
                {getAchievementIcon(item.iconName)}
              </div>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                {item.tag}
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-zinc-400 mb-3">
                {item.subtitle}
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
