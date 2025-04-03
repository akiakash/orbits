import React from 'react';
import { MdCopyright } from 'react-icons/md';

import FooterBanner from './FooterBanner';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="container z-10">
        <FooterBanner />
      </div>
      <div className="-z-10 -mt-40 pt-64">
        <div className="container">
          {/* <SectionSubscribe2 /> */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 border-t border-neutral-300 py-6 dark:border-neutral-700 md:gap-0 2xl:py-10">
            <div className="flex justify-center">
              <p className="text-gray-400 flex items-center text-sm md:text-base">
                <span>
                  <MdCopyright />
                </span>
                {/* ThemeAlchemy. All rights reserved. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
