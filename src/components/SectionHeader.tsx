import React from 'react';

import { templateDetails } from '@/data/content';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Heading from '@/shared/Heading/Heading';

import ImageScroll from './ImageScroll';

const SectionHeader = () => {
  return (
    <div className="">
      <div>
        <Heading desc={templateDetails.description} isMain isCenter>
          {templateDetails.name}
        </Heading>
      </div>

      <div className="flex items-center justify-center gap-5">
        <ButtonSecondary
          href="/#main"
          className="border-2 border-primary text-primary"
          sizeClass="px-6 py-3.5"
        >
          Explore Pages
        </ButtonSecondary>
      </div>

      <div className="mt-14">
        <ImageScroll />
      </div>
    </div>
  );
};

export default SectionHeader;
