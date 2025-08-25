import React from 'react';
import { EXPERIENCE } from '../constants';

const BriefcaseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rosewater dark:text-deep-twilight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
);


const WorkExperience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        {/* The vertical timeline bar, perfectly centered with the markers */}
        <div className="absolute w-0.5 h-full bg-blushed-linen dark:bg-soft-graphite top-0 left-4 -translate-x-1/2"></div>
        
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="relative pl-12">
               {/* Timeline Marker */}
               <div className="absolute top-1 left-4 -translate-x-1/2 h-8 w-8 rounded-full bg-dusty-blush dark:bg-violet-glow flex items-center justify-center ring-4 ring-rosewater dark:ring-deep-twilight">
                  <BriefcaseIcon />
               </div>

                {/* Content Card */}
                <div className="bg-soft-petal dark:bg-lavender-shadow/50 p-6 rounded-lg border border-blushed-linen dark:border-soft-graphite">
                    <p className="text-sm font-semibold text-dusty-blush dark:text-dusty-lavender mb-1 tracking-wider">{exp.period}</p>
                    <h3 className="text-2xl font-bold text-deep-rosewood dark:text-lavender-mist">{exp.role}</h3>
                    <p className="text-lg font-medium text-muted-cocoa dark:text-plum-grey mb-3">{exp.company}</p>
                    <p className="text-muted-cocoa dark:text-plum-grey leading-relaxed">
                        {exp.description}
                    </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;