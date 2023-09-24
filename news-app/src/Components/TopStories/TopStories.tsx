import React, { useEffect, useState } from 'react';
import { TopStoriesApi, NewsItem } from '../../APIs/Api';
import { Link } from 'react-router-dom';
import './TopStories.css';
import Section2NewsCard from '../NewsCard/SmallNewsCard';
import formatDateAndTime from '../Common/DateTimeFunction';

// Component for rendering a large or small news card
function NewsCardLargeSmall({ news, isLarge }: { news: NewsItem; isLarge: boolean }) {
  // To use the formattedDate and formattedTime from formatDateAndTime
  const { formattedDate, formattedTime } = formatDateAndTime(news.published_date);

  return (
    <div className={`news-card ${isLarge ? 'news-card-large' : 'news-card-small'}`}>
      <img src={news.multimedia[0]?.url} alt="News" loading="lazy" />
      {isLarge && <p className="copyright">{news.multimedia[0]?.copyright}</p>}
      <h1 className="title">
        <Link to={`/article/${news.uri}`} className="news-link">
          {news.title}
        </Link>
      </h1>
      <p className="abstract">{news.abstract}</p>
      <p className="published-byline">
        {formattedTime} . {news.byline} {/* Display formattedTime */}
      </p>
    </div>
  );
}

// Component for rendering a news card in a column layout
function NewsCardColumn({ news }: { news: NewsItem }) {
  const { formattedTime } = formatDateAndTime(news.published_date);

  return (
    <div className="news-card news-card-column">
      <h1 className="title-column">
        <Link to={`/article/${news.uri}`} className="news-link">
          {news.title}
        </Link>
      </h1>
      <div className="column-content">
        <div className="column-left">
          <p className="abstract">{news.abstract}</p>
        </div>
        <div className="column-right">
          <img src={news.multimedia[0]?.url} alt="News" loading="lazy" />
        </div>
      </div>
      <p className="published-byline">
        {formattedTime} . {news.byline} {/* Display formattedTime */}
      </p>
    </div>
  );
}

function TopStories() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch top stories when the component mounts
    TopStoriesApi()
      .then((data) => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching top stories. Please try again later.');
        setLoading(false);
        console.error('Error fetching top stories:', error);
      });
  }, []);

  // To split the news items into sections as described in the requirements
  const section1 = newsItems.slice(0, 4);
  const section2 = newsItems.slice(4, 9);
  const section3 = newsItems.slice(9, 14);

  return (
    <div className="top-stories">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="section1">
            <div className="news-card-large">
              {section1[0] && <NewsCardLargeSmall news={section1[0]} isLarge={true} />}
            </div>
            <div className="news-card-small">
              {section1[1] && <NewsCardLargeSmall news={section1[1]} isLarge={true} />}
            </div>
            <div className="news-card-column">
              {section1.slice(2).map((news) => (
                <NewsCardColumn news={news} key={news.uri} />
              ))}
            </div>
          </div>

          <div className="section2">
            {section2.map((news, index) => (
              <Section2NewsCard key={news.uri} news={news} />
            ))}
          </div>

          <div className="section3">
            {section3.map((news, index) => (
              <Section2NewsCard key={news.uri} news={news} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TopStories;