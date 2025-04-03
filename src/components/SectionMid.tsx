import Image from 'next/image';
import React from 'react';

import { midSection } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Logo from '@/shared/Logo/Logo';

const SectionMid = () => {
  return (
    <div className="container">
      <div className="items-stretch justify-between overflow-hidden rounded-3xl bg-primary/5 shadow-lg md:flex">
        <div className="basis-[55%]">
          <Image
            src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cover image"
            className="size-full object-cover object-center"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex basis-2/5 flex-col justify-center gap-7 p-5 lg:p-0 lg:pr-10">
          <Logo />
          <h4 className="text-2xl font-medium">{midSection.heading}</h4>
          <p className="text-neutral-500">{midSection.description}</p>
          <div>
            <ButtonPrimary sizeClass="px-5 py-4" href={midSection.href}>
              EXPLORE TEMPLATES
            </ButtonPrimary>
          </div>
        </div>
      </div>
      <div className="mt-14 flex items-center justify-center" />
    </div>
  );
};

export default SectionMid;
