import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-4 m-5 w-[400px] relative left-2">
      <input
        className="w-full border border-blue-400 p-2 rounded-md"
        type="text"
        placeholder="Search..."
      />
      <button className="bg-gray-400 rounded-xl p-1 active:bg-gray-300">
        <img className="w-[40px]" src="/search.svg" alt="Search Icon" />
      </button>
    </div>
  );
};

export default SearchBar;
