import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="ESM Construction" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticle delay={0} x="10%" y="20%" size={4} />
        <FloatingParticle delay={0.5} x="80%" y="30%" size={3} />
        <FloatingParticle delay={1} x="25%" y="70%" size={5} />
        <FloatingParticle delay={1.5} x="70%" y="60%" size={3} />
        <FloatingParticle delay={2} x="50%" y="15%" size={4} />
        <FloatingParticle delay={0.8} x="90%" y="80%" size={6} />
        <FloatingParticle delay={1.2} x="15%" y="50%" size={3} />
        <FloatingParticle delay={2.5} x="60%" y="85%" size={4} />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-primary/50 to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
          className="absolute bottom-1/3 right-0 w-48 h-[1px] bg-gradient-to-l from-primary/40 to-transparent origin-right"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
          className="absolute top-[15%] right-[10%] w-[1px] h-24 bg-gradient-to-b from-primary/30 to-transparent origin-top"
        />
      </div>

      <motion.div style={{ y: textY, opacity }} className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-3 text-primary font-heading text-lg tracking-[0.3em] uppercase mb-6">
            <span className="h-[1px] w-8 bg-primary" />
            Construction · Ascenseurs · Maintenance
            <span className="h-[1px] w-8 bg-primary" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            L'excellence{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gradient-orange inline-block"
          >
            bâtie
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            sur l'innovation
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 font-light"
        >
          Du nord au Sahara, ESM conçoit, installe et maintient les infrastructures
          qui élèvent le Maroc vers l'avenir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-lg bg-primary px-8 py-4 font-heading text-lg font-semibold text-primary-foreground glow-orange overflow-hidden"
          >
            <span className="relative z-10">Nos Services</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg glass px-8 py-4 font-heading text-lg font-semibold text-foreground hover:border-primary/30 transition-colors"
          >
            Demander un Devis
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="relative w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-1"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
