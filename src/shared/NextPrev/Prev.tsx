'use client';

import type { FC } from 'react';
import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';

export interface PrevProps {
  btnClassName?: string;
  className?: string;
  svgSize?: string;
  onClickPrev?: () => void;
}

const Prev: FC<PrevProps> = ({
  className = 'relative',
  onClickPrev = () => {},
  btnClassName = 'w-10 h-10',
  svgSize = 'w-5 h-5',
}) => {
  return (
    <div
      className={`nc-Prev text-slate-500 dark:text-slate-400 ${className}`}
      data-glide-el="controls"
    >
      <button
        type="button"
        className={`${btnClassName} flex items-center justify-center rounded-full border-2 border-transparent
         hover:border-slate-200 dark:hover:border-slate-600`}
        onClick={onClickPrev}
        title="Prev"
        data-glide-dir="<"
      >
        <BiChevronLeft className={svgSize} />
      </button>
    </div>
  );
};

export default Prev;
