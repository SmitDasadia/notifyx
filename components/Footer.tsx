import React, { useState } from "react";
import SettingsDialogBox from "./SettingsDialogBox";
import { FiSettings } from "react-icons/fi";

const Footer = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings((prevShowSettings) => !prevShowSettings);
  };

  return (
    <footer className="py-4 px-8 text-gray-600 body-font dark:border-dark-bg dark:bg-dark-bg dark:text-dark-text border-t">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">&copy; {new Date().getFullYear()} NotifyX</div>
        <button
          className="text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          onClick={toggleSettings}
        >
          <FiSettings size={24} />
        </button>
      </div>
      {showSettings && <SettingsDialogBox onClose={toggleSettings} />}
    </footer>
  );
};

export default Footer;
