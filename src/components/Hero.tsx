import { Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-12 overflow-hidden bg-black">
      {/* Background Collage */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 z-0">
        <div className="relative">
          <img src="/proyectos/patricia/Pagina_principal.png" alt="Patricia" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/50 md:bg-black/30"></div>
        </div>
        <div className="relative hidden md:block">
          <img src="/proyectos/astro/hero.png" alt="Astro" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-[#333]/40"></div>
        </div>
        <div className="relative hidden md:block">
          <img src="/proyectos/pachamama/pantalla_principal_del_dashboard_con_pedidos_recientes_y_grafica_de_ingersos.png" alt="Pachamama" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 max-w-[1600px] mx-auto gap-8 md:gap-0">
        
        {/* Left: Globe */}
        <div className="w-full md:w-[45%] flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Globe 
              className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] text-[#0369A1] drop-shadow-[0_0_20px_rgba(3,105,161,0.6)]" 
              strokeWidth={2.5} 
            /> 
          </motion.div>
        </div>

        {/* Right: Texts */}
        <div className="w-full md:w-[55%] flex flex-col items-center justify-center relative md:pt-10">
          
          <div className="text-center flex flex-col items-center w-full relative z-30">
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-none font-black text-white tracking-widest mb-2 md:mb-1"
               style={{ 
                 WebkitTextStroke: '2px #333', 
                 textShadow: '4px 4px 0px rgba(0,0,0,0.7)'
               }}
             >
               EXPOSICIÓN
             </motion.h1>
             
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-mono tracking-[0.1em] md:tracking-[0.2em] mb-10 md:mb-16"
               style={{ 
                 textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
                 WebkitTextStroke: '0.5px #000'
               }}
             >
               Descubrí tu nuevo espacio
             </motion.p>
             
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="flex flex-col items-center w-full mb-8 relative px-2"
             >
               <h2 
                 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 transform scale-x-110 sm:scale-x-125 md:scale-x-[1.3]"
                 style={{ 
                   textShadow: '3px 3px 8px rgba(0,0,0,0.9), 0px 0px 4px rgba(0,0,0,1)',
                   WebkitTextStroke: '1px rgba(0,0,0,0.8)'
                 }}
               >
                 SOMOS PARTE DEL NUEVO
               </h2>
               <h2 
                 className="text-3xl sm:text-4xl md:text-5xl font-black text-white transform scale-x-110 sm:scale-x-125 md:scale-x-[1.4]"
                 style={{ 
                   textShadow: '4px 4px 10px rgba(0,0,0,0.9), 0px 0px 4px rgba(0,0,0,1)',
                   WebkitTextStroke: '1px rgba(0,0,0,0.8)'
                 }}
               >
                 ESTANDAR DIGITAL
               </h2>
             </motion.div>

             <motion.a
               href="#contact"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="group flex items-center justify-center gap-4 px-8 py-5 sm:px-10 sm:py-6 bg-[var(--color-accent)] text-white hover:bg-blue-700 uppercase tracking-widest text-base sm:text-lg md:text-xl font-mono rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-[var(--color-accent)]/50 mt-4 md:mt-8 cursor-pointer"
             >
               ¿Que esperas para unirte?
               <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
             </motion.a>
          </div>
        </div>
      </div>
      
      {/* Right Vertical Blue Bar - Hidden on mobile, visible on desktop */}
      <motion.div 
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: '-50%' }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden md:block absolute right-[8%] top-1/2 w-20 lg:w-28 h-[50%] lg:h-[60%] bg-[#3B82F6] z-10 shadow-2xl"
      />
    </section>
  );
}
