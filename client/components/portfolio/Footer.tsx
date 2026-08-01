import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {PROFILE.name}. Built with care and quality.</p>
        <div className="flex items-center gap-3">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-neon-blue"><Linkedin className="h-4 w-4" /></a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-neon-purple"><Github className="h-4 w-4" /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="text-muted-foreground transition-colors hover:text-neon-pink"><Mail className="h-4 w-4" /></a>
          <span className="ml-2 h-4 w-px bg-white/10" />
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xs font-medium text-muted-foreground transition-colors hover:text-white">Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
