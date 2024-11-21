import React from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons
import vid from "../../Assets/video/nigeria-energy-exhibition-reel.mp4";

function Hero() {
  return (
    <div>
      <section className="relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        {/* Content */}
        <div className="relative flex items-center justify-center px-4 py-32 mx-auto lg:h-screen max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-lg text-center sm:text-left lg:max-w-2xl">
            {/* Title */}
            <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              West Africa's leading energy event
            </h1>

            {/* Date and Location */}
            <div className="mt-6 space-y-4 text-lg text-gray-300 sm:text-xl">
              <div className="flex items-center justify-center sm:justify-start">
                <FaRegCalendarAlt className="mr-3 text-2xl text-[#005911]" />
                <span>23 - 25 November 2022</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <FaMapMarkerAlt className="mr-3 text-2xl text-[#005911]" />
                <span>Landmark Centre, Lagos, Nigeria</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:justify-start">
              <a
                href="#"
                className="block w-full px-6 py-3 text-sm font-medium text-white bg-[#005911] rounded shadow hover:bg-green-800 focus:outline-none focus:ring active:bg-green-900 sm:w-auto"
              >
                Book a Stand
              </a>

              <a
                href="#"
                className="block w-full px-6 py-3 text-sm font-medium text-[#005911] bg-white rounded shadow hover:text-green-800 focus:outline-none focus:ring active:text-green-900 sm:w-auto"
              >
                Download Sales Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
