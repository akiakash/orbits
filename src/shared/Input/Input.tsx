import type { InputHTMLAttributes } from 'react';
import React from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeClass?: string;
  fontClass?: string;
  rounded?: string;
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = 'bg-[#111827]',
      sizeClass = 'h-11 px-4 py-3',
      fontClass = 'text-sm font-normal',
      rounded = 'rounded-full',
      type = 'text',
      ...args
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`focus:ring-opacity/25 block w-full focus:border-primary focus:ring focus:ring-primary disabled:bg-neutral-800/80 ${rounded} ${fontClass} ${sizeClass} ${className}`}
        {...args}
      />
    );
  },
);

export default Input;
