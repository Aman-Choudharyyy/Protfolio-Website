
import React from 'react';
import { PORTFOLIO_DATA, ABOUT_CARDS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-deep-rosewood dark:text-lavender-mist sm:text-4xl">
          About Me
        </h2>
        <p className="mt-4 text-lg text-muted-cocoa dark:text-plum-grey">
          {PORTFOLIO_DATA.aboutSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-4 text-muted-cocoa dark:text-plum-grey leading-relaxed">
            {PORTFOLIO_DATA.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
        
        <div className="lg:col-span-2 space-y-8">
          {ABOUT_CARDS.map((card, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-soft-petal dark:bg-lavender-shadow/50 border border-blushed-linen dark:border-soft-graphite rounded-lg">
              <div className="flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-deep-rosewood dark:text-lavender-mist">{card.title}</h3>
                <p className="font-medium text-muted-cocoa dark:text-plum-grey">{card.subtitle}</p>
                <p className="mt-2 text-sm text-muted-cocoa dark:text-plum-grey">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;