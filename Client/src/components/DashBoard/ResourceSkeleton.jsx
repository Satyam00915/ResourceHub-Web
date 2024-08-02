import React from "react";

const ResourceSkeleton = () => (
  <div className="bg-white shadow-md rounded-lg p-6 m-4 w-[390px] animate-pulse">
    <div className="h-6 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="flex justify-between items-center text-gray-500 text-sm">
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  </div>
);

const ResourceSkeletons = ({ times }) => {
  const items = Array.from({ length: times });

  return (
    <div className="flex flex-wrap gap-5 justify-between">
      {items.map((_, index) => {
        return <ResourceSkeleton key={index} />;
      })}
    </div>
  );
};

export default ResourceSkeletons;
