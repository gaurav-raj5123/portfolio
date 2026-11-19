import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Meteors } from "@/components/Meteors";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-100 overflow-hidden bg-grid selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Dynamic Shooting Stars / Meteors Background */}
      <Meteors number={25} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-12">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
