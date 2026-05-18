"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useWhatsAppStore } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const { openModal } = useWhatsAppStore();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-[9999] flex items-end gap-2"
      style={{ zIndex: 99999 }}
    >
      {/* Text tooltip on hover (desktop only) */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="bg-[#002350] text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg whitespace-nowrap pointer-events-none hidden sm:block"
      >
        ¿Necesitas ayuda?
      </motion.div>

      {/* WhatsApp Button - circular, limpio, sin fondos extra */}
      <button
        onClick={() => openModal()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: "#25D366",
          zIndex: 99999,
        }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}
