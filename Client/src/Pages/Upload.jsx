import axios from "axios";
import React, { useState } from "react";
import BackButton from "../components/Random/BackButton";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [field, setField] = useState("");
  const [fields] = useState([
    "Technology",
    "Business",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Web3",
    "Trading",
  ]); // Example fields

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:3000/rh/v1/resource/create",
        {
          Title: title,
          Description: description,
          link: link,
          field: field,
        },
        {
          headers: {
            Authorization: localStorage.getItem("authorization"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert(response.data.message);
      });
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
      <div className="absolute top-5 left-5">
        <BackButton />
      </div>
      <div className="max-w-lg w-full p-8 bg-gray-800 bg-opacity-90 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Upload a Resource
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="link"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Link
            </label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="field"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Field
            </label>
            <select
              id="field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select a field
              </option>
              {fields.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
