import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import { Carousel } from './Carousel';

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-text)] mb-4">
          Featured <span className="text-[var(--color-accent)]">Work</span>
        </h2>
        <p className="text-[var(--color-muted)] max-w-2xl font-sans">
          A selection of projects where I solved complex architectural challenges, improved performance, and implemented rigorous security protocols.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative rounded-xl border border-[var(--color-muted)]/20 bg-[#111827] overflow-hidden flex flex-col ${project.span}`}
          >
            {/* Top half: Carousel */}
            <div className="h-1/2 w-full">
              <Carousel images={project.images} />
            </div>
            
            {/* Bottom half: Content */}
            <div className="h-1/2 p-6 flex flex-col justify-between z-10 bg-gradient-to-t from-[#111827] via-[#111827] to-transparent">
              <div>
                <h3 className="text-xl font-sans font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] font-sans line-clamp-2 mb-3">
                  <span className="font-semibold text-[var(--color-text)]">Problema:</span> {project.problem}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-[var(--color-accent)] font-sans mb-3 line-clamp-1">
                  <span className="font-semibold text-[var(--color-text)]">Resultados:</span> {project.results}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-[var(--color-bg)] text-[var(--color-muted)] border border-[var(--color-muted)]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
