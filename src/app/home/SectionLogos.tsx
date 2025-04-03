import Image from 'next/image';
import React from 'react';

import { logos } from '@/data/content';

const SectionLogos = () => {
  return (
    <div className="container grid grid-cols-5 gap-5 md:gap-20">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center justify-center">
          <Image
            src={logo}
            alt="logo"
            className="w-full grayscale dark:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionLogos;
