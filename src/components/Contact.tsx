"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user's mail client or display confirmation
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
          <span>06.</span>
          <span className="uppercase tracking-widest">Contact</span>
          <div className="h-px bg-zinc-800 flex-1 ml-2 max-w-xs" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Get In Touch
        </h2>
        <p className="text-zinc-400 text-sm font-mono mt-2">
          Have an opportunity, project, or question? Feel free to reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Bento */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 card-hover-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                Direct Contact
              </span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-emerald-400 bg-zinc-800/70 px-2 py-1 rounded transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4 text-sm font-mono">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-emerald-950/60 border border-zinc-700/60 group-hover:border-emerald-500/40">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="truncate">{portfolioData.personal.email}</span>
              </a>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center gap-3 text-zinc-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-emerald-950/60 border border-zinc-700/60 group-hover:border-emerald-500/40">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{portfolioData.personal.phone}</span>
              </a>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="p-2 rounded-lg bg-zinc-800 border border-zinc-700/60">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
              Status & Availability
            </h4>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white">
                Available for Summer &apos;26 / &apos;27 Roles
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
              Seeking Data Analytics, Machine Learning, and Software Engineering internships and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 card-hover-border">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
              <h4 className="text-lg font-bold text-white">Message Ready!</h4>
              <p className="text-sm text-zinc-400 max-w-sm">
                Your email client was opened with your pre-filled inquiry. Thanks for getting in touch!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/70 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/70 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hey Gaurav, I saw your work and would love to discuss an opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border border-zinc-700/70 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] active:scale-95"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
