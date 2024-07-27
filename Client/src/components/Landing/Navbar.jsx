import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center">
        <img src="/Logo.png" alt="Logo" className="w-[100px]" />
        <div className="text-2xl font-bold text-gray-700">Resource Hub</div>
      </div>
      <div className="flex items-center text-lg justify-around marker:border border-gray-500 shadow-md shadow-gray-600 w-[450px] h-[60px] m-2 rounded-full">
        <div className="m-2 hover:text-purple-700">
          <Link to={"/dashboard"}>DashBoard</Link>
        </div>
        <div className="m-2 hover:text-purple-700">
          <Link to={"/signup"}>SignUp</Link>
        </div>
        <div className="m-2 hover:text-purple-700">
          <Link to={"/signin"}>Login</Link>
        </div>
        <div className="m-2 hover:text-purple-700">
          <Link to={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
