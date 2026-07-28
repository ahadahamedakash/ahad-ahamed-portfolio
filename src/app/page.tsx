import Hero from "@/components/sections/Hero";
import TheArc from "@/components/sections/TheArc";
import ProblemSolver from "@/components/sections/ProblemSolver";
import TechMarquee from "@/components/ui/TechMarquee";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <TheArc />
      <Experience />
      <Skills />
      <Projects />
      <ProblemSolver />
      <TechMarquee />
      <Contact />
    </main>
  );
}
