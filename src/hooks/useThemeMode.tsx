'use client';

import { useCallback, useEffect } from 'react';
import { createGlobalState } from 'react-hooks-global-state';

const initialState = { isDarkMode: false };
const { useGlobalState } = createGlobalState(initialState);

export const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useGlobalState('isDarkMode');

  // Memoize these functions using useCallback
  const toDark = useCallback(() => {
    setIsDarkMode(true);
    const root = document.querySelector('html');
    if (!root) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (!root.classList.contains('dark')) {
      root.classList.add('dark');
    }
    localStorage.theme = 'dark';
  }, [setIsDarkMode]);

  const toLight = useCallback(() => {
    setIsDarkMode(false);
    const root = document.querySelector('html');
    if (!root) return;
    root.classList.remove('dark');
    localStorage.theme = 'light';
  }, [setIsDarkMode]);

  useEffect(() => {
    // This effect will run once when the component is mounted to set the theme from localStorage
    if (localStorage.theme === 'dark') {
      toDark();
    } else {
      toLight();
    }
  }, [toDark, toLight]); // The effect depends on toDark and toLight, which are memoized

  const toggleDarkMode = () => {
    // Toggle the dark mode state
    if (localStorage.theme === 'light') {
      toDark();
    } else {
      toLight();
    }
  };

  return {
    isDarkMode,
    toDark,
    toLight,
    toggleDarkMode,
  };
};
