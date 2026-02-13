import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/639289258127?text=Hi! I'm interested in your Lifestyles products. Can you help me?";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
