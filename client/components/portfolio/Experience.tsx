import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-heading mt-3">Where I&apos;ve worked</h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-12 sm:pl-0"
              >
                <div className="absolute left-4 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple shadow-[0_0_12px_hsl(var(--neon-blue)/0.7)] sm:left-1/2" />

                <div
                  className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-10" : "sm:ml-auto sm:pl-10"}`}
                >
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-2 text-neon-blue">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
