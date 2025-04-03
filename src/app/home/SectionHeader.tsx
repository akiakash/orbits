'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { headingSection } from '@/data/content';
import hero from '@/images/woman_suitcase.png';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';

import { RatingTag, ServiceTag, WhatsAppTag } from './MiniHeaderTags';

const SectionHeader = () => {
  return (
    <div className="relative items-stretch justify-between space-y-10 rounded-3xl bg-primary/30 px-10 dark:bg-primary/20 md:flex md:space-y-0 lg:px-20">
      <div className="basis-3/5 py-10 lg:py-20">
        <h1
          className="text-[2.5rem] font-semibold lg:text-6xl"
          style={{ lineHeight: '1em' }}
        >
          {headingSection.heading}
        </h1>
        <p className="my-5 w-[90%] text-neutral-800 dark:text-neutral-300 md:my-10">
          {headingSection.description}
        </p>
        <ButtonPrimary
          className="flex items-center gap-2"
          sizeClass="px-5 py-3.5"
        >
          Get Started
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
        </ButtonPrimary>
      </div>
      <motion.div
        className="relative basis-[45%] 2xl:basis-[37%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
      >
        <WhatsAppTag />
        <RatingTag />
        <ServiceTag />
        <Image
          src={hero}
          alt="hero image"
          className="bottom-0 z-0 w-full md:absolute"
        />
      </motion.div>
    </div>
  );
};

export default SectionHeader;
