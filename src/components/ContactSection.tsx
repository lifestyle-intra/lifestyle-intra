import { useState } from "react";
import { Send, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! My name is ${form.name}. ${form.message} (Email: ${form.email})`;
    window.open(`https://wa.me/639289258127?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Ready to Order?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Contact us via WhatsApp, Viber, or send a message below. Local delivery available in Quezon City!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <a
              href="https://wa.me/639289258127?text=Hi!%20I'm%20interested%20in%20Lifestyles%20Intra%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-lg p-5 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-success flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-body font-bold text-foreground group-hover:text-primary transition-colors">WhatsApp / Viber</p>
                <p className="text-muted-foreground font-body text-sm">0928-925-8127</p>
              </div>
            </a>
            <a
              href="tel:09289258127"
              className="flex items-center gap-4 bg-card rounded-lg p-5 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-body font-bold text-foreground group-hover:text-primary transition-colors">Call / Text</p>
                <p className="text-muted-foreground font-body text-sm">0928-925-8127</p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/christian.espinosa.7946/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-lg p-5 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-lg">f</span>
              </div>
              <div>
                <p className="font-body font-bold text-foreground group-hover:text-primary transition-colors">Facebook</p>
                <p className="text-muted-foreground font-body text-sm">Christian Espinosa</p>
              </div>
            </a>
            <div className="bg-card rounded-lg p-5 border-l-4 border-gold">
              <p className="font-body text-sm text-muted-foreground">
                🚚 <strong className="text-foreground">Local delivery</strong> available in Quezon City and nearby areas. Nationwide shipping also available.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-md space-y-4">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center mx-auto mb-4">
                  <Send className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground font-body text-sm">We'll get back to you shortly via WhatsApp.</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary font-body font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder="I'd like to order Intra..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full hero-gradient text-primary-foreground font-body font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4" /> Send via WhatsApp
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
