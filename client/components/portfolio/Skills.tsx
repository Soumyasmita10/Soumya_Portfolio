import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolio";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-heading mt-3">What I bring to the table</h2>
          <p className="mt-4 text-muted-foreground">
            A well-rounded toolkit built through hands-on QA work across
            manual, API, and deployment testing.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-gradient">
                {category.title}
              </h3>
              <div className="mt-6 space-y-4">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
