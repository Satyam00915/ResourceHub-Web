import React from "react";

const Input = ({ label, type, onchangefn }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xl font-semibold text-blue-800">{label}</label>
      <input
        required
        type={type}
        className="w-fit bg-transparent outline-blue-400 text-gray-700 border border-gray-600 p-1 pl-1 pr-1 pb-1 rounded"
        onChange={onchangefn}
      />
    </div>
  );
};

export default Input;
