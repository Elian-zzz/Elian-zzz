import { motion } from 'framer-motion';
import { Code2, Target, Lock } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-text)] mb-6">
            Filosofía de <span className="text-[var(--color-accent)]">Desarrollo</span>
          </h2>
          <div className="space-y-6 text-[var(--color-muted)] font-sans leading-relaxed">
            <p>
              Soy un Arquitecto de Software enfocado en la disciplina técnica. Creo firmemente que un buen producto digital no solo debe verse bien, sino que debe estar fundamentado en una base de código limpia, escalable y segura por diseño.
            </p>
            <p>
              Mi enfoque SecDevOps garantiza que la seguridad y la optimización de performance no sean un paso final, sino una constante durante todo el ciclo de vida de la aplicación.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {[
            { icon: <Code2 />, title: 'Código Limpio', desc: 'Arquitectura modular de alta cohesión.' },
            { icon: <Target />, title: 'Performance', desc: 'Optimización extrema para Lighthouse.' },
            { icon: <Lock />, title: 'Seguridad', desc: 'Prevención de vulnerabilidades OWASP.' },
          ].map((item, i) => (
            <div key={item.title} className={`p-6 rounded-xl border border-[var(--color-muted)]/20 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-md hover:border-[var(--color-accent)]/50 transition-all ${i === 2 ? 'sm:col-span-2' : ''}`}>
              <div className="text-[var(--color-accent)] mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
