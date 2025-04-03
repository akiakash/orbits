import type { ReactNode } from 'react';
import React from 'react';

import type { NextPrevProps } from '../NextPrev/NextPrev';
import NextPrev from '../NextPrev/NextPrev';

export interface HeadingProps extends NextPrevProps {
  fontClass?: string;
  desc?: ReactNode;
  hasNextPrev?: boolean;
  isCenter?: boolean;
  isMain?: boolean;
  children?: ReactNode;
  titleTag?: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = '',
  className = 'mb-10',
  isCenter = false,
  isMain,
  hasNextPrev,
  titleTag = '',
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col justify-between sm:flex-row sm:items-end ${className}`}
    >
      <div
        className={
          isCenter ? 'mx-auto mb-2 w-full max-w-3xl text-center' : 'max-w-3xl'
        }
      >
        {titleTag && (
          <span className="mb-5 block text-xl font-semibold text-primary">
            {titleTag}
          </span>
        )}
        <h2
          className={`${
            isMain ? 'lineHeight text-3xl lg:text-[55px]' : 'text-3xl'
          } font-medium`}
          {...args}
        >
          {children}
        </h2>
        {desc && (
          <span className="mt-5 block text-xl font-normal text-neutral-500">
            {desc}
          </span>
        )}
      </div>
      {hasNextPrev && !isCenter && (
        <div className="mt-4 flex shrink-0 justify-end sm:ml-2 sm:mt-0">
          <NextPrev {...args} />
        </div>
      )}
    </div>
  );
};

export default Heading;
