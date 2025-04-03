import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { footerBannerData } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

import ButtonSecondary from '../Button/ButtonSecondary';

const FooterBanner = () => {
  return (
    <div className="mx-auto rounded-2xl bg-primary p-5 text-white md:p-10 lg:p-16">
      <Heading className="mb-5" isMain isCenter>
        {footerBannerData.heading}
      </Heading>
      <p className="mx-auto w-4/5 text-center text-2xl md:w-1/2">
        {footerBannerData.descriptionTwo}
      </p>
      <div className="mt-5 flex items-center justify-center">
        <ButtonSecondary
          className="flex items-center gap-2 bg-white text-primary"
          sizeClass="px-6 py-4"
          href="/destination"
        >
          Get Started
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default FooterBanner;
