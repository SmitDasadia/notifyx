/* eslint-disable react/jsx-no-undef */

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for the user's preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === 'true');
      document.documentElement.classList.toggle('dark', savedDarkMode === 'true');
    } else {
      // If no preference is found in localStorage, use the user's system preference
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      className=" right-4 p-2 dark:bg-dark-bg dark:text-dark-text"
      onClick={handleToggle}
    >
      {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
