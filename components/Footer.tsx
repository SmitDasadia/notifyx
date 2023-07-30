import React from "react";
import DarkModeToggle from "./DarkModeSwitch";

const Footer = () => {
  return (
    <footer className=" py-4 px-8 text-gray-600 body-font dark:border-dark-bg dark:bg-dark-bg dark:text-dark-text border-t">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">&copy; {new Date().getFullYear()} NotifyX</div>
        <DarkModeToggle/>
      </div>
    </footer>
  );
};

export default Footer;
