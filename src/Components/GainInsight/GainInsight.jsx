import React from "react";
import boom from "../../Assets/img/lithum boom.webp";
import solar from "../../Assets/img/the-rise-of-solar-home-systems.webp";
import renew from "../../Assets/img/renewable.webp";
import out from "../../Assets/img/outlook.webp";

const reports = [
  {
    title: "Nigeria's lithium boom: Powering the battery industry",
    image: boom, // Replace with the actual image path
    buttonText: "Download the report",
  },
  {
    title: "The rise of solar home system in West Africa",
    image: solar, // Replace with the actual image path
    buttonText: "Download the report",
  },
  {
    title: "The Renewable Energy roadmap report",
    image: renew, // Replace with the actual image path
    buttonText: "Download the report",
  },
  {
    title: "West Africa's energy outlook report",
    image: out, // Replace with the actual image path
    buttonText: "Download the report",
  },
];

const GainInsight = () => {
  return (
    <section className="bg-[#005911] text-white py-12 w-full">
      <div className="px-4 mx-auto text-center max-w-7xl">
        {/* Section Header */}
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          Gain insights into the region's energy sector
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Regional industry reports brought to you by the editorial team behind Energy & Utilities
        </p>
        {/* Reports Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-[#005911]  hover:shadow-lg transition-all"
            >
              {/* Report Image */}
              <img
                src={report.image}
                alt={report.title}
                className="object-cover w-full h-48 mb-4 rounded-md"
              />
              {/* Report Title */}
              <h3 className="mb-4 text-lg font-bold text-center md:text-xl">
                {report.title}
              </h3>
              {/* Download Button */}
              <button className="px-6 py-2 text-lg font-bold text-white bg-[#FAA61A] rounded-md hover:bg-yellow-500 transition">
                {report.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GainInsight;
