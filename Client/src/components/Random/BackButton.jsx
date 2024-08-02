import React from "react";

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
    >
      Go Back
    </button>
  );
};

export default BackButton;
