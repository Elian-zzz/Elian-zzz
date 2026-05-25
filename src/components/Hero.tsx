import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-sans font-black tracking-tighter leading-[1.1] mb-8 text-[var(--color-text)]"
      >
        Descubre mi <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#4F46E5]">Sistema de Trabajo</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl md:text-2xl text-[var(--color-muted)] max-w-3xl font-serif italic mb-16 leading-relaxed"
      >
        Soluciones tecnológicas claras, robustas y directas diseñadas para comerciantes y empresas. Tecnología que entiendes y resultados que puedes medir.
      </motion.p>
      
      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block rounded-full px-12 py-5 border-2 border-[var(--color-text)] text-[var(--color-text)] uppercase font-mono tracking-widest hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors duration-300"
      >
        Ver Proyectos
      </motion.a>
    </section>
  );
}
