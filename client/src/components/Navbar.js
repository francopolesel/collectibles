import React from "react";
import { Link } from "react-router-dom";
import collectibles from "../images/collectibles.png";

const Navbar = () => {
  return (
    <nav className="bg-sky-500 fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 flex-wrap">
        <Link to="/" className="flex items-center">
          <img src={collectibles} className="w-16 h-16" alt="logo" />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-100 hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-100 hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-100 hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
