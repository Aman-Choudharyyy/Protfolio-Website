
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Section from './components/Section';
import { ThemeProvider } from './contexts/ThemeContext';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Section id="about" title="About Me">
            <About />
          </Section>
          <Section id="experience" title="Work Experience">
            <WorkExperience />
          </Section>
          <Section id="education" title="Education">
            <Education />
          </Section>
          <Section id="skills" title="Skills">
            <Skills />
          </Section>
          <Section id="projects" title="Projects">
            <Projects />
          </Section>
          <Section id="contact" title="Get in Touch">
            <Contact />
          </Section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
