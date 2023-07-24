import React from "react";

const RecommendedPapers = ({ papers }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Recommended Research Papers</h2>
      <ul>
        {papers.map((paper, index) => (
          <li key={index} className="mb-2">
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {paper.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedPapers;
