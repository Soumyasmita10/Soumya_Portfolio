import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { PROFILE, TYPING_ROLES } from "@/data/portfolio";
import { useTypewriter } from "@/hooks/use-typewriter";

const RESUME_URL =
  "https://cdn.builder.io/o/assets%2F4678ea43c32345ab866c38b668a08375%2Fbe3a44b3313e4947bc526ce2eaf3c3ae?alt=media&token=78e8e9ab-287a-4966-ac88-7dd1834dccb9&apiKey=4678ea43c32345ab866c38b668a08375";

export default function Hero() {
  const typed = useTypewriter(TYPING_ROLES);


  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-neon-blue/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-neon-purple/20 blur-[100px]" />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow mb-4">Welcome to my portfolio</p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
            {PROFILE.title}
          </p>

          <div className="mt-4 flex h-8 items-center font-display text-xl font-semibold text-neon-blue sm:text-2xl">
            <span>{typed}</span>
            <span className="ml-1 inline-block h-6 w-[3px] animate-blink bg-neon-purple" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {PROFILE.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={RESUME_URL}
              download="A-Soumya-Smita-Resume.docx"
              className="btn-neon"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-neon"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-neon"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-br from-neon-blue to-neon-purple opacity-40 blur-2xl" />
          <div className="glass-card relative flex h-full w-full animate-float items-center justify-center rounded-full border-2 border-white/10">
            <span className="font-display text-6xl font-bold text-gradient sm:text-7xl">
              {PROFILE.initials}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block">
        <div className="h-9 w-6 rounded-full border-2 border-white/20">
          <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-neon-blue" />
        </div>
      </div>
    </section>
  );
}
