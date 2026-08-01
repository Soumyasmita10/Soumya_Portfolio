import { useEffect } from "react";
import About from "@/components/portfolio/About";
import Achievements from "@/components/portfolio/Achievements";
import BackToTop from "@/components/portfolio/BackToTop";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import CursorGlow from "@/components/portfolio/CursorGlow";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";
import Hero from "@/components/portfolio/Hero";
import Loader from "@/components/portfolio/Loader";
import Navbar from "@/components/portfolio/Navbar";
import ParticlesBackground from "@/components/portfolio/ParticlesBackground";
import Projects from "@/components/portfolio/Projects";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Skills from "@/components/portfolio/Skills";

export default function Index() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}
