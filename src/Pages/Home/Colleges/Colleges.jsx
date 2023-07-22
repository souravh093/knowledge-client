import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import CollegeItem from "./CollegeItem/CollegeItem";

const Colleges = () => {
  const { data: colleges = [] } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/collegeshome");
      return res.data;
    },
  });
  return (
    <div className="grid grid-cols-3 gap-5">
        {
            colleges.map(collage => <CollegeItem key={collage._id} data={collage} />)
        }
    </div>
  )
};

export default Colleges;
