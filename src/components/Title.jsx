import React from "react";

const Title = ({title}) => {
  return (
    <h2 className="text-4xl font-semibold border-b-4 inline-block border-[#159A9C] pb-3 text-gray-800 mb-4">
      {title}
    </h2>
  );
};

export default Title;
