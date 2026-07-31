import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolio";
import { useCountUp } from "@/hooks/use-count-up";

function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div
      ref={ref as any}
      className="glass-card flex flex-col items-center gap-2 p-6 text-center"
    >
      <Award className="h-6 w-6 text-neon-purple" />
      <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {current}
        {suffix}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-heading mt-3">Impact by the numbers</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Counter value={item.value} suffix={item.suffix} label={item.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
