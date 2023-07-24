import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CollegeItem from "./CollegeItem/CollegeItem";
import { FaSearch } from "react-icons/fa";

const Colleges = () => {
  const [collage, setCollage] = useState([]);
  const [search, setSearch] = useState("");

  const { data: colleges = [], isLoading } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/colleges");
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

  const numberOfCardsToShow = 3;

  return (
    <div>
      <form className="flex items-center justify-center my-10">
        <input
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          type="search"
          className="border border-[#159A9C] px-5 py-3  outline-none text-2xl w-1/3"
          placeholder="search collage"
        />
        {/* <button
          onChange={(e) => {}}
          type="submit"
          className="px-5 bg-[#159A9C] py-4 border hover:text-[##B4BEC9] border-[#159A9C]"
        >
          <FaSearch className="text-2xl text-white" />
        </button> */}
      </form>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {colleges
          .filter((item) => {
            return search === ""
              ? item
              : item.college_name.toLocaleLowerCase().includes(search);
          })
          .slice(0, numberOfCardsToShow)
          .map((collage) => (
            <CollegeItem key={collage._id} data={collage} />
          ))}
        {/* {college.map((collage) => (
          <CollegeItem key={collage._id} data={collage} />
        ))} */}
      </div>
    </div>
  );
};

export default Colleges;
