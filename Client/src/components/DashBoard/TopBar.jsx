import React, { useEffect, useState } from "react";
import UploadButton from "./UploadBtn";
import axios from "axios";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

const TopBar = ({ color }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("User");

  useEffect(() => {
    axios
      .get("http://localhost:3000/rh/v1/user/name", {
        headers: {
          Authorization: localStorage.getItem("authorization"),
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUser(response.data.name);
      });
  }, []);

  const styler = `text-white text-2xl font-semibold rounded-full ${color} w-[40px] h-[40px] pt-1 flex items-center justify-center`;

  return (
    <div className="flex justify-between items-center border border-gray-400 z-10 fixed top-0 left-0 right-0 rounded-full bg-gradient-to-t p-2 from-gray-500 backdrop-blur-xl">
      <div className="flex items-center">
        <img src="/Logo.png" alt="Logo" className="w-[100px]" />
        <div className="ml-4 text-xl font-semibold">Dashboard</div>
      </div>
      <div className="flex items-center gap-6">
        <UploadButton
          onclickfn={() => {
            navigate("/dashboard/upload");
          }}
        />
        <button
          onClick={() => {
            navigate("/dashboard/mycontributions");
          }}
          className="text-lg font-semibold hover:underline hover:text-purple-500"
        >
          My Contributions
        </button>
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">Welcome {user}!</div>
          <div className={styler}>{user.charAt(0)}</div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
