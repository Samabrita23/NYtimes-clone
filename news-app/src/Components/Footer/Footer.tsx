// Footer.tsx

import React from 'react';
import './Footer.css';
import { MdSubscriptions, MdGames } from "react-icons/md";
import { BsNewspaper } from "react-icons/bs";
import { GiCook } from "react-icons/gi";
import NewYorkTimes from "../../Assets/NewYorkTimes.svg";

const Footer: React.FC = () => {
  // Define an object containing the list items for each section
  const sections = [
    {
      title: "News",
      items: [
        "Home Page", "World", "Coronavirus", "U.S", "Politics",
        "New York", "Business", "Tech", "Science", "Sport",
        "Obituaries", "Today's Paper", "Corrections",
      ],
    },
    {
      title: "Opinion",
      items: [
        "Today's Opinion", "Op-Ed Columnists", "Editorials",
        "Op-Ed Contributors", "Letters", "Sunday Review",
        "Video: Opinion",
      ],
    },
    {
      title: "Arts",
      items: [
        "Today's Arts", "Art & Design", "Books", "Dance", "Movies",
        "Music", "Pop Culture", "Television", "Theater", "Video Arts",
      ],
    },
    {
      title: "Living",
      items: [
        "At Home", "Automobiles", "Games", "Education", "Food", "Health",
        "Jobs", "Love", "Magazine", "Parenting", "Real Estate",
        "Recipes", "Styles", "T Magazine", "Travel",
      ],
    },
    {
      title: "More",
      items: [
        "Reader Center", "Wirecutter", "Live Events", "The Learning Network",
        "Tools and Services", "Multimedia Photography", "Video", "Newsletter",
        "TimesMachine", "NYT Store", "Times Journeys", "Manage My Account",
        "NYT Licensing",
      ],
    },
  ];

  // Define an object for subscription items
  const subscriptionItems = [
    { icon: <BsNewspaper />, text: "Home Delivery" },
    { icon: <MdSubscriptions />, text: "Subscription" },
    { icon: <MdGames />, text: "Games" },
    { icon: <GiCook />, text: "Cooking" },
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <img src={NewYorkTimes} alt="New York Times logo" />
        <div className="footer-row">

          {sections.map((section, index) => (
            <div className="footer-column" key={index}>
              <h3><b>{section.title}</b></h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column">
            <div className="footer-subscribe">
              <h3><b> Subscribe</b></h3>
              {subscriptionItems.map((item, itemIndex) => (
                <a href="#" key={itemIndex}>
                  {item.icon} {item.text}
                </a>
              ))}
              <ul className="list-divider-1">
                <li>Email Newsletter</li>
                <li>Corporate Subscription</li>
                <li>Education Rate</li>
              </ul>
              <ul className="list-divider-2">
                <li>Mobile Application</li>
                <li>Replica Edition</li>
                <li>International</li>
                <li>Canada</li>
                <li>Espanol</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2023 The New York Times Company</div>

          <div>NYTCo</div>
          <div>Contact Us</div>
          <div>Accessibilty</div>
          <div>Work with us</div>
          <div>Advertisers</div>
          <div>T Brand Studio</div>
          <div>Your Ad Choices</div>
          <div> Privacy Policy</div>
          <div>Terms of Services</div>
          <div>Terms of sales</div>
          <div>site map</div>
          <div>Help</div>
          <div>Subscription</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
