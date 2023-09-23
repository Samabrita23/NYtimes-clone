import React from "react";

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
    <div className="bg-gray-800 text-white p-4">
      <ul>
        {menuItems1.map((item, index) => (
          <li key={index} className="hover:text-gray-400 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-600 my-4"></div>
      <ul>
        {menuItems2.map((item, index) => (
          <li key={index} className="hover:text-gray-400 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
