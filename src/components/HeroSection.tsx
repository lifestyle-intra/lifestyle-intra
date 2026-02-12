import { Leaf, ShieldCheck, Users, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import intraBottle from "@/assets/intra-juice.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Lifestyles Intra – Reclaim Your Health, Energy and Vitality" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 opacity-90">
              <Leaf className="h-5 w-5 text-gold" />
              <span className="text-primary-foreground/80 font-body text-sm tracking-widest uppercase">Lifestyles Global</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Reclaim Your Health, Energy, and Vitality with{" "}
              <span className="text-gold">Lifestyles Intra!</span>
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl font-body font-light mb-8 leading-relaxed max-w-xl">
              23 botanical extracts working in synergy to balance and strengthen your body's eight biological systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="gold-gradient text-accent-foreground font-body font-bold px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Shop Now
              </button>
              <a
                href="https://wa.me/639289258127?text=Hi!%20I'm%20interested%20in%20Lifestyles%20Intra%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary-foreground/30 text-primary-foreground font-body font-medium px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/10 transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-primary-foreground/70 text-sm font-body">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Since 1992</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4" /> 30+ Countries</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4" /> Millions Served</div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <img
              src={intraBottle}
              alt="Lifestyles Intra Herbal Juice Bottle"
              className="h-[500px] object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
