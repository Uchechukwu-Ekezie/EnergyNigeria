import React, { useState, useEffect, useRef } from "react";
import slideshow1 from "../../Assets/img/slideshow/slideshow1.png"; // Replace with your actual image path

// Slideshow Component
const SlideshowCard = () => {
  const images = [
    { name: "Slide show 1", logo: slideshow1 },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  const startSlideshow = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, [images.length]);

  return (
    <div className="w-full sm:w-1/2 flex items-start justify-center p-4">
      <div className="rounded-md overflow-hidden shadow-md">
        <img
          src={images[currentImageIndex].logo}
          alt={images[currentImageIndex].name}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

// Static Text Card Component
const TextCard = () => {
  return (
    <div className="w-full sm:w-1/2 bg-white shadow-md rounded-md p-6 sm:p-10 text-left flex flex-col justify-between">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        2023 Show Highlights
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <span className="font-bold">10th anniversary</span> edition of
        Nigeria Energy, held under the patronage of the{" "}
        <span className="font-bold">Federal Ministry of Power, Nigeria</span>,
        was inaugurated by Chief Adebayo Adelabu, Honourable Minister of Power,
        Federal Republic of Nigeria.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nigeria Energy 2023 featured 3 days of engaging discussions and
        networking connecting over <span className="font-bold">6,500+</span>{" "}
        local and international energy stakeholders from across the power value
        chain.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Enabling charting pathways to energy efficiency and sufficiency in West
        Africa, the conference discussed real-life solutions and actionable
        recommendations.
      </p>
    </div>
  );
};

// TwoCards Component
const TwoCards = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 flex flex-col sm:flex-row items-stretch gap-6 sm:gap-12">
      <SlideshowCard />
      <TextCard />
    </div>
  );
};

export default TwoCards;
