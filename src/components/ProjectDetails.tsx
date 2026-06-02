import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ProjectImage } from './Carousel';

export interface Project {
  id: string;
  title: string;
  problem: string;
  tech: string[];
  results: string;
  images: ProjectImage[];
}

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F3F4F6] selection:bg-[#0369A1]/30 selection:text-[#0369A1] font-sans antialiased">
      
      {/* Navbar/Back Button */}
      <nav className="w-full py-8 px-6 md:px-12 flex items-center justify-between max-w-[1600px] mx-auto relative z-40">
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-[#94A3B8] hover:text-[#0369A1] transition-all duration-300 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
          <span className="font-mono text-sm uppercase tracking-widest mt-1">Volver al inicio</span>
        </button>
        <div className="font-mono text-xs text-[#475569] tracking-widest uppercase hidden md:block">
          Detalles del Proyecto
        </div>
      </nav>

      <main className="pb-32 px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">
        {/* Header Hero */}
        <header className="py-16 md:py-32 flex flex-col items-start gap-6 border-b border-slate-800/50 mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-[6.5rem] font-black tracking-tighter leading-[0.9] uppercase text-white"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-2xl text-[#94A3B8] max-w-4xl leading-relaxed mt-4 md:mt-8 font-light"
          >
            {project.results}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-6 md:mt-10"
          >
            {project.tech.map(t => (
              <span key={t} className="px-5 py-2 border border-slate-700/50 bg-slate-900/40 font-mono text-xs uppercase tracking-widest text-[#0369A1] rounded-sm">
                {t}
              </span>
            ))}
          </motion.div>
        </header>

        {/* Bento Grid Gallery */}
        {project.images && project.images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:auto-rows-[450px]">
            {project.images.map((img, idx) => {
              const spanClass = img.span || (idx === 0 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1');
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setSelectedImage(img)}
                  className={`group relative flex flex-col rounded-2xl overflow-hidden border border-slate-800/40 bg-[#0B0F19] transition-all duration-500 hover:-translate-y-1 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-[#0369A1]/5 cursor-pointer ${spanClass}`}
                >
                  <div className="relative w-full flex-1 overflow-hidden bg-[#0F1523]">
                    <img 
                      src={img.src} 
                      alt={img.title || "Captura del proyecto"} 
                      className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent opacity-90" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end z-10">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F3F4F6] mb-3">
                      {img.title}
                    </h3>
                    {img.synthesis && (
                      <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed max-w-[95%]">
                        {img.synthesis}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-32 border border-dashed border-slate-800/50 rounded-2xl">
             <p className="text-[#94A3B8] font-mono tracking-widest uppercase">Visuales en producción</p>
          </div>
        )}
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F19]/95 backdrop-blur-sm p-4 md:p-12"
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-full flex flex-col"
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl border border-slate-800"
              />
              <div className="mt-6 md:mt-8 text-center px-4">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
                  {selectedImage.title}
                </h3>
                {selectedImage.synthesis && (
                  <p className="text-base md:text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
                    {selectedImage.synthesis}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
