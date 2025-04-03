'use client';

import React from 'react';
import { BiSolidMoon } from 'react-icons/bi';
import { BsSunFill } from 'react-icons/bs';

import { useThemeMode } from '@/hooks/useThemeMode';

export interface SwitchDarkModeProps {
  className?: string;
}
const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({ className = '' }) => {
  const { toggleDarkMode, isDarkMode } = useThemeMode();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={`flex size-12 items-center justify-center self-center rounded-full text-2xl hover:bg-neutral-100 focus:outline-none dark:hover:bg-neutral-800 md:text-3xl ${className}`}
    >
      <span className="sr-only">Enable dark mode</span>
      {isDarkMode ? (
        <BsSunFill className="size-7" aria-hidden="true" />
      ) : (
        <BiSolidMoon className="size-7" aria-hidden="true" />
      )}
    </button>
  );
};

export default SwitchDarkMode;
