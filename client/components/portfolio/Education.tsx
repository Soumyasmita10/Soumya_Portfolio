import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Education</p>
          <h2 className="section-heading mt-3">Academic background</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-card mx-auto mt-12 flex max-w-xl items-center gap-5 p-6 sm:p-8"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-[0_0_20px_hsl(var(--neon-blue)/0.4)]">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">
              {EDUCATION.degree}
            </h3>
            <p className="text-sm text-muted-foreground">
              {EDUCATION.institution}
            </p>
            <p className="mt-1 text-sm font-semibold text-neon-blue">
              {EDUCATION.cgpa}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
