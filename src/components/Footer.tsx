import { useEffect, useState } from "react";
import logo from "@/assets/esm-logo.png";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("fr-FR", {
        timeZone: "Africa/Casablanca",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(now);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-blueprint border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="ESM" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Leader marocain dans la construction, l'installation d'ascenseurs
              et la maintenance industrielle.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Accueil", "Services", "Réalisations", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Heure au Maroc</h4>
            <div className="font-heading text-3xl font-bold text-gradient-orange tabular-nums">
              {time}
            </div>
            <p className="text-muted-foreground text-sm mt-1">GMT+1 · Casablanca</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ESM. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/50">
            L'excellence bâtie sur l'innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
