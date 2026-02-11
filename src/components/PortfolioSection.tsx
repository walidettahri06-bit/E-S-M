import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio1Bp from "@/assets/portfolio-1-blueprint.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio2Bp from "@/assets/portfolio-2-blueprint.jpg";

interface Project {
  title: string;
  category: string;
  before: string;
  after: string;
}

const projects: Project[] = [
  {
    title: "Résidence Al Andalous",
    category: "Construction",
    before: portfolio1Bp,
    after: portfolio1,
  },
  {
    title: "Hôtel Atlas Tower",
    category: "Ascenseurs",
    before: portfolio2Bp,
    after: portfolio2,
  },
];

const BeforeAfterSlider = ({ before, after }: { before: string; after: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onPointerDown = () => { isDragging.current = true; };
  const onPointerUp = () => { isDragging.current = false; };
  const onPointerMove = (e: React.PointerEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerMove={onPointerMove}
    >
      {/* After (full) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${containerRef.current?.offsetWidth || 800}px`, maxWidth: "none" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary flex items-center justify-center glow-orange-strong">
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-primary-foreground">
            <path d="M6 10L2 10M2 10L5 7M2 10L5 13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 10L18 10M18 10L15 7M18 10L15 13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 glass rounded-md px-3 py-1 text-xs font-heading uppercase tracking-wider">
        Blueprint
      </div>
      <div className="absolute top-4 right-4 z-20 glass rounded-md px-3 py-1 text-xs font-heading uppercase tracking-wider">
        Réalisation
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const project = projects[activeIdx];

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">
            Nos réalisations
          </span>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold">
            Du plan à la <span className="text-gradient-orange">réalité</span>
          </h2>
        </motion.div>

        {/* Project tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActiveIdx(i)}
              className={`rounded-lg px-5 py-2.5 font-heading text-sm font-semibold transition-all ${
                i === activeIdx
                  ? "bg-primary text-primary-foreground glow-orange"
                  : "glass text-foreground/70 hover:text-foreground"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <BeforeAfterSlider before={project.before} after={project.after} />
          <div className="mt-4 text-center">
            <span className="text-primary text-xs font-heading uppercase tracking-widest">
              {project.category}
            </span>
            <h3 className="font-heading text-2xl font-bold mt-1">{project.title}</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
