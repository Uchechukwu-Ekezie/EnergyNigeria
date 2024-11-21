import React, { useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import jasolar from "../../Assets/img/jasolar.webp";
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
    container.style.transform = `translateX(-200px)`;

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
    container.style.transform = `translateX(-200px)`;

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
    <div className="relative h-[50vh]">

    
    <div className="max-w-5xl mt-11  mx-auto overflow-hidden">
      <h2 className="text-center text-red-500 mb-6 font-bold text-2xl">
      SPONSORS FOR 2023
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        className="absolute left-[45px] top-1/2 transform -translate-y-1/2  text-black p-3"
        style={{
          // marginLeft: "-2rem", // Moves the arrow outside the carousel
        }}
      >
        <FaChevronLeft className="text-4xl" />
      </button>

      {/* Carousel Container */}
      <div
        className="flex items-center  mt-20 space-x-6"
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
            style={{ minWidth: "200px" }}
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-24 mx-auto object-contain"
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
        <FaChevronRight className="text-4xl" />
      </button>
    </div>
    </div>
  );
};

export default ExhibitorsCarousel;
