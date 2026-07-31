import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-heading mt-3">Featured QA engagements</h2>
          <p className="mt-4 text-muted-foreground">
            Real-world products I&apos;ve tested end-to-end, from checkout to
            cloud sync.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card group flex flex-col p-6 hover:-translate-y-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-[0_0_20px_hsl(var(--neon-blue)/0.4)]">
                <FolderKanban className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-foreground/70 transition-colors group-hover:bg-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
