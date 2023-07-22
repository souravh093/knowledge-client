import React from "react";

const Gallery = () => {
  const images = [
    "https://i.ibb.co/r58xdk6/istockphoto-844818242-612x612.jpg",
    "https://i.ibb.co/kJyRRNM/istockphoto-482362583-612x612.jpg",
    "https://i.ibb.co/D7YZ1PY/2017-04-provgrad2.jpg",
    "https://i.ibb.co/0B9mVNs/2017-04-provgrad1.jpg",
  ];
  const image2 = [
    "https://i.ibb.co/80Nd5G1/squad.png",
    "https://i.ibb.co/9yXdYDg/pexels-pixabay-267885.jpg",
  ];
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-semibold border-b-4 inline-block border-[#159A9C] pb-3 text-gray-800 mb-4">
        College graduates group pictures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow"
          >
            <img
              src={image}
              alt={`College Group ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {image2.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow"
          >
            <img
              src={image}
              alt={`College Group ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
