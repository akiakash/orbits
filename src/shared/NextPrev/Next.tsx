'use client';

import type { FC } from 'react';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

export interface NextProps {
  btnClassName?: string;
  className?: string;
  svgSize?: string;
  onClickNext?: () => void;
}

const Next: FC<NextProps> = ({
  className = 'relative',
  onClickNext = () => {},
  btnClassName = 'w-10 h-10',
  svgSize = 'w-5 h-5',
}) => {
  return (
    <div className={`nc-Next text-slate-500 dark:text-slate-400 ${className}`}>
      <button
        type="button"
        className={`${btnClassName} flex items-center justify-center rounded-full border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-600`}
        onClick={onClickNext}
        title="Next"
        data-glide-dir=">"
      >
        <BiChevronRight className={svgSize} />
      </button>
    </div>
  );
};

export default Next;
