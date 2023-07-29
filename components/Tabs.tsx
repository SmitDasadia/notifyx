import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import DarkModeToggle from "./DarkModeSwitch";

const categories = [
  "Headlines",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const Tabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Headlines");

  const handleTabChange = (category: string) => {
    if (category === "Headlines") {
      router.push("/");
      setActiveTab("Headlines")
    } else {
      setActiveTab(category);
      router.push(`/${category.toLowerCase()}`);
    }
  };

  return (
    <div className="flex items-center lg:justify-center mx-auto overflow-x-auto pt-10 pb-10   dark:bg-dark-bg dark:text-dark-text scrollbar-none">
      {categories.map((category) => (
        <button
          key={category}
          className={`relative  mx-2 px-4 py-2 ${
            activeTab === category
              ? " text-blue-500 dark:text-zinc-50 font-bold text-lg"
              : "text-gray-500 hover:text-gray-800 font-semibold"
          }`}
          onClick={() => handleTabChange(category)}
        >
          {category}
          {activeTab === category && (
            <span
              className="absolute bottom-0 left-0 right-0 mx-auto w-2 h-2 bg-blue-500 rounded-full"
              style={{ transform: "translateY(100%)" }}
            />
          )}
        </button>
      ))}
      <DarkModeToggle/>
    </div>
  );
};

export default Tabs;
