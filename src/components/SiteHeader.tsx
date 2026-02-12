import { Leaf } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display text-xl text-foreground">Lifestyles <span className="text-gold">Intra</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-body text-sm">
          <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <a
            href="https://wa.me/639289258127?text=Hi!%20I'm%20interested%20in%20Lifestyles%20Intra."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-gradient text-primary-foreground px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
