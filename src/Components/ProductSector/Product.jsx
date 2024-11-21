import React from "react";

const ProductSectors = () => {
  const sectors = [
    {
      title: "Renewables & Clean Energy",
      img: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Back-up Generators & Critical Power",
      img: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Energy Consumption & Management",
      img: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Transmission & Distribution",
      img: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      title: "Smart Solutions",
      img: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Product sectors</h2>
        <p className="text-yellow-500 mt-4">
          Nigeria Energy unites the West African energy community through FIVE
          dedicated product sectors.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="bg-pink-100 border border-yellow-500 rounded-lg p-4 w-64 flex flex-col items-center"
          >
            <img
              src={sector.img}
              alt={sector.title}
              className="h-24 mb-4"
            />
            <p className="text-orange-500 font-bold text-center">
              {sector.title}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ProductSectors;
