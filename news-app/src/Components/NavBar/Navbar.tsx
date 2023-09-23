import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css"; 

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-heading">World News</h1>
      <div className="navbar-border"></div>
      <div className="navbar-countries">
        <Link to="/africa" className="country-link">
          AFRICA
        </Link>
        <Link to="/americas" className="country-link">
          AMERICAS
        </Link>
        <Link to="/asia" className="country-link">
          ASIA
        </Link>
        <Link to="/australia" className="country-link">
          AUSTRALIA
        </Link>
        <Link to="/canada" className="country-link">
          CANADA
        </Link>
        <Link to="/europe" className="country-link">
          EUROPE
        </Link>
        <Link to="/middle-east" className="country-link">
          MIDDLE EAST
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
