import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rosewater dark:bg-deep-twilight border-t border-blushed-linen dark:border-soft-graphite">
      <div className="container mx-auto px-4 md:px-6 py-6 text-center text-muted-cocoa dark:text-plum-grey">
        <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;