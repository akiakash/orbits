'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { pathOr } from 'ramda';
import { useRef } from 'react';

import { templateDetails } from '@/data/content';
import { useThemeMode } from '@/hooks/useThemeMode';

const DivSlider = () => {
  const { isDarkMode } = useThemeMode();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const animationStart = 0.2;

  const topDivX = useTransform(scrollYProgress, [animationStart, 1], [0, -100]);
  const bottomDivX = useTransform(
    scrollYProgress,
    [animationStart, 1],
    [0, 100],
  );

  return (
    <div
      ref={targetRef}
      className="relative hidden flex-col items-center justify-center gap-7 overflow-hidden md:flex"
    >
      <motion.div
        className="flex items-center gap-4 lg:gap-7"
        style={{
          x: topDivX,
        }}
      >
        {pathOr(
          [],
          [isDarkMode ? 'darkScreenshots' : 'whiteScreenshots'],
          templateDetails,
        ).map((screenshot: any) => (
          <div
            key={screenshot.src}
            className="min-w-[30%] overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={screenshot}
              alt="screenshot"
              className="size-full object-cover object-top"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center gap-4 lg:gap-7"
        style={{
          x: bottomDivX,
        }}
      >
        {pathOr(
          [],
          [isDarkMode ? 'darkScreenshots' : 'whiteScreenshots'],
          templateDetails,
        ).map((screenshot: any) => (
          <div
            key={screenshot.src}
            className="min-w-[30%] overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={screenshot}
              alt="screenshot"
              className="size-full object-cover object-top"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DivSlider;
