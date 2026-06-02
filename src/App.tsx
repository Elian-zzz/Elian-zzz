import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProjectsLayout from './components/ProjectsLayout';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetails, { type Project } from './components/ProjectDetails';
import projectsData from './data/projects.json';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  if (selectedProjectId) {
    const project = projectsData.find(p => p.id === selectedProjectId);
    if (project) {
      return <ProjectDetails project={project as unknown as Project} onBack={() => setSelectedProjectId(null)} />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D1D5DB] to-[var(--color-bg)] overflow-x-hidden w-full max-w-[100vw] antialiased selection:bg-[var(--color-accent)] selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <main>
        <ProjectsLayout onSelectProject={setSelectedProjectId} />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
