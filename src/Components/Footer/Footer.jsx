import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 text-gray-300 bg-[#005911]">
      <div className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl md:grid-cols-4">
        {/* Opening Times Section */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-white">OPENING TIMES</h2>
          <ul>
            <li className="mb-2">
              <strong>15 October 2025:</strong> <br />
              Tuesday | 10:00 - 17:00
            </li>
            <li className="mb-2">
              <strong>16 October 2025:</strong> <br />
              Wednesday | 10:00 - 17:00
            </li>
            <li>
              <strong>17 October 2025:</strong> <br />
              Thursday | 10:00 - 17:00
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-white">QUICK LINKS</h2>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="transition duration-300 hover:text-yellow-500"
              >
                Sponsorship Enquiry 
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition duration-300 hover:text-yellow-500"
              >
                Energy & Utilities News
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-white">CONTACT US</h2>
          <p>
            <a
              href="mailto:info@nigeria-energy.com"
              className="transition duration-300 hover:text-yellow-500"
            >
              Info@nigeria-energy.com
            </a>
          </p>
        </div>

        {/* Social Section */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-white">SOCIAL</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-4 mt-8 text-sm text-center border-t border-gray-700">
        <p>
          Copyright © 2024. All rights reserved. Informa Markets, a trading
          division of Informa PLC.
        </p>
        <div className="mt-2">
          <Link
            to="/"
            className="transition duration-300 hover:text-yellow-500"
          >
            Accessibility
          </Link>{" "}
          |{" "}
          <a
            href="#"
            className="transition duration-300 hover:text-yellow-500"
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="transition duration-300 hover:text-yellow-500"
          >
            Terms of Use
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="transition duration-300 hover:text-yellow-500"
          >
            Visitor Terms and Conditions
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="transition duration-300 hover:text-yellow-500"
          >
            Event Code of Conduct
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
