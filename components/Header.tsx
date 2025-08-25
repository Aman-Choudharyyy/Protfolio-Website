
import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import type { SectionKey } from '../App';
import { PORTFOLIO_DATA } from '../constants';

interface HeaderProps {
  onNavLinkClick: (section: SectionKey) => void;
}

const NAV_LINKS: { title: string; section: SectionKey }[] = [
  { title: 'About', section: 'About' },
  { title: 'Experience', section: 'Experience' },
  { title: 'Skills', section: 'Skills' },
  { title: 'Projects', section: 'Projects' },
  { title: 'Contact', section: 'Contact' },
];


const Header: React.FC<HeaderProps> = ({ onNavLinkClick }) => {
  return (
    <header className="bg-rosewater/80 dark:bg-deep-twilight/80 backdrop-blur-sm fixed w-full z-20 top-0 left-0 border-b border-blushed-linen dark:border-soft-graphite">
      <nav className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-deep-rosewood dark:text-lavender-mist">
            {PORTFOLIO_DATA.name}
          </div>

          <div className="hidden md:flex items-center gap-6">
             {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => onNavLinkClick(link.section)}
                className="text-sm font-medium text-muted-cocoa dark:text-plum-grey hover:text-dusty-blush dark:hover:text-violet-glow transition-colors duration-300"
              >
                {link.title}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;