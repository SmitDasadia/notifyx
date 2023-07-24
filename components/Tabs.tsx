import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const categories = [
  "Headlines",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const Tabs: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Headlines");

  const handleTabChange = (category: string) => {
    if (category === "Headline"){
      router.push("/")
    } else {

      setActiveTab(category);
    }
  };

  useEffect(() => {
    const currentPath = router.asPath;
    const activeCategory = categories.find(
      (category) => `/${category.toLowerCase()}` === currentPath
    );
    if (activeCategory) {
      setActiveTab(activeCategory);
    }
  }, [router.asPath]);

  return (
    <div className="flex items-center lg:justify-center mx-auto overflow-x-auto pt-10 mb-4 pb-10  scrollbar-none">
      {categories.map((category) => (
        <Link href={`/${category.toLowerCase()}`} key={category}>
          <button
            key={category}
            className={`relative mx-2 px-4 py-2 ${
              activeTab === category
                ? "font-bold text-blue-500"
                : "text-gray-500 hover:text-gray-800"
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
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
