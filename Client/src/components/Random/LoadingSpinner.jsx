// components/LoadingSpinner.js
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#1a1a2e]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-b-8 border-[#6a0dad] border-solid"></div>
    </div>
  );
};

export default LoadingSpinner;
