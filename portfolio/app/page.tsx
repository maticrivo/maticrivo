import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import SoftSkills from "@/components/SoftSkills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <SoftSkills />
      <Projects />
      <Contact />
    </main>
  );
}
