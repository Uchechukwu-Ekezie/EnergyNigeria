import React from "react";
import solarpanel from "../../Assets/img/solarpane;.webp";
import Generator from "../../Assets/img/generator.webp";
import carpump from "../../Assets/img/carpump.webp";
import hightension from "../../Assets/img/hightension.webp";
import smarthouse from "../../Assets/img/smarthouse.webp";

const ProductSectors = () => {
  const sectors = [
    {
      title: "Renewables & Clean Energy",
      img: solarpanel,
    },
    {
      title: "Back-up Generators & Critical Power",
      img: Generator,
    },
    {
      title: "Energy Consumption & Management",
      img: carpump,
    },
    {
      title: "Transmission & Distribution",
      img: hightension,
    },
    {
      title: "Smart Solutions",
      img: smarthouse,
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
      <div className="grid grid-cols-5 gap-6 px-4">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="bg-pink-100 border border-yellow-500 rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={sector.img}
              alt={sector.title}
              className="h-40 w-40 object-contain mb-4"
            />
            <p className="text-orange-500 font-bold text-center text-lg">
              {sector.title}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg hover:bg-yellow-600">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ProductSectors;
