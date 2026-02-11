import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import MoroccoMap from "@/components/MoroccoMap";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay scroll-smooth">
      <Header />
      <HeroSection />
      <StatsSection />
      <TrustSection />
      <ServicesSection />
      <PortfolioSection />
      <MoroccoMap />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
