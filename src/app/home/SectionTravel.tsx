'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { travelSection } from '@/data/content';
import hiker from '@/images/hiker.png';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

const SectionTravel = () => {
  const renderTag = () => {
    return (
      <div className="glassmorphism absolute -right-20 bottom-10 hidden w-1/2 rounded-lg p-2 shadow-sm lg:block">
        <h2 className="text-2xl font-medium">London</h2>
        <p className="text-sm">London tower bridge sunset on thames river</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-orange-400">$499.50</span>
          <ButtonPrimary fontSize="text-sm" sizeClass="px-3 py-2">
            Start Trip
          </ButtonPrimary>
        </div>
      </div>
    );
  };
  return (
    <div className="container items-center justify-between space-y-10 md:flex md:space-y-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative basis-2/5"
      >
        {renderTag()}
        <Image src={hiker} alt="hiker" className="w-full rounded-lg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: '50%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="basis-1/2"
      >
        <Heading className="mb-5" isMain>
          {travelSection.heading}
        </Heading>
        <p className="w-4/5 text-neutral-500">{travelSection.description}</p>
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

export default SectionTravel;
