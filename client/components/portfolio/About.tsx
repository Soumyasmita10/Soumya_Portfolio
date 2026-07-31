import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ABOUT_HIGHLIGHTS } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-heading mt-3">
            Detail-driven QA professional
          </h2>
          <p className="mt-5 text-muted-foreground">
            I specialize in ensuring software quality across POS, cloud,
            kiosk, table ordering, and payment applications. From manual and
            regression testing to API validation and deployment
            verification, I bring a methodical, recruiter-friendly approach
            to every release cycle — collaborating closely with cross
            functional teams in Agile environments to ship dependable
            software.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {ABOUT_HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card flex items-center gap-2 px-4 py-3 text-sm font-medium"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-blue" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
