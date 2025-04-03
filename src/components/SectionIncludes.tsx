'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { pathOr } from 'ramda';
import React from 'react';

import { includesCardsData, templateIncludes } from '@/data/content';
import { useThemeMode } from '@/hooks/useThemeMode';
import Heading from '@/shared/Heading/Heading';

const SectionIncludes = () => {
  const { isDarkMode } = useThemeMode();
  return (
    <div className="container">
      <Heading isCenter desc={templateIncludes.description}>
        {templateIncludes.heading}
      </Heading>

      <motion.div
        initial={{ opacity: 0, y: '50%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid gap-5 md:grid-cols-3 lg:gap-12"
      >
        {includesCardsData.map((DATA) => (
          <div
            key={DATA.title}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <div className="w-full overflow-hidden">
              <Image
                src={pathOr(
                  '',
                  [isDarkMode ? 'darkCoverImage' : 'whiteCoverImage'],
                  DATA,
                )}
                alt="cover-image"
                className="w-full object-cover object-top"
              />
            </div>
            <div
              className="flex w-full items-center justify-center border-t
             border-neutral-300 py-6 text-xl font-semibold dark:border-neutral-700"
            >
              {DATA.title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionIncludes;
