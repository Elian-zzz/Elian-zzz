import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';
import { Carousel } from './Carousel';

interface ProjectsLayoutProps {
  onSelectProject?: (id: string) => void;
}

export default function ProjectsLayout({ onSelectProject }: ProjectsLayoutProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-32">
        <h2 className="text-5xl font-black tracking-tight mb-6 text-[var(--color-text)]">
          Casos de <span className="text-[var(--color-accent)]">Éxito</span>
        </h2>
        <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto font-sans">
          Ejemplos reales de cómo la tecnología y el soporte adecuado pueden transformar tu negocio.
        </p>
      </div>

      <div className="space-y-48">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
            >
              
              {/* Text Side */}
              <div className="flex-1 space-y-8">
                <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--color-text)] leading-tight">
                  {project.title}
                </h3>
                
                <div className="space-y-6 text-lg text-[var(--color-text)]/80 leading-relaxed font-sans">
                  <p>
                    <strong className="text-[var(--color-text)] font-bold block mb-2 uppercase tracking-widest text-sm">El Problema:</strong> 
                    {project.problem}
                  </p>
                  <p>
                    <strong className="text-[var(--color-accent)] font-bold block mb-2 uppercase tracking-widest text-sm">La Solución:</strong> 
                    {project.results}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-5 py-2 border border-[var(--color-text)]/20 rounded-full font-mono text-xs uppercase tracking-wider text-[var(--color-text)]">
                      {t}
                    </span>
                  ))}
                </div>

                {onSelectProject && (
                  <div className="pt-8">
                    <button 
                      onClick={() => onSelectProject(project.id)}
                      className="group flex items-center gap-4 px-8 py-4 border border-[var(--color-text)]/20 hover:border-[var(--color-accent)] text-[var(--color-text)] uppercase tracking-widest text-sm font-mono transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-0.5 shadow-none hover:shadow-xl hover:shadow-[var(--color-accent)]/20"
                    >
                      Examinar Proyecto
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>

              {/* Image Carousel Side */}
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-text)]/5 bg-white">
                  {/* @ts-ignore Since images now match ProjectImage interface expected by Carousel */}
                  <Carousel images={project.images} />
                </div>
                {/* Decorative abstract shapes based on EarlyDog reference */}
                <div className={`absolute -z-10 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl ${isEven ? '-bottom-12 -right-12' : '-top-12 -left-12'}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
