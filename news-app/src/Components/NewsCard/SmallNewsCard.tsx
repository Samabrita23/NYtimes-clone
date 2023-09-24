// SmallNewsCard.tsx

import React from 'react';
import { NewsItem } from '../../APIs/Api';
import './SmallNewsCard.css';
import { Link } from 'react-router-dom'; // Import Link

export interface Section2NewsCardProps {
  news: NewsItem;
}

function Section2NewsCard({ news }: Section2NewsCardProps) {
  return (
    <div className="section2-card">
      {news.kicker && <p className="kicker">{news.kicker}</p>}
      <img src={news.multimedia[0]?.url} alt="News" loading="lazy" />
      <h2 className="title-small">
      <Link to={`/article/${news.uri}`} className="news-link">
          {news.title}
        </Link>
      </h2>
    </div>
  );
}

export default Section2NewsCard;