import React, { useEffect, useState } from "react";
import ResourceSkeletons from "../components/DashBoard/ResourceSkeleton";
import axios from "axios";
import BackButton from "../components/Random/BackButton";
import MyResource from "../components/DashBoard/MyResource";
import Resource from "../components/DashBoard/Resource";

const MyContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rh/v1/resource/fetch", {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setLoading(false);
        setContributions(response.data.resources.Resource);
      });
  }, []);

  return (
    <div className="h-screen bg-gray-100 flex flex-col m-8 justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <BackButton />
          <h1 className="text-3xl font-bold text-gray-800">My Contributions</h1>
        </div>
        <div className="text-gray-600 mb-4">
          Total Contributions: {contributions.length ? contributions.length : 0}
        </div>
        <div>
          {loading ? (
            <ResourceSkeletons times={2} />
          ) : (
            contributions.map((resource) => (
              <MyResource
                del={resource.id}
                title={resource.Title}
                description={resource.Description}
                username={resource.username}
                link={resource.link}
                createdAt={resource.createdAt}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyContributions;
