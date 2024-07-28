import React from "react";

const Button = ({ btnText, onclickfn }) => {
  return (
    <div className="m-1 w-[125px]">
      <button
        onClick={onclickfn}
        className="hover:bg-blue-700 w-full pl-5 pr-5 pb-1.5 pt-1.5 font-semibold  border border-gray-500 active:opacity-75 rounded bg-blue-700 text-white"
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
