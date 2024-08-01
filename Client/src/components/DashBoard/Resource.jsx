import React from "react";

const Resource = ({ title, description, link, createdAt, username }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        Created by {username} on {createdAt}
      </p>
      <a href={link}>View Resource</a>
    </div>
  );
};

export default Resource;
