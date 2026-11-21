import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactFooter } from './components/ContactFooter';
import {
  AboutJourneyModal,
  AllProjectsModal,
  ContactMessageModal,
  CVModal,
  ProjectDetailModal,
} from './components/Modals';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const notify = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2600);
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreJourney = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e2e1] font-sans antialiased overflow-x-clip selection:bg-[#C81D1D] selection:text-white grain-bg">
      <Navbar activeSection={activeSection} onOpenCV={() => setShowCVModal(true)} />

      <main className="pt-[80px]">
        <HeroSection
          onOpenCV={() => setShowCVModal(true)}
          onExploreJourney={handleExploreJourney}
        />
        <AboutSection onOpenAboutModal={() => setShowAboutModal(true)} />
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllProjects={() => setShowAllProjects(true)}
        />
        <ExperienceSection />
        <ContactFooter
          onOpenContactForm={() => setShowContactModal(true)}
          onNotify={notify}
        />
      </main>

      {/* Modals */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {showAllProjects && (
        <AllProjectsModal
          onClose={() => setShowAllProjects(false)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}
      {showAboutModal && (
        <AboutJourneyModal onClose={() => setShowAboutModal(false)} />
      )}
      {showCVModal && (
        <CVModal onClose={() => setShowCVModal(false)} onNotify={notify} />
      )}
      {showContactModal && (
        <ContactMessageModal
          onClose={() => setShowContactModal(false)}
          onNotify={notify}
        />
      )}

      {/* Subtle Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-full bg-[#141416] border border-[#E62E2E]/60 text-xs font-medium text-white shadow-xl"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
