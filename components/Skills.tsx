
import React from 'react';
import SkillBadge from './SkillBadge';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {SKILLS.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  );
};

export default Skills;
