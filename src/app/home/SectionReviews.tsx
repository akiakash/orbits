'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import woman from '@/images/woman_airport.jpg';

import ReviewSlider from './ReviewSlider';

const SectionReviews = () => {
  return (
    <div className="container flex-row-reverse items-center justify-between space-y-10 py-20 md:flex md:space-y-0">
      <motion.div
        className="basis-2/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={woman}
          alt="woman with ticket"
          className="w-full rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: '-50%' }}
        whileInView={{ opacity: 1, x: '0%' }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="basis-[55%] overflow-hidden"
      >
        <ReviewSlider />
      </motion.div>
    </div>
  );
};

export default SectionReviews;
