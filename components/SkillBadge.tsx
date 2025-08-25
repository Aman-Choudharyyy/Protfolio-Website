import React from 'react';
import type { Skill } from '../types';

const SkillBadge: React.FC<Skill> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-3 bg-soft-petal dark:bg-lavender-shadow/50 border border-blushed-linen dark:border-soft-graphite rounded-lg px-4 py-2 text-muted-cocoa dark:text-plum-grey hover:text-dusty-blush dark:hover:text-dusty-lavender hover:border-champagne-gold dark:hover:border-dusty-lavender transition-all duration-300 cursor-default">
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;