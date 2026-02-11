import { motion } from "framer-motion";

const cities = [
  { name: "Tanger", x: 180, y: 42, projects: 45 },
  { name: "Rabat", x: 145, y: 112, projects: 120 },
  { name: "Casablanca", x: 135, y: 132, projects: 200, major: true },
  { name: "Marrakech", x: 160, y: 200, projects: 85 },
  { name: "Fès", x: 210, y: 105, projects: 60 },
  { name: "Agadir", x: 130, y: 252, projects: 40 },
  { name: "Oujda", x: 290, y: 100, projects: 30 },
  { name: "Laâyoune", x: 95, y: 370, projects: 15 },
  { name: "Dakhla", x: 72, y: 470, projects: 10 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [1, 4], [4, 6],
  [3, 5], [5, 7], [7, 8], [2, 5],
];

const MoroccoMap = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">
            Notre couverture
          </span>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl font-bold">
            Du Nord au <span className="text-gradient-orange">Sahara</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Un réseau national couvrant tout le territoire marocain,
            avec une capacité d'intervention rapide dans chaque région.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <svg viewBox="0 0 380 520" className="w-full max-w-sm h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Glow filter */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(25 100% 50%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(25 100% 50%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Morocco outline */}
              <path
                d="M120,20 L200,15 L250,30 L310,60 L320,100 L300,130 L280,150 L250,170 L220,200 L200,230 L180,250 L170,280 L155,310 L140,340 L120,370 L110,400 L100,430 L90,460 L80,490 L60,500 L50,480 L55,440 L65,400 L75,360 L85,320 L95,280 L100,250 L105,220 L110,190 L115,160 L120,130 L125,100 L120,60 Z"
                fill="hsl(213 78% 12% / 0.5)"
                stroke="hsl(215 20% 30%)"
                strokeWidth="1"
              />

              {/* Connection lines */}
              {connections.map(([from, to], i) => (
                <g key={`conn-${i}`}>
                  <line
                    x1={cities[from].x} y1={cities[from].y}
                    x2={cities[to].x} y2={cities[to].y}
                    stroke="hsl(25 100% 50%)" strokeWidth="1" opacity="0.15"
                  />
                  <line
                    x1={cities[from].x} y1={cities[from].y}
                    x2={cities[to].x} y2={cities[to].y}
                    stroke="hsl(25 100% 50%)" strokeWidth="1.5" opacity="0.7"
                    strokeDasharray="4 8" filter="url(#glow)"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="-24" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                  </line>
                </g>
              ))}

              {/* Cities */}
              {cities.map((city, i) => {
                const r = city.major ? 6 : 4;
                return (
                  <g key={city.name}>
                    {/* Ambient glow */}
                    <circle cx={city.x} cy={city.y} r={r * 4} fill="url(#dotGlow)" />

                    {/* Pulse */}
                    <circle cx={city.x} cy={city.y} r={r} fill="none" stroke="hsl(25 100% 50%)" strokeWidth="0.5">
                      <animate attributeName="r" from={r} to={r * 3.5} dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                    </circle>

                    {/* Dot */}
                    <circle cx={city.x} cy={city.y} r={r} fill="hsl(25 100% 50%)" filter="url(#glow)" />
                    <circle cx={city.x} cy={city.y} r={r * 0.5} fill="hsl(25 100% 75%)" />

                    {/* Label */}
                    <text
                      x={city.x + r + 8} y={city.y + 4}
                      fill="hsl(210 20% 80%)"
                      fontSize={city.major ? "12" : "10"}
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight={city.major ? "600" : "400"}
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-4 max-w-md"
          >
            {[
              { city: "Casablanca", count: "200+", desc: "Siège principal et hub opérationnel" },
              { city: "Rabat", count: "120+", desc: "Projets institutionnels et gouvernementaux" },
              { city: "Marrakech", count: "85+", desc: "Hôtellerie de luxe et tourisme" },
              { city: "Tanger", count: "45+", desc: "Zones industrielles et portuaires" },
            ].map((item, i) => (
              <motion.div
                key={item.city}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-colors cursor-default"
              >
                <div className="font-heading text-2xl font-bold text-gradient-orange min-w-[70px]">
                  {item.count}
                </div>
                <div>
                  <div className="font-heading font-semibold text-lg">{item.city}</div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MoroccoMap;
