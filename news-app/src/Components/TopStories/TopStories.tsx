// TopStories.tsx

import React, { useEffect, useState } from 'react';
import { TopStoriesApi, NewsItem } from '../../APIs/Api';
import './TopStories.css'; // Import the CSS for styling

function NewsCard({ news }: { news: NewsItem }) {
  return (
    <div className="news-card">
      <img src={news.multimedia[0]?.url} alt="News" />
      <p className="copyright">{news.multimedia[0]?.copyright}</p>
      <h3 className="title">
        <a href={news.url} target="_blank" rel="noopener noreferrer">
          {news.title}
        </a>
      </h3>
      <p className="abstract">{news.abstract}</p>
      <p className="published-byline">
        {news.published_date} by {news.byline}
      </p>
    </div>
  );
}

function TopStories() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Fetch top stories when the component mounts
    TopStoriesApi()
      .then((data) => {
        setNewsItems(data);
      })
      .catch((error) => {
        console.error('Error fetching top stories:', error);
      });
  }, []);

  // Split the news items into sections as described in the requirements
  const section1 = newsItems.slice(0, 4);
  const section2 = newsItems.slice(4);

  return (
    <div className="top-stories">
      <div className="section1">
        <div className="section1-row1">
          <div className="news-card-large">
            {section1[0] && <NewsCard news={section1[0]} />}
          </div>
          <div className="news-card-small">
            {section1[1] && <NewsCard news={section1[1]} />}
          </div>
        </div>
        <div className="section1-row2">
          {section1.slice(2).map((news) => (
            <div className="news-card-small" key={news.uri}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      </div>
      <div className="section2">
        {section2.map((news) => (
          <div className="news-card-small" key={news.uri}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopStories;
