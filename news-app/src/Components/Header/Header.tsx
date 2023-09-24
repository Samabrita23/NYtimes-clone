import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import NewYorkTimes from "../../Assets/NewYorkTimes.svg";
import Menu from "./Menu";
import "./Header.css"; // Import the CSS file

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the side menu
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search click
  const handleSearchClick = () => {
    // To implement search functionality here
  };

  return (
    <div className="header-container">
      <div className="header-wrapper">
        
        {/* Left Section */}
        <div className="left-section">

          {/* Hamburger Icon */}
          <FaBars
            className="hamburger-icon"
            onClick={handleMenuClick}
            aria-label="Menu"
          />

          {/* Search Icon */}
          <FaSearch
            className="search-icon"
            onClick={(e) => {
              e.preventDefault();
              handleSearchClick();
            }}
            aria-label="Search"
          />

          {/* Clickable word "World News" */}
          <a href="/" className="world-news">
            World News
          </a>
        </div>

        {/* Center Section (Logo) */}
        <div className="logo">
          <a href="/" className="text-black">
            <img
              src={NewYorkTimes}
              alt="The New York Times Logo"
              width="250px"
              onClick={() => {
                // To Handle logo click action here
              }}
            />
          </a>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Play Spelling Bee Button */}
          <button className="play-button">Play Spelling Bee</button>

          {/* Login Button */}
          <button className="login-button">Login</button>
        </div>
      </div>

      {/* Render the Menu component based on isMenuOpen state */}
      {isMenuOpen && <Menu />}
    </div>
  );
};

export default Header;
