import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Warning = ({ warning, navi, onclickfn }) => {
  return (
    <div className="flex w-[300px] gap-1 font-semibold text-lg">
      <div className="text-slate-400">{warning}</div>
      <div className=" text-blue-400">
        <button className="hover:underline" onClick={onclickfn}>
          {navi}
        </button>
      </div>
    </div>
  );
};

export default Warning;
