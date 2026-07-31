import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Certifications</p>
          <h2 className="section-heading mt-3">Continuous learning</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card flex flex-col items-center gap-3 p-6 text-center"
            >
              <BadgeCheck className="h-8 w-8 text-neon-purple" />
              <h3 className="font-display text-base font-bold">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
