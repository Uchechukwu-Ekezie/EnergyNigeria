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
          className="absolute inset-0 h-[85%] w-full object-cover"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-xl font-semibold text-white sm:text-4xl">
              West Africa's leading energy event
            </h1>

            {/* Date and Location */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-300 text-base sm:text-lg">
                <FaRegCalendarAlt className="text-teal-600 mr-3 text-xl" />
                <span>23 - 25 November 2022</span>
              </div>

              <div className="flex items-center text-gray-300 text-base sm:text-lg">
                <FaMapMarkerAlt className="text-teal-600 mr-3 text-xl" />
                <span>Landmark Centre, Lagos, Nigeria</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              >
                Book a Stand
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
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
