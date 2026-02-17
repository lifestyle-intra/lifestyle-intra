import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Intra and how does it work?",
    a: "Intra is a liquid botanical supplement made from 23 carefully selected herbal extracts. Its unique synergy formula works across the body's 8 biological systems — immune, digestive, respiratory, circulatory, nervous, urinary, endocrine, and structural — delivering benefits greater than any single herb alone.",
  },
  {
    q: "How should I take Intra?",
    a: "Mix 1 ounce (30 ml) of Intra with water or juice, once or twice daily. For best results, take it consistently every day. You can enjoy it at any time — morning, noon, or evening.",
  },
  {
    q: "Is Intra safe for everyone?",
    a: "Intra is made from 100% natural botanical extracts with no artificial colors, flavors, or preservatives. It is generally safe for adults. However, if you are pregnant, nursing, or taking medication, please consult your healthcare provider before use.",
  },
  {
    q: "How long before I see results?",
    a: "Many people report feeling more energized within the first week. However, because Intra works at a cellular level, optimal benefits are typically noticed after 2–4 weeks of consistent daily use.",
  },
  {
    q: "What makes Intra different from other supplements?",
    a: "Unlike single-ingredient supplements, Intra's 23 botanical extracts are formulated to work in synergy — meaning the combined effect is more powerful than each ingredient on its own. This whole-body approach sets it apart from typical vitamins or isolated herbal products.",
  },
  {
    q: "How do I order and what is the price?",
    a: "Intra Juice is available at ₱1,500 per bottle. You can order directly through this website by contacting us via the contact form or WhatsApp. We deliver nationwide in the Philippines.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm tracking-widest uppercase">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Everything you need to know about Intra and our botanical wellness products.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-lg border-none px-6 shadow-sm"
            >
              <AccordionTrigger className="font-display text-left hover:no-underline text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
