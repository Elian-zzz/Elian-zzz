import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.8 0-1.5-.5-2.8-1.5-3.8.1-.4.7-1.8-.1-3.8-1-.3-3.4 1.5-3.4 1.5A11.6 11.6 0 0 0 12 4a11.6 11.6 0 0 0-3.4.9s-2.4-1.8-3.4-1.5c-.8 2-.2 3.4-.1 3.8A5.4 5.4 0 0 0 4 11c0 5.3 3 6.5 6 6.8a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <div id="contact" className="w-full flex flex-col items-center pt-24 relative">
      
      {/* Floating Overlapping Card */}
      <div className="w-full max-w-4xl px-6 relative z-10 -mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0369A1] rounded-[2.5rem] p-10 md:p-16 shadow-2xl flex flex-col items-center text-center border border-[#0284C7]"
        >
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white mb-6 tracking-tight">
            Iniciemos un <span className="text-[#BAE6FD]">Proyecto</span>
          </h2>
          
          <p className="text-sky-100 font-sans max-w-xl mx-auto mb-10 text-lg">
            ¿Tienes un desafío técnico o buscas escalar tu arquitectura? Contáctame de forma directa para conversarlo.
          </p>
          
          <a
            href="https://wa.me/59896140030?text=Hola%20Elian,%20me%20gustaría%20iniciar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold font-sans px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-[#16A34A]/30 hover:-translate-y-1"
          >
            <MessageSquare size={24} />
            Escríbeme por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Dark Footer Background */}
      <footer className="w-full bg-[#0a0d16] pt-40 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Footer Details */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-slate-800/80 pt-8 text-[#94A3B8] gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-mono text-sm">
              <a href="mailto:cielgutierrez11@gmail.com" className="hover:text-white transition-colors">cielgutierrez11@gmail.com</a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/gutierrez-elian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#0369A1] transition-colors flex items-center gap-2 font-mono text-sm"
              >
                <LinkedinIcon size={18} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Elian-zzz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
              >
                <GithubIcon size={18} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}
