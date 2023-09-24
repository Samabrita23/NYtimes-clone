import React from "react";
import "./Menu.css";

const Menu: React.FC = () => {
  const menuItems1 = [
    "HomePage",
    "World",
    "Business",
    "U.S. Politics",
    "U.S News",
    "Sports",
    "Health",
    "N.Y.",
    "Opinion",
    "Tech",
    "Science",
  ];

  const menuItems2 = [
    "Arts",
    "Book Review",
    "Style",
    "Food",
    "Travel",
    "Magazine",
    "T Magazine",
    "Real Estate",
    "Obituaries",
    "Video",
    "Graphics",
  ];

  return (
    <div className="menu-container">
      <ul className="menu-items">
        {menuItems1.map((item, index) => (
          <li key={index} className="menu-item">
            {item}
          </li>
        ))}
      </ul>
      <div className="menu-divider"></div>
      <ul className="menu-items">
        {menuItems2.map((item, index) => (
          <li key={index} className="menu-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;