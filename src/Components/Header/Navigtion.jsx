import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/img/Renew Nigeria.jpg";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className=" mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between py-14 ">
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
                    className="text-gray-700 hover:text-teal-600 transition"
                  >
                    About
                  </NavLink>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md group-hover:block z-10">
                      <li>
                        <NavLink
                          to="/about-us"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/sustainability"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition"
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
                    className="text-gray-700 hover:text-teal-600 transition"
                  >
                    Exhibit
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/visit"
                    className="text-gray-700 hover:text-teal-600 transition"
                  >
                    Visit
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/conference"
                    className="text-gray-700 hover:text-teal-600 transition"
                  >
                    Conference
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/media"
                    className="text-gray-700 hover:text-teal-600 transition"
                  >
                    Media
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/travel"
                    className="text-gray-700 hover:text-teal-600 transition"
                  >
                    Travel
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="rounded-md px-5 py-2 text-l font-medium border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition"
            >
              Enquire to Exhibit
            </a>
            <a
              href="#"
              className="rounded-md bg-teal-600 px-5 py-2 text-l font-medium text-white shadow hover:bg-teal-700 transition"
            >
              Download Sales Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            <ul className="space-y-4 text-center text-xl font-semibold">
              <li>
                <NavLink
                  to="/about-us"
                  className="block py-2 text-gray-700 hover:text-teal-600 transition"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sustainability"
                  className="block py-2 text-gray-700 hover:text-teal-600 transition"
                >
                  Sustainability
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/exhibit"
                  className="block py-2 text-gray-700 hover:text-teal-600 transition"
                >
                  Exhibit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/visit"
                  className="block py-2 text-gray-700 hover:text-teal-600 transition"
                >
                  Visit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/conference"
                  className="block py-2 text-gray-700 hover:text-teal-600 transition"
                >
                  Conference
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/media"
                  className="block py-2 text-gray-700 hover:text-teal-600 transition"
                >
                  Media
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/travel"
                  className="block py-2 text-gray-700 hover:text-teal-600 transition"
                >
                  Travel
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-teal-600 border-t border-gray-200 mt-4 pt-4 font-medium hover:bg-gray-50"
                >
                  Enquire to Exhibit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white bg-teal-600 rounded hover:bg-teal-700 transition"
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
