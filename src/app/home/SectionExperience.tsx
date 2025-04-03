'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { BiSolidWallet } from 'react-icons/bi';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { experienceSection } from '@/data/content';
import family from '@/images/family.jpg';
import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

const SectionExperience = () => {
  const renderTag = () => {
    return (
      <div className="glassmorphism absolute -left-20 bottom-10 hidden w-3/5 items-start gap-2 rounded-lg p-2 shadow-sm lg:flex">
        <ButtonCircle3
          className="bg-orange-200 text-orange-400"
          size="w-10 h-10"
        >
          <BiSolidWallet className="text-2xl" />
        </ButtonCircle3>
        <div className="basis-4/5 space-y-1">
          <p className="font-medium">Affordable prices</p>
          <p className="text-sm">
            We provide some very affordable prices compared to others
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="container flex-row-reverse items-center justify-between space-y-10 md:flex md:space-y-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative basis-2/5"
      >
        {renderTag()}
        <Image src={family} alt="hiker" className="w-full rounded-lg" />
      </motion.div>
      <motion.div
        className="basis-1/2"
        initial={{ opacity: 0, x: '-50%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <Heading className="mb-5" isMain>
          {experienceSection.heading}
        </Heading>
        <p className="w-4/5 text-neutral-500">
          {experienceSection.description}
        </p>
        <ButtonPrimary
          className="mt-5 flex items-center gap-2"
          sizeClass="px-5 py-3.5"
        >
          Explore our story
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
        </ButtonPrimary>
      </motion.div>
    </div>
  );
};

export default SectionExperience;
