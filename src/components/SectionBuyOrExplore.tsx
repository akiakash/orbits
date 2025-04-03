'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { buyOrExplore } from '@/data/content';

import BannerCard from './BannerCard';

const SectionBuyOrExplore = () => {
  return (
    <div className="container -mt-64">
      <motion.div
        className="grid gap-10 lg:grid-cols-2"
        initial={{ opacity: 0, y: '50%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {buyOrExplore.map((sectionData, index) =>
          index === 0 ? (
            <BannerCard
              key={sectionData.heading}
              details={sectionData}
              bgColor="bg-primary"
              textColor="text-white"
              isSecondary
            />
          ) : (
            <BannerCard
              key={sectionData.heading}
              details={sectionData}
              bgColor="bg-neutral-50"
              textColor="text-black"
            />
          ),
        )}
      </motion.div>
    </div>
  );
};

export default SectionBuyOrExplore;
