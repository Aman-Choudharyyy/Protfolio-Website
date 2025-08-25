
import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import { PORTFOLIO_DATA } from '../constants';

const NAV_LINKS: { title: string; id: string }[] = [
  { title: 'About', id: 'about' },
  { title: 'Experience', id: 'experience' },
  { title: 'Education', id: 'education'},
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' },
  { title: 'Contact', id: 'contact' },
];


const Header: React.FC = () => {
  return (
    <header className="bg-rosewater/80 dark:bg-deep-twilight/80 backdrop-blur-sm fixed w-full z-20 top-0 left-0 border-b border-blushed-linen dark:border-soft-graphite">
      <nav className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-lg font-bold text-deep-rosewood dark:text-lavender-mist">
            {PORTFOLIO_DATA.name}
          </a>

          <div className="hidden md:flex items-center gap-6">
             {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-muted-cocoa dark:text-plum-grey hover:text-dusty-blush dark:hover:text-violet-glow transition-colors duration-300"
              >
                {link.title}
              </a>
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
