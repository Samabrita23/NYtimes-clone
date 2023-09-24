// ArticlePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NewsItem, TopStoriesApi } from '../../APIs/Api';
import { BsGift } from 'react-icons/bs';
import { PiShareFatThin } from 'react-icons/pi';
import { CiBookmark } from 'react-icons/ci';
import './ArticlePage.css';

function ArticlePage() {

const { uri } = useParams<{ uri: string }>(); 
const [articleData, setArticleData] = useState<NewsItem | null>(null);

useEffect(() => {
    // Fetch the article data based on the URI from the API
    TopStoriesApi()
      .then((data) => {
        // Find the article that matches the URI
        const article = data.find((item) => item.uri === uri);
        if (article) {
          setArticleData(article);
        } else {
          // Handle the case where the article is not found
          setArticleData(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
      });
  }, [uri]);

  if (!articleData) {
    // You can add loading or error handling here
    return null;
  }

  return (
    <div className="article-page">
      {articleData.kicker && <p className="article-kicker">{articleData.kicker}</p>}
      <h1 className="article-title">{articleData.title}</h1>
      <p className="article-abstract">{articleData.abstract}</p>
      <div className="article-buttons">
        <button className="article-button">
          <BsGift /> Share Full Article
        </button>
        <button className="article-button">
          <PiShareFatThin />
        </button>
        <button className="article-button">
          <CiBookmark />
        </button>
      </div>
      <img className="article-image" src={articleData.multimedia[0]?.url} alt={articleData.title} />
      <p className="article-caption">{articleData.multimedia[0]?.caption}</p>
      <p className="article-copyright">{articleData.copyright}</p>
      <p className="article-byline">{articleData.byline}</p>
      <p className="article-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae libero vel dolor aliquam
        blandit. Fusce vel justo eu sem volutpat malesuada ut sed urna.
      </p>
      <img className="article-image" src={articleData.multimedia[1]?.url} alt={articleData.title} />
      <p className="article-caption">{articleData.multimedia[1]?.caption}</p>
      <p className="article-copyright">{articleData.copyright}</p>
      <footer className="article-footer">{/* Footer content here */}</footer>
    </div>
  );
}

export default ArticlePage;
