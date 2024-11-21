<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


import extra1 from "../../Assets/img/xtrapower.webp";
import lucy from "../../Assets/img/lucy-logo.webp";
import sunbet from "../../Assets/img/sunbelt.webp";
=======
import React, { useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import jasolar from "../../Assets/img/jasolar.webp";
>>>>>>> 7730401cbaeb3a37785ecfae1833082a888b6d33
import nnpc from "../../Assets/img/npp.webp";
import ats from "../../Assets/img/ats.webp";
import meksan from "../../Assets/img/meksan.png";
import bestcom from "../../Assets/img/bestcom.webp";

const exhibitors = [
  { name: "JA SOLAR", logo: jasolar },
  { name: "NPP", logo: nnpc },
  { name: "ATS trafo", logo: ats },
  { name: "Meksan Transformer", logo: meksan },
  { name: "Bestcom Tech", logo: bestcom },
];

const ExhibitorsCarousel = () => {
  const containerRef = useRef(null);

  const scrollNext = () => {
    const container = containerRef.current;
    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = `translateX(-150px)`;

    setTimeout(() => {
      container.style.transition = "none";
      container.appendChild(container.firstElementChild);
      container.style.transform = "translateX(0)";
    }, 500);
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    container.style.transition = "none";
    container.insertBefore(
      container.lastElementChild,
      container.firstElementChild
    );
    container.style.transform = `translateX(-150px)`;

    setTimeout(() => {
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = "translateX(0)";
    }, 0);
  };

  useEffect(() => {
    const container = containerRef.current;

    const clonedNodes = [...container.children].map((child) =>
      child.cloneNode(true)
    );
    clonedNodes.forEach((node) => container.appendChild(node));

    let autoScroll = setInterval(scrollNext, 5000);

    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div
      className="relative max-w-5xl mx-auto overflow-hidden"
      style={{ height: "300px" }} // Adjusted height
    >
      <h2
        className="text-center text-red-500 mb-6"
        style={{
          fontSize: "1.8rem", // Slightly reduced heading size
          fontWeight: "bold", // Bold heading
        }}
      >
=======
    <div className="relative h-[50vh]">

    
    <div className="max-w-5xl mt-11  mx-auto overflow-hidden">
      <h2 className="text-center text-red-500 mb-6 font-bold text-2xl">
>>>>>>> 7730401cbaeb3a37785ecfae1833082a888b6d33
        FEATURED EXHIBITORS 2024
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        className="absolute left-[45px] top-1/2 transform -translate-y-1/2  text-black p-3"
        style={{
          // marginLeft: "-2rem", // Moves the arrow outside the carousel
        }}
      >
<<<<<<< HEAD
        <MdArrowBackIosNew />
=======
        <FaChevronLeft className="text-4xl" />
>>>>>>> 7730401cbaeb3a37785ecfae1833082a888b6d33
      </button>

      {/* Carousel Container */}
      <div
<<<<<<< HEAD
        className="flex items-center space-x-4" // Adjusted spacing between exhibitors
=======
        className="flex items-center  mt-20 space-x-6"
>>>>>>> 7730401cbaeb3a37785ecfae1833082a888b6d33
        ref={containerRef}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          transition: "transform 0.5s ease",
          willChange: "transform",
        }}
      >
        {exhibitors.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ minWidth: "150px" }} // Reduced container size
          >
            <img
              src={item.logo}
              alt={item.name}
<<<<<<< HEAD
              className="h-16 mx-auto" // Reduced image size
              style={{ objectFit: "contain" }} // Ensure images are not distorted
=======
              className="h-24 mx-auto object-contain"
>>>>>>> 7730401cbaeb3a37785ecfae1833082a888b6d33
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        className="absolute right-[45px] top-1/2 transform -translate-y-1/2  text-black p-3"
        style={{
          // marginRight: "-2rem", // Moves the arrow outside the carousel
        }}
      >
<<<<<<< HEAD
       <MdArrowForwardIos />
=======
        <FaChevronRight className="text-4xl" />
>>>>>>> 7730401cbaeb3a37785ecfae1833082a888b6d33
      </button>
    </div>
    </div>
  );
};

export default ExhibitorsCarousel;
