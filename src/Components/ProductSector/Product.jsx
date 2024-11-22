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
    <div className="w-full py-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Product sectors</h2>
        <p className="mt-4 text-yellow-500">
          Nigeria Energy unites the West African energy community through FIVE
          dedicated product sector
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[7c0%] mx-auto">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 transition-transform bg-pink-100 border border-yellow-500 rounded-lg hover:scale-105"
          >
            <img
              src={sector.img}
              alt={sector.title}
              className="object-contain w-40 h-40 mb-4"
            />
            <p className="text-lg font-bold text-center text-orange-500">
              {sector.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button className="px-8 py-3 text-lg text-white bg-yellow-500 rounded-full hover:bg-yellow-600">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ProductSectors;
