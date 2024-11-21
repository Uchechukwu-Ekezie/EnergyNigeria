import React from "react";
import { Link } from "react-router-dom";
import gov from "../../Assets/img/federalmin.webp";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

function HeroOne() {
  return (
    <div className="w-full h-auto bg-[#005911] py-12">
      <div className="flex flex-col items-center justify-between px-6 space-y-8 lg:flex-row lg:space-y-0 sm:px-12 lg:px-12 xl:px-24 w-[70%] mx-auto">
        {/* Social Media Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-white text-l sm:text-xl lg:text-2xl">
            Stay connected with us on social media #NE2024
          </h1>
          <div className="flex justify-center pt-6 space-x-6">
            <Link
              to="#"
              className="flex items-center justify-center w-12 h-12 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-12 h-12 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-12 h-12 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaLinkedinIn size={24} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-12 h-12 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-12 h-12 text-[#005911] bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>

        {/* Patronage Section */}
        <div className="flex flex-col items-center text-center lg:items-end mx-7">
          <h1 className="mb-4 text-lg font-bold text-yellow-400 lg:mb-8 sm:text-xl lg:text-2xl">
            Under the patronage of
          </h1>
          <img
            src={gov}
            alt="Federal Ministry Logo"
            className="w-48 h-auto lg:w-56 xl:w-48"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroOne;
