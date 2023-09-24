import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Country.css";
import formatDateAndTime from '../Common/DateTimeFunction';

export interface Article {
  abstract: string;
  web_url: string;
  snippet: string;
  pub_date: string;
  uri: string;
  headline: {
    main: string;
  };
  byline: {
    original: string;
  };
  multimedia: {
    url: string;
  }[];
}

const Country: React.FC = () => {
  const { country } = useParams<{ country?: string }>();
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [searchArticles, setSearchArticles] = useState<Article[]>([]);
  const [tab, setTab] = useState("latest");

  useEffect(() => {
    if (country) {
      const eachCountryName = country.toLowerCase();
      const apiKey = "WPwM26BddVXymZHhqmokGFIc7cxItNq3"; 
      const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${eachCountryName}&api-key=${apiKey}`;

      const fetchArticles = async () => {
        try {
          const response = await axios.get(apiUrl);
          const articles = response.data.response.docs;
          setLatestArticles(articles);
          setSearchArticles(articles);
        } catch (error) {
          console.error("Error fetching articles:", error);
         
        }
      };

      fetchArticles();
    }
  }, [country]);

  const toggleTab = (selectedTab: string) => {
    setTab(selectedTab);
  };
  
  return (
    <div>
      <Header />
      <div className="country">
        {country && (
          <>
            <header>
              <h1 className="country-title">World</h1>
              <h2 className="country-name">{country.toUpperCase()}</h2>
            </header>
            <div className="tabs">
              <button
                className={`tab-button ${tab === "latest" ? "active" : ""}`}
                onClick={() => toggleTab("latest")}
              >
                Latest
              </button>
              <button
                className={`tab-button ${tab === "search" ? "active" : ""}`}
                onClick={() => toggleTab("search")}
              >
                Search
              </button>
            </div>
            <div className="articles">
              {tab === "latest" &&
                latestArticles.map((article, index) => (
                  <div className="country-article" key={index}>
                    <div className="country-published-date">
                      {formatDateAndTime(article.pub_date).formattedDate}{" "}
                    </div>
                    <div className="column-mid">
                      <div className="country-article-title">
                        <Link to={`/article/${article.uri}`} className="news-link">
                          {article.headline.main}
                        </Link>
                      </div>
                      <div className="country-article-abstract">{article.abstract}</div>
                      <div className="country-article-byline">{article.byline.original}</div>
                    </div>
                    {article.multimedia.length > 0 && (
                      <img
                        src={`https://www.nytimes.com/${article.multimedia[0]?.url}`}
                        alt="Image of Country News"
                        className="country-article-image"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              {tab === "search" &&
                searchArticles.map((article, index) => (
                  <div className="country-article" key={index}>
                    <div className="country-published-date">
                      {formatDateAndTime(article.pub_date).formattedDate}{" "}
                    </div>
                    <div className="column-mid">
                      <div className="country-article-title">
                        <Link to={`/article/${article.uri}`} className="news-link">
                          {article.headline.main}
                        </Link>
                      </div>
                      <div className="country-article-abstract">{article.abstract}</div>
                      <div className="country-article-byline">{article.byline.original}</div>
                    </div>
                    {article.multimedia.length > 0 && (
                      <img
                        src={`https://www.nytimes.com/${article.multimedia[0]?.url}`}
                        alt="Image of Country News"
                        className="country-article-image"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
            </div>
            <footer className="country-footer">Footer content</footer>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Country;