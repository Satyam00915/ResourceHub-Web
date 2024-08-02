import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
    >
      Go Back
    </button>
  );
};

export default BackButton;
