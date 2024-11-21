import React, { useState, useEffect } from "react";
import slideshow1 from "../../Assets/img/slideshow/slideshow1.png";
import slideshow2 from "../../Assets/img/slideshow/slideshow2.png";
import slideshow3 from "../../Assets/img/slideshow/slideshow3.png";
import slideshow4 from "../../Assets/img/slideshow/slideshow4.png";
import slideshow5 from "../../Assets/img/slideshow/slideshow5.png";
import slideshow6 from "../../Assets/img/slideshow/slideshow6.png";
import slideshow7 from "../../Assets/img/slideshow/slideshow7.png";
import slideshow8 from "../../Assets/img/slideshow/slideshow8.png";



const SlideshowCard = () => {
  const images = [
    { name: "Slide show 1", logo: slideshow1 },
    { name: "Slide show 2", logo: slideshow2 },
    { name: "Slide show 3", logo: slideshow3 },
    { name: "Slide show 4", logo: slideshow4 },
    { name: "Slide show 5", logo: slideshow5 },
    { name: "Slide show 6", logo: slideshow6 },
    { name: "Slide show 7", logo: slideshow7 },
    { name: "Slide show 8", logo: slideshow8 },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-72 h-72 bg-gray-100 shadow-lg rounded-md overflow-hidden">
      <img
        src={images[currentImageIndex].logo}
        alt="Slideshow"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const TextCard = () => {
  return (
    <div className="w-72 h-72 bg-gray-100 shadow-lg rounded-md flex flex-col justify-center items-center text-center p-4">
      <h3 className="text-xl font-bold text-gray-800">Welcome to the Slideshow</h3>
      <p className="text-gray-600 mt-2">
        This card contains some static text while the other card displays a
        slideshow of images.
      </p>
    </div>
  );
};

const TwoCards = () => {
  return (
    <div className="flex justify-center items-center gap-6 p-6">
      <SlideshowCard />
      <TextCard />
    </div>
  );
};

export default TwoCards;