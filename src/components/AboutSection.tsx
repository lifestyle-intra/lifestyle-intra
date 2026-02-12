import { Leaf } from "lucide-react";

const complementaryProducts = [
  { name: "NutriaPlus", desc: "Comprehensive multivitamin and mineral supplement for daily nutritional support." },
  { name: "CardioLife", desc: "Heart-healthy formula supporting cardiovascular wellness and circulation." },
  { name: "FiberLife", desc: "Premium fiber supplement for digestive health and regularity." },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-gold font-body text-sm tracking-widest uppercase">About Lifestyles</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Something for Everyone Since 1989
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              With Lifestyles' line of products, there's something for everyone! Millions of satisfied customers
              in over 30 countries worldwide since 1989 trust Lifestyles for their daily health and wellness needs.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Intra's unique formula is exclusive to Lifestyles and has remained unchanged since 1992. The key to 
              Intra's effectiveness is the synergy of the blended botanicals working together, providing greater 
              benefits than any individual botanical on its own. Intra's formula has been enjoyed by millions of 
              satisfied customers worldwide and is suitable for all ages.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-6">Complementary Products</h3>
            <div className="space-y-4">
              {complementaryProducts.map((p, i) => (
                <div key={i} className="bg-secondary rounded-lg p-5 flex gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground">{p.name}</h4>
                    <p className="text-muted-foreground font-body text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground font-body text-sm mt-4 italic">
              Ask about these products when you place your Intra order!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
