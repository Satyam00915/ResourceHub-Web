import React, { useEffect, useState } from "react";
import TopBar from "../components/DashBoard/TopBar";
import SearchBar from "../components/DashBoard/SearchBar";
import Resource from "../components/DashBoard/Resource";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ResourceSkeletons from "../components/DashBoard/ResourceSkeleton";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("authorization")) {
      navigate("/signin");
    } else {
      axios
        .get("http://localhost:3000/rh/v1/resource/fetchall", {
          headers: {
            Authorization: localStorage.getItem("authorization"),
          },
        })
        .then((response) => {
          setLoading(false);
          setResources(response.data.Resources);
        });
    }
  }, []);

  const colors = [
    "bg-yellow-700",
    "bg-green-700",
    "bg-blue-700",
    "bg-red-700",
    "bg-purple-700",
    "bg-pink-700",
    "bg-orange-700",
    "bg-teal-700",
    "bg-indigo-700",
    "bg-gray-700",
  ];
  const [Resources, setResources] = useState([]);
  const [num1, setNum1] = useState(0);

  useEffect(function random() {
    const num = parseInt(Math.random() * 10);
    setNum1(num);
  }, []);

  return (
    <div className="flex flex-col gap-8 m-5">
      <TopBar color={colors[num1]} />
      <SearchBar setResources={setResources} />

      <div className="flex flex-wrap justify-between">
        {loading ? (
          <ResourceSkeletons times={6} />
        ) : (
          Resources.map((resource) => {
            return (
              <Resource
                key={resource.id}
                title={resource.Title}
                description={resource.Description}
                username={resource.username}
                link={resource.link}
                createdAt={resource.createdAt}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Dashboard;
