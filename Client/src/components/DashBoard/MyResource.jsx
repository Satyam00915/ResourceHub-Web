import React, { useEffect, useState } from "react";
import BinBtn from "../Random/BinBtn";
import axios from "axios";

const MyResource = ({ del, title, description, link, username, createdAt }) => {
  const handleDelete = (del) => {
    axios
      .delete("http://localhost:3000/rh/v1/resource/delete", {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
        data: {
          id: del,
        },
      })
      .then((response) => {
        window.location.reload();
      });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-[400px] transform transition-transform hover:-translate-y-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mb-4 block"
      >
        View Resource
      </a>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span>By {username}</span>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
        <BinBtn
          onclickfn={() => {
            handleDelete(del);
          }}
        />
      </div>
    </div>
  );
};

export default MyResource;
