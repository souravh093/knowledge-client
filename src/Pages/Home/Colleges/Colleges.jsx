import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import CollegeItem from "./CollegeItem/CollegeItem";

const Colleges = () => {
  
  const { data: colleges = [], isLoading } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/collegeshome");
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
    <div className="grid grid-cols-3 gap-5">
        {
            colleges.map(collage => <CollegeItem key={collage._id} data={collage} />)
        }
    </div>
  )
};

export default Colleges;
