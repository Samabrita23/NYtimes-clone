import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-heading">World News</h1>
      <div className="navbar-border"></div>
      <div className="navbar-countries">
        <Link to="/country/africa" className="country-link">
          AFRICA
        </Link>
        <Link to="/country/americas" className="country-link">
          AMERICAS
        </Link>
        <Link to="/country/asia" className="country-link">
          ASIA
        </Link>
        <Link to="/country/australia" className="country-link">
          AUSTRALIA
        </Link>
        <Link to="/country/canada" className="country-link">
          CANADA
        </Link>
        <Link to="/country/europe" className="country-link">
          EUROPE
        </Link>
        <Link to="/country/middle-east" className="country-link">
          MIDDLE EAST
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
