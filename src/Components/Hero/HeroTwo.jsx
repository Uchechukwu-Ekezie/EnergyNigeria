import React from "react";
import image1 from "../../Assets/img/ne---homepage-(20).webp";
import image2 from "../../Assets/img/ne---homepage-(19).webp";
import image3 from "../../Assets/img/ne---homepage-(17).webp";
import image4 from "../../Assets/img/ne---homepage-(18).webp";
import image5 from "../../Assets/img/ne---homepage-(16).webp";

function HeroTwo() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="grid grid-cols-1 gap-4 px-16 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-24 bg-slate-200">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden "
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default HeroTwo;
