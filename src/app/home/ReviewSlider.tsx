'use client';

import type { FC } from 'react';
import React from 'react';

import ReviewCard from '@/components/ReviewCard';
import { reviewSection } from '@/data/content';
import Heading from '@/shared/Heading/Heading';
import Slider from '@/shared/Slider/Slider';

export interface SectionProductSliderProps {
  className?: string;
}

const data = reviewSection.reviews;

const ReviewSlider: FC<SectionProductSliderProps> = ({ className = '' }) => {
  return (
    <div className={`nc-ReviewSlider overflow-hidden ${className}`}>
      <Slider
        itemPerRow={1}
        hideNextPrev
        renderSectionHeading={({
          onClickPrev,
          onClickNext,
          showNext,
          showPrev,
        }) => {
          return (
            <Heading
              isMain
              hasNextPrev
              onClickPrev={onClickPrev}
              onClickNext={onClickNext}
              disableNext={!showNext}
              disablePrev={!showPrev}
            >
              {reviewSection.heading}
            </Heading>
          );
        }}
        data={data}
        renderItem={(item) => {
          if (!item) {
            return null;
          }
          return <ReviewCard key={item.name} {...item} />;
        }}
      />
    </div>
  );
};

export default ReviewSlider;
