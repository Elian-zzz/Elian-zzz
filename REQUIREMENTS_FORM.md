# FORMULARIO DE REQUERIMIENTOS

Por favor, completa los campos vacíos (`[ ]`) o responde a las preguntas directas.

## 0. CONTEXTO ADICIONAL (Para el Arquitecto/IA)
- **Framework principal:** ¿Usaremos `Next.js` (App Router) o `Vite` (React + SPA)? `[ Vite ]`
- **Idiomas:** ¿El portfolio será multi-idioma (i18n) o solo en español/inglés? `[ Inglés y español, debe de ser de fácil acceso el cambio de idioma ]`
- **Gestor de Contenido (CMS):** ¿Los proyectos del "Bento Grid" estarán en un archivo local (JSON/TS) o vendrán de un CMS (Sanity, Strapi, Notion)? `[ JSON ]`
- **Dominio:** ¿Tienes ya un dominio personalizado para apuntar en Vercel? `[ autoasignado de vercel ]`

## 1. REQUERIMIENTOS FUNCIONALES (Qué hará el sistema)
- [ ] Mostrar Hero Section con CTA principal.
- [ ] Renderizar Bento Grid de proyectos con detalle (Problema, Tech, Resultados).
- [ ] Mostrar Stack Tecnológico visual.
- [ ] Procesar Formulario de Contacto (Validación + Envío a Email/BD).
- [ ] Desplegar junto con el contenido de los proyectos realizados imagenes descriptivas (carrusel de 5 a 9 imagenes).
- [ ] **Ejemplo de requerimiento**.


## 2. REQUERIMIENTOS NO FUNCIONALES (Cómo lo hará)
- **Performance:** Tiempo de carga inicial < 1.5s (Lighthouse > 90).
- **Seguridad:**
  - Validación de Zod en servidor.
  - Rate Limiting estricto por IP en WAF Vercel (Max 5 req/min).
- **Accesibilidad (a11y):** Contraste WCAG AA, navegación por teclado.
- **Responsividad:** Mobile-first, adaptado a tablet y desktop ultrawide.
- **Tema:** Soporte nativo y sin destellos (FOUC) para Light/Dark Mode.
- **Accesibilidad:** Debe de tener un color de letra que se pueda leer facilmente (contrastantes, opuestos)

## 3. ALCANCE (In-Scope)
- Maquetación y desarrollo del frontend completo.
- Integración de API Route (Serverless) para procesar el contacto.
- Configuración de pipeline CI/CD en Vercel (Preview/Prod).
- Configuración básica de SEO (Meta tags, OpenGraph).

## 4. LÍMITES (Out of Scope / Qué NO haremos)
- Backend complejo o base de datos relacional profunda (solo usaremos Serverless Functions).
- Diseño de marca/logo (se asume provisto).
- Autenticación de usuarios (no es necesario para un portfolio estático/contacto).
- E-commerce o pasarela de pagos.

## 5. DISEÑO UI/UX
- **Framework CSS:** Tailwind CSS.
- **Componentes:** Shadcn UI + Framer Motion (para micro-interacciones).
- **Estilo:** Corporativo, escaneable, alta densidad (Bento Grid).
- **Paleta/Tipografía:** *[Usuario: Especificar si hay fuentes o colores preferidos]* `[ {
  "theme": {
    "colors": {
      "bg": "#0B0F19",
      "text": "#F3F4F6",
      "accent": "#38BDF8",
      "muted": "#94A3B8"
    },
    "fontFamily": {
      "sans": ["Geist Sans", "Inter", "sans-serif"],
      "mono": ["Geist Mono", "JetBrains Mono", "monospace"]
    }
  }
} ]`

---
**Instrucción de Acción:**
Completa los corchetes `[ ]` con tus definiciones y avísame para consolidarlo en nuestra arquitectura y dar el primer paso técnico de inicialización.
