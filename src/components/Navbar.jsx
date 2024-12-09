import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';  // Import icons for a modern hamburger

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-blue-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-semibold tracking-tight">
          Digital Library
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu (Horizontal) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-yellow-300 transition-all duration-200 ease-in-out"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Slide-in effect) */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-700 bg-opacity-90 absolute inset-0 flex justify-center items-center z-50">
          <div className="flex flex-col space-y-6 text-white text-xl font-medium text-center">
            <Link
              to="/"
              className="hover:text-yellow-300 transition-all duration-200 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <br></br>
            <Link
              to="/add"
              className="hover:text-yellow-300 transition-all duration-200 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Add Item
            </Link>
            <br></br>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-all duration-200 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <br></br>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition-all duration-200 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
