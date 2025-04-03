'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import { weekendSection } from '@/data/content';
import woman from '@/images/woman_ticket.png';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

const SectionWeekend = () => {
  return (
    <div className="container flex-row-reverse items-center justify-between space-y-10 pt-20 md:flex md:space-y-0 md:py-20">
      <motion.div
        initial={{ opacity: 0, x: '50%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="basis-1/2"
      >
        <Heading className="mb-5" isMain>
          {weekendSection.heading}
        </Heading>
        <p className="w-4/5 text-neutral-500 dark:text-neutral-300">
          {weekendSection.description}
        </p>
        <ButtonPrimary
          className="mt-5 flex items-center gap-2"
          sizeClass="px-5 py-3.5"
        >
          Explore our story
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
        </ButtonPrimary>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="basis-2/5"
      >
        <Image
          src={woman}
          alt="woman with ticket"
          className="bottom-0 w-full rounded-lg md:absolute md:w-2/5 2xl:w-1/4"
        />
      </motion.div>
    </div>
  );
};

export default SectionWeekend;
