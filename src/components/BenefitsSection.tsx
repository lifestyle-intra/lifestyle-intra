import { ShieldCheck, Zap, Droplets, Sun, Heart, Brain, Leaf, Activity } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: ShieldCheck, title: "Immune Support", desc: "Strengthens your body's natural defenses with powerful botanical antioxidants." },
  { icon: Zap, title: "Energy Boost", desc: "Feel more energized throughout the day with natural herbal vitality." },
  { icon: Droplets, title: "Detoxification", desc: "Supports the body's natural detox processes for whole-body cleansing." },
  { icon: Sun, title: "Antioxidant Protection", desc: "Rich in flavonoids and polysaccharides that fight free radical damage." },
  { icon: Heart, title: "Cardiovascular Health", desc: "Supports heart and circulatory system wellness naturally." },
  { icon: Brain, title: "Mental Clarity", desc: "Botanical extracts that support brain function and focus." },
  { icon: Activity, title: "Balanced Systems", desc: "Works across all 8 biological systems for total body harmony." },
  { icon: Leaf, title: "100% Natural", desc: "23 time-tested botanical extracts with no artificial additives." },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Subtle leaf pattern texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-5 8-15 12-15 20s10 15 15 25c5-10 15-17 15-25S35 13 30 5z' fill='%23166534' fill-opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm tracking-widest uppercase">Why Choose Intra</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">
            The Power of 23 Botanicals
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Intra's unique synergy formula delivers greater benefits than any single botanical on its own.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-card rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <b.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
