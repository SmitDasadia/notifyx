import { useState,useEffect } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode preference exists in local storage
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference) {
      setIsDarkMode(JSON.parse(darkModePreference));
    }
  }, []);

  const handleToggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      onClick={handleToggleDarkMode}
      className="rounded-full w-12 h-6  relative"
    >
      {isDarkMode ? <FiMoon size={22}/> : <FiSun size={22}/>}
    </button>
  );
};

export default DarkModeToggle;
