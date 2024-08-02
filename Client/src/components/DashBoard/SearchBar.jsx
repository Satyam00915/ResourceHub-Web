import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBar = ({ setResources }) => {
  const [searchParam, setSearchparam] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .post(
          "http://localhost:3000/rh/v1/resource/search",
          {
            searchParam,
          },
          {
            headers: {
              Authorization: localStorage.getItem("authorization"),
            },
          }
        )
        .then((response) => {
          setResources(response.data.Results);
        });
    }, 700);

    return () => clearTimeout(timer);
  }, [searchParam]);
  return (
    <div className="flex items-center gap-4 m-5 w-[400px] relative left-2">
      <input
        className="w-full border border-blue-400 p-2 rounded-md"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchparam(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
