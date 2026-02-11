import { motion } from "framer-motion";
import { Building2, ArrowUpDown, Wrench, ShieldCheck, Ruler, HardHat } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construction",
    description: "Bâtiments résidentiels, commerciaux et industriels de haute qualité, livrés clé en main.",
    span: "col-span-1 md:col-span-2 md:row-span-2",
    featured: true,
    hoverAnim: "group-hover:rotate-3",
  },
  {
    icon: ArrowUpDown,
    title: "Ascenseurs",
    description: "Installation et modernisation d'ascenseurs conformes aux normes internationales.",
    span: "col-span-1",
    featured: false,
    hoverAnim: "group-hover:-translate-y-1",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Contrats de maintenance préventive et curative 24h/24, 7j/7.",
    span: "col-span-1",
    featured: false,
    hoverAnim: "group-hover:rotate-90",
  },
  {
    icon: ShieldCheck,
    title: "Mise en Conformité",
    description: "Audit, diagnostic et mise aux normes de vos installations existantes.",
    span: "col-span-1",
    featured: false,
    hoverAnim: "group-hover:scale-110",
  },
  {
    icon: Ruler,
    title: "Études & Conseil",
    description: "Bureau d'études intégré pour des solutions techniques optimisées.",
    span: "col-span-1",
    featured: false,
    hoverAnim: "group-hover:rotate-12",
  },
  {
    icon: HardHat,
    title: "Rénovation",
    description: "Transformation et réhabilitation de structures existantes avec expertise.",
    span: "col-span-1 md:col-span-2",
    featured: false,
    hoverAnim: "group-hover:scale-110",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">
            Ce que nous faisons
          </span>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold">
            Nos <span className="text-gradient-orange">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Des solutions complètes pour vos projets de construction et de mobilité verticale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${service.span} ${
                service.featured ? "min-h-[320px]" : ""
              }`}
            >
              {/* Card background with gradient border effect */}
              <div className="absolute inset-[1px] rounded-xl bg-card z-0" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500" />
              
              {/* Content */}
              <div className={`relative z-10 p-6 md:p-8 ${service.featured ? "flex flex-col justify-end h-full" : ""}`}>
                {/* Icon with unique hover animation */}
                <div className="mb-4 relative">
                  <div className="absolute -inset-3 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                  <service.icon className={`relative h-8 w-8 text-primary transition-all duration-500 ${service.hoverAnim}`} />
                </div>

                {/* Number indicator */}
                <span className="absolute top-4 right-4 font-heading text-6xl font-bold text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500">
                  0{i + 1}
                </span>

                <h3 className={`font-heading font-bold mb-2 ${service.featured ? "text-3xl" : "text-xl"}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Learn more indicator */}
                <motion.div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>En savoir plus</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
