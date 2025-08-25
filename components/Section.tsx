
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="w-full py-20 lg:py-28 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center text-deep-rosewood dark:text-lavender-mist sm:text-4xl md:text-5xl mb-12 lg:mb-16">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
