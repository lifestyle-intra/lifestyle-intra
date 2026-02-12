import intraBottle from "@/assets/intra-juice.jpg";
import badge30 from "@/assets/intra-30years.jpg";
import lifestyleImg from "@/assets/lifestyle-fitness.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-body text-sm tracking-widest uppercase">About Lifestyles</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Part of a Healthy Lifestyle!
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              With Lifestyles' line of products, there's something for everyone! Millions of satisfied customers
              in over 30 countries worldwide since 1989 trust Lifestyles for their daily health and wellness needs.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Intra's unique formula is exclusive to Lifestyles and has remained unchanged since 1992. The key to 
              Intra's effectiveness is the synergy of the blended botanicals working together, providing greater 
              benefits than any individual botanical on its own. Intra's formula has been enjoyed by millions of 
              satisfied customers worldwide and is suitable for all ages.
            </p>
            <p className="text-foreground font-body font-bold text-lg mb-6">
              Drink Intra. Share Intra. Every Day.
            </p>
            <div className="flex items-center gap-4">
              <img src={badge30} alt="Intra - Celebrating 30 Years Since 1992" className="h-20 object-contain" />
              <p className="text-muted-foreground font-body text-sm italic">
                Intra is available in liquid or capsules.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={lifestyleImg}
              alt="Healthy lifestyle with Lifestyles products"
              className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
            />
            <img
              src={intraBottle}
              alt="Lifestyles Intra bottle"
              className="absolute -bottom-6 -left-6 h-48 object-contain drop-shadow-xl hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
