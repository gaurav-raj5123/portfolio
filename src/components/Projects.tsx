"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github, FolderGit2, CheckCircle2 } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
          <span>03.</span>
          <span className="uppercase tracking-widest">Projects</span>
          <div className="h-px bg-zinc-800 flex-1 ml-2 max-w-xs" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Things I&apos;ve Built
        </h2>
        <p className="text-zinc-400 text-sm font-mono mt-2">
          Production systems, AI vector retrieval pipelines, and graph-based scheduling engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 card-hover-border relative group overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 group-hover:bg-emerald-500/15 rounded-bl-full pointer-events-none transition-all duration-300" />

            <div>
              {/* Header: Category Badge & Links */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-zinc-400">
                  <a
                    href={project.github || "https://github.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Timeline */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {project.period}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6 text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {project.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-300 border border-zinc-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
