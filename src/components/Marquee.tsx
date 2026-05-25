import { motion } from "framer-motion";

export default function Marquee() {
  const words = [
    "Desarrollo Web", "Soporte Técnico", "Consultoría IT", 
    "Diseño Accesible", "Optimización Integral", "Arquitectura Segura"
  ];
  
  return (
    <div className="w-full overflow-hidden border-y border-[var(--color-text)]/10 bg-white py-6 flex whitespace-nowrap mt-12 mb-32">
      <motion.div 
        className="flex gap-16 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {/* Render multiple times for seamless loop */}
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-2xl md:text-3xl font-serif italic font-medium text-[var(--color-text)]">{word}</span>
            <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
