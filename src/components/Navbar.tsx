export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 sticky top-0 bg-[var(--color-bg)]/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-8 font-mono text-sm uppercase tracking-widest">
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">Filosofía</a>
          <a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Sistema</a>
        </div>
        
        <div className="text-3xl font-black tracking-tighter">
          ELIAN
        </div>
        
        <div className="flex gap-8 font-mono text-sm uppercase tracking-widest items-center">
          <a href="#stack" className="hover:text-[var(--color-accent)] transition-colors">Stack</a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
