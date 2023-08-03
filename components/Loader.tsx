import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8 min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
    </div>
  );
};

export default Loader;
