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
    container.style.transform = `translateX(-100%)`;

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
    container.style.transform = `translateX(-100%)`;

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
    <div className="relative h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh]">
      <div className="max-w-5xl mt-6 mx-auto overflow-hidden px-4 relative">
        <h2 className="text-center text-red-500 mb-4 font-bold text-lg md:text-xl">
          FEATURED EXHIBITORS 2024
        </h2>

        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-black z-10"
        >
          <FaChevronLeft className="text-5xl md:text-6xl lg:text-7xl" />
        </button>

        {/* Carousel Container */}
        <div
          className="flex items-center"
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
              style={{
                minWidth: "100%", // Take full width for one item per view
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-16 md:h-20 lg:h-24 mx-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-black z-10"
        >
          <FaChevronRight className="text-5xl md:text-6xl lg:text-7xl" />
        </button>
      </div>
    </div>
  );
};

export default ExhibitorsCarousel;
