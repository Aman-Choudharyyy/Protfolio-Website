
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

interface HeroProps {
}

const SocialIcon: React.FC<{ href: string; ariaLabel: string; children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-flex items-center justify-center w-12 h-12 bg-soft-petal dark:bg-lavender-shadow/50 rounded-full text-muted-cocoa dark:text-plum-grey hover:text-deep-rosewood dark:hover:text-lavender-mist hover:bg-rosewater dark:hover:bg-lavender-shadow transition-all duration-300"
    >
        {children}
    </a>
);

const Hero: React.FC<HeroProps> = () => {
  const { name, title, about, contact } = PORTFOLIO_DATA;

  const handleDownload = () => {
    const link = document.createElement('a');
    // Using a relative path is crucial here. The hosting environment prepends
    // its own path, and an absolute path ('/...') was causing a double slash ('//')
    // in the final URL, leading to a 404 error.
    link.href = 'Aman_Choudhary_Resume.pdf';
    link.setAttribute('download', 'Aman_Choudhary_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    // Clean up by removing the temporary link.
    link.parentNode?.removeChild(link);
  };

  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-rosewater dark:bg-deep-twilight relative overflow-hidden px-4 scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-soft-petal/30 via-rosewater to-rosewater dark:from-lavender-shadow/30 dark:via-deep-twilight dark:to-deep-twilight"></div>
      <div className="container mx-auto z-10 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt={name}
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-dusty-blush/50 dark:border-violet-glow/50 shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-4 justify-center md:justify-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-deep-rosewood dark:text-lavender-mist tracking-tight">
                {name}
              </h1>
              <span className="hidden sm:block h-8 w-px bg-blushed-linen dark:bg-soft-graphite"></span>
              <p className="mt-2 sm:mt-0 text-lg sm:text-xl md:text-2xl text-muted-cocoa dark:text-plum-grey font-medium">
                {title}
              </p>
            </div>
            
            <p className="mt-4 max-w-lg mx-auto md:mx-0 text-muted-cocoa dark:text-plum-grey">
              {about.join(' ')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-dusty-blush dark:bg-violet-glow px-8 py-3 text-base font-medium text-white dark:text-deep-twilight shadow-sm filter hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-champagne-gold focus:ring-offset-2 focus:ring-offset-rosewater dark:focus:ring-offset-deep-twilight transition-all duration-300"
              >
                View My Work
              </a>
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center rounded-lg border-2 border-dusty-blush dark:border-violet-glow bg-transparent px-8 py-3 text-base font-medium text-dusty-blush dark:text-violet-glow hover:bg-soft-petal dark:hover:bg-lavender-shadow/50 focus:outline-none focus:ring-2 focus:ring-muted-cocoa dark:focus:ring-plum-grey focus:ring-offset-2 focus:ring-offset-rosewater dark:focus:ring-offset-deep-twilight transition-colors duration-300"
              >
                Download Resume
              </button>
            </div>
            <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
              <SocialIcon href={contact.github} ariaLabel="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href={contact.linkedin} ariaLabel="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </SocialIcon>
              <SocialIcon href={contact.x} ariaLabel="X (formerly Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </SocialIcon>
              <SocialIcon href={`mailto:${contact.email}`} ariaLabel="Email">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
