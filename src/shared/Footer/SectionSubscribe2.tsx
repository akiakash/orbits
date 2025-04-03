import Link from 'next/link';
import React from 'react';

import { footerData, socials } from '@/data/content';
import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';
import GetInTouch from '@/shared/Footer/GetInTouch';
import Logo from '@/shared/Logo/Logo';

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2 = ({ className = '' }: SectionSubscribe2Props) => {
  return (
    <div
      className={`nc-SectionSubscribe2 grid gap-10 lg:grid-cols-4 lg:gap-0 ${className}`}
    >
      <div className="col-span-1 space-y-5">
        <Logo />
        <p className="">{footerData.description}</p>
        <div className="flex gap-3">
          {socials.map((social) => (
            <ButtonCircle3
              key={social.href}
              href={social.href}
              className="border-2 border-primary text-primary"
              size="w-10 h-10"
            >
              {social.icon}
            </ButtonCircle3>
          ))}
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10 lg:ml-20">
        {footerData.footerLinks.map((section) => (
          <div key={section.title} className="space-y-5">
            <div className="text-2xl font-medium">{section.title}</div>
            <div className="flex flex-col items-start justify-center gap-5">
              {section.links.map((link) => (
                <div className="inline-block cursor-pointer" key={link.name}>
                  <Link
                    className="cursor-pointer text-neutral-500 hover:text-primary dark:text-neutral-300"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="space-y-5">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default SectionSubscribe2;
