import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-6 px-8 fixed top-0 left-0 bg-[#F9F9F8]/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          
          {/* Desktop Left Links */}
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest flex-1">
            <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">Filosofía</a>
            <a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Sistema</a>
          </div>
          
          {/* Center Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-3xl font-black tracking-tighter flex-none text-center cursor-pointer hover:text-[var(--color-accent)] transition-colors">
            ELIAN
          </a>
          
          {/* Desktop Right Links */}
          <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest items-center flex-1 justify-end">
            <a href="#stack" className="hover:text-[var(--color-accent)] transition-colors">Stack</a>
            <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contacto</a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex-1 flex justify-end">
            <button onClick={() => setIsOpen(true)} className="p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors" aria-label="Abrir menú">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Aside / Drawer */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-[350ms] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)}
      />
      <aside 
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#F9F9F8] shadow-2xl z-[70] md:hidden flex flex-col p-8 transition-transform duration-[350ms] ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end mb-12">
          <button onClick={() => setIsOpen(false)} className="p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors" aria-label="Cerrar menú">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-8 font-mono text-lg uppercase tracking-widest">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-accent)] transition-colors border-b border-gray-200 pb-4">Filosofía</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-accent)] transition-colors border-b border-gray-200 pb-4">Sistema</a>
          <a href="#stack" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-accent)] transition-colors border-b border-gray-200 pb-4">Stack</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-accent)] transition-colors border-b border-gray-200 pb-4">Contacto</a>
        </div>
      </aside>
    </>
  );
}
