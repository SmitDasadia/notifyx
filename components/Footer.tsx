import React from "react";
import DarkModeToggle from "./DarkModeSwitch";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font dark:border-slate-600 dark:bg-dark-bg dark:text-dark-text border-t">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        
        <p className="text-sm sm:ml-4 sm:pl-4   sm:py-2 sm:mt-0 mt-4">
          © 2023 Notifyx
          
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <DarkModeToggle/>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
