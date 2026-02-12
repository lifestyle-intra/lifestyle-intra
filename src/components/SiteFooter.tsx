import { Leaf } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-5 w-5 text-gold" />
              <span className="font-display text-lg text-primary-foreground">Lifestyles Intra</span>
            </div>
            <p className="font-body text-sm leading-relaxed">
              Reclaim your health, energy, and vitality with the power of 23 botanical extracts. Trusted since 1992.
            </p>
          </div>
          <div>
            <h4 className="font-display text-primary-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#products" className="hover:text-gold transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact Us</a></li>
              <li>
                <a href="https://www.facebook.com/christian.espinosa.7946/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-primary-foreground mb-3">Contact Info</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>📱 0928-925-8127</li>
              <li>📍 Quezon City, Philippines</li>
              <li>💬 WhatsApp & Viber available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/40 mb-3">
            ⚠️ Disclaimer: These statements have not been evaluated by the Food and Drug Administration. 
            This product is not intended to diagnose, treat, cure or prevent any disease.
          </p>
          <p className="font-body text-xs text-primary-foreground/40 mb-2">
            💡 Link this site in your Facebook Marketplace listings for full details and easy ordering.
          </p>
          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Lifestyles Intra — Independent Distributor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
