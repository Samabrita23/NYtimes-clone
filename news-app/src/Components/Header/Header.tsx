import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Logo from "../Assets/Logo.png";

import Menu from "./Menu"; // Import the Menu component

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
 
  //to handle side menu
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchClick = () => {
    //to handle search 
  };

  return (
    <div className="bg-white">
      <nav className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">

            {/* Hamburger Icon */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick();
              }}
              className="text-gray-600 hover:text-black cursor-pointer mr-4"
            >
              <FaBars />
            </a>

            {/* Search Icon */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleSearchClick();
              }}
              className="text-gray-600 hover:text-black cursor-pointer"
            >
              <FaSearch />
            </a>
          </div>
          <a href="/" className="text-black">
            <img
              src={Logo}
              alt="The New York Times"
              width="250px"
              onClick={() => {
                // Handle logo click action here
              }}
            />
          </a>
          <div className="ml-auto">
            {/* Play Spelling Bee Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-700">
              Play Spelling Bee
            </button>
            {/* Login Button */}
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Login
            </button>
          </div>
        </div>
      </nav>
      {/* Render the Menu component based on isMenuOpen state */}
      {isMenuOpen && <Menu />}
    </div>
  );
};

export default Header;

