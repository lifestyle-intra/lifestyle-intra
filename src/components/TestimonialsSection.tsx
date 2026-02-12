import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    location: "Quezon City",
    text: "Intra boosted my energy levels amazingly! I've been taking it for 6 months and I feel like a new person. My whole family drinks it now.",
    rating: 5,
  },
  {
    name: "Roberto D.",
    location: "Manila",
    text: "After years of feeling sluggish, Intra helped me get my vitality back. The natural botanical blend really works. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anna L.",
    location: "Cebu City",
    text: "I love the convenience of Intra Capsules – perfect for my busy lifestyle. I take them every morning and feel the difference throughout the day.",
    rating: 5,
  },
  {
    name: "Customer Review",
    location: "Philippines",
    text: "Add your own testimonial here! Share how Intra has helped you on your wellness journey.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding hero-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mt-2">
            What Our Customers Say
          </h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card/10 backdrop-blur-sm rounded-xl p-8 md:p-12 text-center border border-primary-foreground/10">
            <Quote className="h-10 w-10 text-gold mx-auto mb-6 opacity-60" />
            <p className="text-primary-foreground text-lg md:text-xl font-body font-light leading-relaxed mb-6 italic">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-primary-foreground font-body font-bold">{testimonials[current].name}</p>
            <p className="text-primary-foreground/60 font-body text-sm">{testimonials[current].location}</p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-primary-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
