
import React, { useState, ReactNode } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ThemeProvider } from './contexts/ThemeContext';

// Import section components to be rendered in the modal
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export type SectionKey = 'About' | 'Experience' | 'Skills' | 'Projects' | 'Contact';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; content: ReactNode } | null>(null);

  const sectionComponents: Record<SectionKey, React.ReactNode> = {
    'About': <About />,
    'Experience': <WorkExperience />,
    'Skills': <Skills />,
    'Projects': <Projects />,
    'Contact': <Contact />
  };

  const openModal = (title: SectionKey) => {
    setModalContent({ title, content: sectionComponents[title] });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header onNavLinkClick={openModal} />
        <main className="flex-grow">
          <Hero onViewWorkClick={() => openModal('Projects')} />
        </main>
        <Footer />
        {modalContent && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={modalContent.title}
          >
            {modalContent.content}
          </Modal>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;