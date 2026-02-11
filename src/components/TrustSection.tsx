import { motion } from "framer-motion";
import { Building2, Award, Users, Globe } from "lucide-react";

const clients = [
  "Groupe Alliances", "ONCF", "Marjane", "RAM", "OCP", "Addoha", "BMCE Bank", "Accor Hotels"
];

const TrustSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Award, label: "Certifié ISO 9001", desc: "Qualité garantie" },
            { icon: Building2, label: "NF EN 81-20", desc: "Normes ascenseurs" },
            { icon: Users, label: "Équipe de 150+", desc: "Professionnels qualifiés" },
            { icon: Globe, label: "Couverture nationale", desc: "12 régions du Maroc" },
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto mb-3 h-14 w-14 rounded-full glass flex items-center justify-center group-hover:border-primary/30 transition-colors">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-heading font-semibold text-sm">{badge.label}</div>
              <div className="text-muted-foreground text-xs mt-0.5">{badge.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-8">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">
              Ils nous font confiance
            </span>
          </div>

          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="flex-shrink-0 px-6 py-3 glass rounded-lg font-heading text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/20 transition-colors"
                >
                  {client}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="text-4xl text-primary/30 font-serif mb-4">"</div>
          <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed italic">
            ESM a transformé notre vision architecturale en réalité. Leur expertise en ascenseurs
            et construction est inégalée au Maroc.
          </blockquote>
          <div className="mt-6">
            <div className="font-heading font-semibold">Mohammed Alami</div>
            <div className="text-muted-foreground text-sm">Directeur Général, Groupe Atlas Immobilier</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
