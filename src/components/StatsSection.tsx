import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Années d'Expérience" },
  { value: 500, suffix: "+", label: "Projets Réalisés" },
  { value: 1200, suffix: "+", label: "Ascenseurs Installés" },
  { value: 24, suffix: "/7", label: "Support Maintenance" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-heading text-5xl md:text-6xl font-bold text-gradient-orange mb-2 tabular-nums">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center relative group"
            >
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="mt-3 mx-auto w-8 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
