import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProjectsLayout from './components/ProjectsLayout';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] antialiased selection:bg-[var(--color-accent)] selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <main>
        <ProjectsLayout />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
