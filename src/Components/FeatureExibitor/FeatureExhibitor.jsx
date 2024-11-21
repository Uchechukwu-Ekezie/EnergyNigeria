import React, { useState } from "react";

const exhibitors = [
  { name: "JA SOLAR", logo: "path/to/ja-solar-logo.png" },
  { name: "NPP", logo: "path/to/npp-logo.png" },
  { name: "ATS trafo", logo: "path/to/ats-trafo-logo.png" },
  { name: "Meksan Transformer", logo: "path/to/meksan-logo.png" },
  { name: "Bestcom Tech", logo: "path/to/bestcom-logo.png" },
  { name: "Extra 1", logo: "path/to/extra1-logo.png" },
  { name: "Extra 2", logo: "path/to/extra2-logo.png" },
];

const ExhibitorsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 5; // Adjust based on your desired visible logos

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % exhibitors.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) => (prev - 1 + exhibitors.length) % exhibitors.length
    );
  };

  const visibleItems = exhibitors.slice(
    startIndex,
    startIndex + itemsPerView
  );

  // Handle wrapping around the array when items exceed the length
  const itemsToShow =
    visibleItems.length < itemsPerView
      ? visibleItems.concat(
          exhibitors.slice(0, itemsPerView - visibleItems.length)
        )
      : visibleItems;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-center text-red-500 mb-4">
        FEATURED EXHIBITORS 2024
      </h2>
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &#8249;
        </button>

        {/* Logos */}
        <div className="flex overflow-hidden justify-between w-full space-x-6">
          {itemsToShow.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center transition-opacity"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-16 mx-auto mb-2"
              />
              <p className="text-sm text-center font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ExhibitorsCarousel;
