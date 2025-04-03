import type { ButtonHTMLAttributes, FC } from 'react';
import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const PrevBtn: FC<Props> = ({ className = 'w-10 h-10 text-lg', ...args }) => {
  return (
    <button
      type="button"
      className={`PrevBtn ${className} dark:border-neutral-6000 inline-flex items-center justify-center rounded-full
       border border-neutral-200 bg-white hover:border-neutral-300 dark:bg-neutral-900 dark:hover:border-neutral-500`}
      {...args}
    >
      <BiChevronLeft className="size-5" />
    </button>
  );
};

export default PrevBtn;
