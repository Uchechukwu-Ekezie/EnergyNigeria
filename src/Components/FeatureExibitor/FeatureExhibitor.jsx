import React, { useEffect, useRef, useState } from "react";

import extra1 from "../../Assets/img/xtrapower.webp";
import lucy from "../../Assets/img/lucy-logo.webp";
import sunbet from "../../Assets/img/sunbelt.webp";
import nnpc from "../../Assets/img/npp.webp";
import ats from "../../Assets/img/ats.webp";
import meksan from "../../Assets/img/meksan.png";
import sub from "../../Assets/img/subwebp.webp";
import bestcom from "../../Assets/img/bestcom.webp";
import tbpower from "../../Assets/img/tbpower.webp";
import fronius from "../../Assets/img/fronius-logo.webp";
import jasolar from "../../Assets/img/jasolar.webp";

const exhibitors = [
  { name: "JA SOLAR", logo: jasolar },
  { name: "NPP", logo: nnpc },
  { name: "ATS trafo", logo: ats },
  { name: "Meksan Transformer", logo: meksan },
  { name: "Bestcom Tech", logo: bestcom },
  { name: "TB power", logo: tbpower },
  { name: "Extra 2", logo: extra1 },
  { name: "Fronius", logo: fronius },
  { name: "Lucy", logo: lucy },
  { name: "Sunbet", logo: sunbet },
  { name: "Sub", logo: sub },
];

const ExhibitorsCarousel = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

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
    <div
      className="relative max-w-5xl mx-auto overflow-hidden"
      style={{ height: "350px" }} // Adjusted height
    >
      <h2
        className="text-center text-red-500 mb-6"
        style={{
          fontSize: "1.8rem", // Slightly reduced heading size
          fontWeight: "bold", // Bold heading
        }}
      >
        FEATURED EXHIBITORS 2024
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute left-0 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 top-1/2 transform -translate-y-1/2"
        style={{
          fontSize: "1.5rem", // Adjusted size for arrows
          color: "black",
          fontWeight: "bold",
        }}
      >
        &#8249;
      </button>

      <div
        className="flex items-center space-x-6"
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
              className="h-24 mx-auto" // Larger image size
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute right-0 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 top-1/2 transform -translate-y-1/2"
        style={{
          fontSize: "1.5rem", // Adjusted size for arrows
          color: "black",
          fontWeight: "bold",
        }}
      >
        &#8250;
      </button>
    </div>
  );
};

export default ExhibitorsCarousel;
