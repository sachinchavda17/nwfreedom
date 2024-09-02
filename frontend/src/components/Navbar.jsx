import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-secondary-dark shadow-lg fixed w-full z-10 top-0 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://nwfreedom.org/wp-content/uploads/2023/12/logo.png"
            alt="Club Logo"
            className="h-16 w-16 mr-8 ml-5"
          />
        </div>

        {/* Desktop Menu */}
        <div className="text-text-dark  hidden md:flex space-x-8 justify-center flex-grow">
          <Link
            to="/"
            className="font-semibold hover:text-red-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" font-semibold hover:text-red-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            className=" font-semibold hover:text-red-600 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="font-semibold hover:text-red-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
        <button onClick={toggleDarkMode} className="text-white mr-5 text-2xl">
          {!isDarkMode ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
        </button>
        {/* Donate Button */}
        <div className="hidden md:flex">
          <a
            href="https://nwfreedom.org/donate/"
            target="_blank"
            className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-500 transition-colors duration-200"
          >
            Donate
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="text-text-dark hover:text-accent-cyan md:hidden flex items-center">
          <button onClick={toggleMenu} className=" focus:outline-none">
            {isOpen ? (
              <XIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-text-dark bg-secondary-dark font-semibold shadow-lg p-4">
          <Link
            to="/"
            className="block hover:bg-red-600 rounded p-2 py-2 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:bg-red-600 rounded p-2 py-2 transition-colors duration-200"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block hover:bg-red-600 rounded p-2 py-2 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-red-600 rounded p-2 py-2 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <a
            href="https://nwfreedom.org/donate/"
            target="_blank"
            className="block bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-500 transition-colors duration-200 mt-2"
            // onClick={toggleMenu}
          >
            Donate
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
