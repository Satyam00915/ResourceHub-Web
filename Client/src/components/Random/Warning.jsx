import React from "react";
import { Link } from "react-router-dom";

const Warning = ({ warning, navi, to }) => {
  return (
    <div className="flex gap-2 font-semibold text-lg">
      <div className="text-gray-800">{warning}</div>
      <div className="hover:underline text-blue-400">
        <Link to={to}>{navi}</Link>
      </div>
    </div>
  );
};

export default Warning;
