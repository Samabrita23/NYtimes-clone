// SmallNewsCard.tsx


import { NewsItem } from '../../APIs/Api';
import './SmallNewsCard.css';

export interface Section2NewsCardProps {
  news: NewsItem;
}

function Section2NewsCard({ news }: Section2NewsCardProps) {
  return (
    <div className="section2-card">
      {news.kicker && <p className="kicker">{news.kicker}</p>}
      <img src={news.multimedia[0]?.url} alt="News" loading="lazy" />
      <h2 className="title-small">
        <a href={news.url} target="_blank" rel="noopener noreferrer">
          {news.title}
        </a>
      </h2>
    </div>
  );
}

export default Section2NewsCard;
