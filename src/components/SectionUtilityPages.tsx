'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { utilityPages } from '@/data/content';
import { useThemeMode } from '@/hooks/useThemeMode';
import Heading from '@/shared/Heading/Heading';

import PreviewCard from './PreviewCard';

const SectionUtilityPages = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <div className="container">
      <Heading isCenter desc={utilityPages.description}>
        {utilityPages.heading}
      </Heading>

      <motion.div
        className="grid gap-5 md:grid-cols-3 lg:gap-12"
        initial={{ opacity: 0, y: '50%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {utilityPages.pages.map((DATA) => (
          <PreviewCard
            key={DATA.pageName}
            previewData={DATA}
            isDarkMode={isDarkMode}
          />
        ))}
      </motion.div>

      <div className="mt-14 flex justify-center" />
    </div>
  );
};

export default SectionUtilityPages;
