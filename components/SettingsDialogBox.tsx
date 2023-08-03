import React from "react";
import DarkMode from "./Darkmode";
import SelectCountry from "./SelectCountry";

interface SettingsDialogBoxProps {
  onClose: () => void;
}

const SettingsDialogBox: React.FC<SettingsDialogBoxProps> = ({ onClose }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode] = React.useState(storedDarkMode);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md mx-4 p-6 rounded-lg shadow-lg">
        <h2
          className={`text-2xl font-bold mb-4 ${
            darkMode ? "dark:text-white" : ""
          }`}
        >
          Update Your Settings
        </h2>
        <h2
          className={`text-sm font-semibold mb-2 ${
            darkMode ? "dark:text-white" : ""
          }`}
        >
          Make Your Experience Unique - Personalize and Save Your Preferences!
        </h2>

        <div className="flex items-center justify-between pt-10">
          <span className={`text-lg ${darkMode ? "dark:text-white" : ""}`}>
            Theme
          </span>
          <DarkMode />
        </div>

        <div className="flex items-center justify-between pt-10">
          <span className={`text-lg ${darkMode ? "dark:text-white" : ""}`}>
            Country
          </span>
         <SelectCountry/>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 my-4 pb-10" />

        <div className="flex justify-end">
          <button
            className={`text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mr-2 rounded-md  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialogBox;
