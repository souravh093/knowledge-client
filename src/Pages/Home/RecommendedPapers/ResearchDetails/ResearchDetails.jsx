import React from "react";
import { useLoaderData } from "react-router-dom";

const ResearchDetails = () => {
  const data = useLoaderData();
  // const { title, details } = researchDetails;
  return (
    <div className="bg-white shadow-lg h-[calc(100vh-280px)] rounded-lg p-6 max-w-md mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div className="text-gray-600 mb-4">
        <p>Authors: {data.details.authors.join(", ")}</p>
        <p>Publication: {data.details.publication}</p>
        <p>Year: {data.details.year}</p>
      </div>
      <p className="text-gray-800">{data.details.abstract}</p>
    </div>
  );
};

export default ResearchDetails;
