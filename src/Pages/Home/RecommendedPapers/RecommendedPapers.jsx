import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Container from "../../../components/Container/Container";
import Title from "../../../components/Title";
import { Link } from "react-router-dom";

const RecommendedPapers = () => {
  const { data: papers = [], isLoading } = useQuery({
    queryKey: ["research"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/research");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <Title title={"Recommended Research Papers"} />
      <Container>
        <div className="bg-white cursor-pointer">
          <ul>
            {papers.map((paper, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={`/researches/${paper._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {paper.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default RecommendedPapers;
