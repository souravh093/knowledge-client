import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form className="flex items-center justify-center my-10">
      <input
        type="search"
        className="border border-[#159A9C] px-5 py-3  outline-none text-2xl w-1/3"
        placeholder="search collage"
      />
      <button type="submit" className="px-5 bg-[#159A9C] py-4 border hover:text-[##B4BEC9] border-[#159A9C]">
        <FaSearch className="text-2xl text-white" />
      </button>
    </form>
  );
};

export default Search;
