import { useState, useEffect } from "react";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
            <p className="hidden sm:block font-display text-sm md:text-base text-foreground">
              Ready to transform your health with <span className="text-primary font-semibold">Intra</span>?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/639178889688"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat</span>
              </a>
              <a
                href="https://wa.me/639178889688?text=I%20want%20to%20order%20Lifestyles%20Intra!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg hero-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Order Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
