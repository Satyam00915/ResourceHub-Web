import React, { useEffect, useState } from "react";
import TopBar from "../components/DashBoard/TopBar";
import SearchBar from "../components/DashBoard/SearchBar";
import MyContributions from "../components/DashBoard/MyContributions";
import Resource from "../components/DashBoard/Resource";

const Dashboard = () => {
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
  const resources = [
    {
      firstName: "Vanshika",
      Resource: [
        {
          id: 8,
          link: "https://www.prisma.io/docs/orm/prisma-schema/data-model/relations",
          Title: "Prisma RelationShips Docs and More",
          Description:
            "Docs about sql relationships in prisma orm with examples",
          field: "Web Development and Backend related",
          createdAt: "2024-07-31T00:00:00.000Z",
          userId: 23,
        },
      ],
    },
  ];

  const [num1, setNum1] = useState(0);

  useEffect(function random() {
    const num = parseInt(Math.random() * 10);
    setNum1(num);
  }, []);

  return (
    <div className="flex flex-col gap-8 m-5">
      <TopBar color={colors[num1]} />
      <SearchBar />

      {resources.map((resource) => {
        return (
          <Resource
            key={resource.Resource.id}
            title={resource.Resource.Title}
            description={resource.Resource.Description}
            username={resource.firstName}
            link={resource.Resource.link}
            createdAt={resource.Resource.createdAt}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
