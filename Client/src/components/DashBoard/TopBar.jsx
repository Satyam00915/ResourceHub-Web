import React from "react";
import UploadButton from "./Upload";

const TopBar = ({ color }) => {
  const styler = `text-white text-2xl font-semibold rounded-full ${color} w-[40px] h-[40px] pt-1 relative`;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <img src="/Logo.png" alt="Logo" className="w-[100px]" />
        </div>
        <div className="text-xl font-semibold">Dashboard</div>
      </div>
      <div className="flex items-center gap-16">
        <div>
          <UploadButton />
        </div>
        <div className="text-lg font-semibold">
          <button className="hover:underline hover:text-purple-500">
            My Contributions
          </button>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-lg font-semibold">Welcome User!</div>
          <div className="flex text-center">
            <div className={styler}>U</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
