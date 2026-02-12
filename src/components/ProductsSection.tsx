import { useState } from "react";
import { ShoppingCart, Minus, Plus, MessageCircle } from "lucide-react";
import intraJuiceImg from "@/assets/intra-juice.jpg";
import intraCapsImg from "@/assets/intra-capsules.jpg";

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  description: string;
  usage: string;
  stock: number;
}

const initialProducts: Product[] = [
  {
    id: "intra-juice",
    name: "Intra Herbal Juice",
    subtitle: "950 ml Liquid Tincture",
    price: 1500,
    image: intraJuiceImg,
    description:
      "As a natural food supplement, Intra's precise formula of 23 botanical extracts work better together to help balance and strengthen the body's eight biological systems, leaving you feeling healthier, happier and more energized! Intra is a pleasant tasting, proprietary formulation of 23 time-tested and trusted botanical extracts that provide the body with antioxidants, flavonoids, lignins, polysaccharides and other health enhancing nutrients.",
    usage: "Any time of the day with food or empty stomach – 1 fl. oz (28 to 56 ml)",
    stock: 25,
  },
  {
    id: "intra-capsules",
    name: "Intra Capsules",
    subtitle: "Convenient Daily Supplement",
    price: 1200,
    image: intraCapsImg,
    description:
      "The key to Intra's effectiveness is the synergy of the blended botanicals working together providing greater benefits than an individual botanical on its own. Intra's unique formula is exclusive to Lifestyles and has remained unchanged since 1992. Now available in convenient capsule form for on-the-go wellness.",
    usage: "Any time of the day with food or empty stomach – 2 to 4 capsules daily",
    stock: 30,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [qty, setQty] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const whatsappMsg = `Hi! I'd like to order ${qty}x ${product.name} (₱${(product.price * qty).toLocaleString()}). Please let me know availability and delivery details.`;
  const whatsappUrl = `https://wa.me/639289258127?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative bg-secondary p-8 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-64 object-contain animate-float" />
        {product.stock <= 5 && (
          <span className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
            Low Stock
          </span>
        )}
        {product.stock > 5 && (
          <span className="absolute top-4 right-4 bg-success text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
            In Stock ({product.stock})
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-foreground mb-1">{product.name}</h3>
        <p className="text-muted-foreground font-body text-sm mb-3">{product.subtitle}</p>
        <p className="text-foreground font-body text-sm leading-relaxed mb-4">
          {expanded ? product.description : product.description.slice(0, 150) + "..."}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary font-medium ml-1 hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </p>
        <div className="bg-secondary rounded-lg p-3 mb-4">
          <p className="text-sm font-body text-muted-foreground">
            <strong className="text-foreground">Usage:</strong> {product.usage}
          </p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-3xl text-primary">₱{product.price.toLocaleString()}</span>
            <div className="flex items-center gap-3 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-foreground"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-body font-bold text-foreground w-6 text-center">{qty}</span>
              <button
                onClick={() => setQty(Math.min(product.stock, qty + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-foreground"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full gold-gradient text-accent-foreground font-body font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
          >
            <MessageCircle className="h-5 w-5" />
            Order via WhatsApp – ₱{(product.price * qty).toLocaleString()}
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm tracking-widest uppercase">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Intra – Drink It. Share It. Every Day.
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Available in liquid (950 ml bottle) or capsules. Intra's formula has been enjoyed by millions of satisfied customers worldwide since 1992.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {initialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
