
import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center bg-soft-petal dark:bg-lavender-shadow/50 border border-blushed-linen dark:border-soft-graphite rounded-lg p-8">
      <h3 className="text-2xl font-bold text-deep-rosewood dark:text-lavender-mist">{EDUCATION.degree}</h3>
      <p className="text-lg font-medium text-dusty-blush dark:text-dusty-lavender mt-1">{EDUCATION.university}</p>
      <p className="text-muted-cocoa dark:text-plum-grey mt-2">{EDUCATION.period}</p>
      <p className="text-muted-cocoa dark:text-plum-grey mt-1">{EDUCATION.gpa}</p>
    </div>
  );
};

export default Education;
