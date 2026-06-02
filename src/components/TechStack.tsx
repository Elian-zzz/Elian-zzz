import { motion } from 'framer-motion';
import { Server, Database, Layout, Shield, Cloud, Terminal } from 'lucide-react';

const technologies = [
  { category: 'Frontend', icon: <Layout size={24} />, skills: ['React TS', 'Vite / Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', icon: <Server size={24} />, skills: ['Node.js', 'Serverless Functions', 'RESTful APIs'] },
  { category: 'Database', icon: <Database size={24} />, skills: ['PostgreSQL', 'Redis', 'ORM (Prisma)'] },
  { category: 'DevSecOps', icon: <Shield size={24} />, skills: ['Docker', 'CI/CD (GitHub Actions)', 'Zod Validation'] },
  { category: 'Cloud & Hosting', icon: <Cloud size={24} />, skills: ['Vercel', 'AWS', 'Linux (Debian/WSL)'] },
  { category: 'Languages', icon: <Terminal size={24} />, skills: ['TypeScript', 'JavaScript', 'Bash'] },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="stack">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-text)] mb-4">
          Core <span className="text-[var(--color-accent)]">Architecture</span>
        </h2>
        <p className="text-[var(--color-muted)] max-w-2xl mx-auto font-sans">
          Herramientas y tecnologías que utilizo para construir ecosistemas de software robustos, rápidos y blindados.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl border border-[var(--color-muted)]/20 bg-white/40 backdrop-blur-md hover:border-[var(--color-accent)]/50 transition-colors group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-muted)]/10 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold font-sans text-[var(--color-text)]">{tech.category}</h3>
            </div>
            <ul className="space-y-2">
              {tech.skills.map(skill => (
                <li key={skill} className="text-gray-800 font-sans text-sm flex items-center gap-2 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/50" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
