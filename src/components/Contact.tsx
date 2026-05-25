import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    // Simulate API call to /api/contact for now (Vercel Serverless Function to be implemented)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <footer className="w-full bg-[#0a0d16] border-t border-[var(--color-muted)]/10 py-24" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-text)] mb-4">
            Iniciemos un <span className="text-[var(--color-accent)]">Proyecto</span>
          </h2>
          <p className="text-[var(--color-muted)] font-sans">
            ¿Tienes un desafío técnico o buscas escalar tu arquitectura? Contáctame de forma segura.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#111827] p-8 rounded-2xl border border-[var(--color-muted)]/20 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[var(--color-text)] font-sans">Nombre Completo</label>
              <input 
                id="name"
                type="text" 
                required
                disabled={status === 'loading'}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-muted)]/30 rounded-lg px-4 py-3 text-[var(--color-text)] font-sans focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--color-text)] font-sans">Correo Electrónico</label>
              <input 
                id="email"
                type="email" 
                required
                disabled={status === 'loading'}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[var(--color-bg)] border border-[var(--color-muted)]/30 rounded-lg px-4 py-3 text-[var(--color-text)] font-sans focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all disabled:opacity-50"
                placeholder="john@empresa.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-[var(--color-text)] font-sans">Mensaje Seguro</label>
            <textarea 
              id="message"
              required
              rows={4}
              disabled={status === 'loading'}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-[var(--color-bg)] border border-[var(--color-muted)]/30 rounded-lg px-4 py-3 text-[var(--color-text)] font-sans focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none disabled:opacity-50"
              placeholder="Detalla la arquitectura de tu problema..."
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className="w-full flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold font-sans py-4 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'idle' && <><Send size={18} /> Enviar Petición</>}
            {status === 'loading' && <><Loader2 size={18} className="animate-spin" /> Procesando...</>}
            {status === 'success' && <><CheckCircle size={18} /> Enviado con Éxito</>}
            {status === 'error' && <><AlertCircle size={18} /> Error en Servidor</>}
          </button>
        </motion.form>
      </div>
    </footer>
  );
}
