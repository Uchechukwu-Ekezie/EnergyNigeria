import React from "react";
import { Link } from "react-router-dom";
import gov from '../../Assets/img/federalmin.webp'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // React Icons import

function HeroOne() {
  return (
    <div className="h-60 w-full bg-teal-600">
      <div className="flex justify-between items-center px-24 lg:px-52">
        <div>
        <h1 className="text-2xl text-white text-center ">
          Stay connected with us on social media #NE2024
        </h1>
        <div className="flex justify-center pt-5 space-x-4">
          <Link
            to="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
      <div>
        <div className=" pt-10">
         <h1 className="mb-8 text-lg text-white">Under the patronage of</h1>
         <img src={gov} alt="img" className="w-full h-full" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroOne;
