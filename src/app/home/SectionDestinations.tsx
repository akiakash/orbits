'use client';

import { motion } from 'framer-motion';
import React from 'react';

import DestinationCard from '@/components/DestinationCard';
import { destinationSection } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

const SectionDestinations = () => {
  return (
    <div className="container">
      <Heading isMain isCenter>
        {destinationSection.heading}
      </Heading>
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: '50%' }}
        whileInView={{ opacity: 1, y: '0%' }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {destinationSection.destinations.slice(0, 3).map((destination) => (
          <DestinationCard key={destination.country} {...destination} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionDestinations;
