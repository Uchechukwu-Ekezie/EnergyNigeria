import React from "react";

const reports = [
  {
    title: "Nigeria's lithium boom: Powering the battery industry",
    image: "path/to/image1.jpg", // Replace with the actual image path
    buttonText: "Download the report",
  },
  {
    title: "The rise of solar home system in West Africa",
    image: "path/to/image2.jpg", // Replace with the actual image path
    buttonText: "Download the report",
  },
  {
    title: "The Renewable Energy roadmap report",
    image: "path/to/image3.jpg", // Replace with the actual image path
    buttonText: "Download the report",
  },
  {
    title: "West Africa's energy outlook report",
    image: "path/to/image4.jpg", // Replace with the actual image path
    buttonText: "Download the report",
  },
];

const GainInsight = () => {
  return (
    <section className="bg-[#8A0150] text-white py-12">
      <div className="px-4 mx-auto text-center max-w-7xl">
        {/* Section Header */}
        <h2 className="mb-4 text-3xl font-bold">
          Gain insights into the region's energy sector
        </h2>
        <p className="mb-8 text-lg">
          Regional industry reports brought to you by the editorial team behind Energy & Utilities
        </p>
        {/* Reports Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 text-black transition bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              {/* Report Image */}
              <img
                src={report.image}
                alt={report.title}
                className="object-cover w-full h-40 mb-4 rounded-md"
              />
              {/* Report Title */}
              <h3 className="mb-4 font-semibold text-center text-md">
                {report.title}
              </h3>
              {/* Download Button */}
              <button className="px-6 py-2 text-white transition bg-orange-500 rounded-md hover:bg-orange-600">
                {report.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GainInsight;