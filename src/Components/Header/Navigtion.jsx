import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/img/Renew Nigeria.jpg";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow ">
      <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 py-14 ">
          {/* Logo Section */}
          <div className="flex items-center ml-[-80px]">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-[180px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-10 text-l ">
                {/* About Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <NavLink
                    to="#"
                    className="text-gray-700 transition hover:text-teal-600"
                  >
                    About
                  </NavLink>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 z-10 w-48 mt-2 bg-white border border-gray-200 rounded shadow-md group-hover:block">
                      <li>
                        <NavLink
                          to="/about-us"
                          className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-teal-600"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sustainability"
                          className="block px-4 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-teal-600"
                        >
                          Sustainability
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Other Links */}
                <li>
                  <NavLink
                    to="/exhibit"
                    className="text-gray-700 transition hover:text-teal-600"
                  >
                    Exhibite
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/visit"
                    className="text-gray-700 transition hover:text-teal-600"
                  >
                    Visit
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/conference"
                    className="text-gray-700 transition hover:text-teal-600"
                  >
                    Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/media"
                    className="text-gray-700 transition hover:text-teal-600"
                  >
                    Media
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/travel"
                    className="text-gray-700 transition hover:text-teal-600"
                  >
                    Travel
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buttons */}
          <div className="items-center hidden gap-4 md:flex">
            <a
              href="#"
              className="px-5 py-2 font-medium text-teal-600 transition border-2 border-teal-600 rounded-md text-l hover:bg-teal-600 hover:text-white"
            >
              Enquire to Exhibit
            </a>
            <a
              href="#"
              className="px-5 py-2 font-medium text-white transition bg-teal-600 rounded-md shadow text-l hover:bg-teal-700"
            >
              Download Sales Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block p-2 text-gray-600 bg-gray-100 rounded md:hidden hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden">
            <ul className="space-y-4 text-xl font-semibold text-center">
              <li>
                <NavLink
                  to="/about-us"
                  className="block py-2 text-gray-700 transition hover:text-teal-600"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sustainability"
                  className="block py-2 text-gray-700 transition hover:text-teal-600"
                >
                  Sustainability
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/exhibit"
                  className="block py-2 text-gray-700 transition hover:text-teal-600"
                >
                  Exhibit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/visit"
                  className="block py-2 text-gray-700 transition hover:text-teal-600"
                >
                  Visit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/conference"
                  className="block py-2 text-gray-700 transition hover:text-teal-600"
                >
                  Conference
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/media"
                  className="block py-2 text-gray-700 transition hover:text-teal-600"
                >
                  Media
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/travel"
                  className="block py-2 text-gray-700 transition hover:text-teal-600"
                >
                  Travel
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pt-4 mt-4 font-medium text-teal-600 border-t border-gray-200 hover:bg-gray-50"
                >
                  Enquire to Exhibit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white transition bg-teal-600 rounded hover:bg-teal-700"
                >
                  Download Sales Brochure
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navigation;
