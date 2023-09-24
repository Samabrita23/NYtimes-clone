// ArticlePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { NewsItem, TopStoriesApi } from '../../APIs/Api';
import { BsGift } from 'react-icons/bs';
import { PiShareFatThin } from 'react-icons/pi';
import { CiBookmark } from 'react-icons/ci';
import './ArticlePage.css';

function ArticlePage() {
  const { section, subsection } = useParams<{ section: string; subsection: string }>();
  const [articleData, setArticleData] = useState<NewsItem | null>(null);

  const location = useLocation();
  // Initialize selectedNews as null if it's undefined
  const selectedNews: NewsItem | null = location.state?.selectedNews || null;

  if (!selectedNews) {
    // Handle the case where selectedNews is null
    return <div>News not found</div>;
  }

  useEffect(() => {
    // Fetch the article data based on the section and subsection from the API
    TopStoriesApi()
      .then((data) => {
        // Find the article that matches the section and subsection
        const article = data.find((item) => item.section === section && item.subsection === subsection);
        setArticleData(article);
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
      });
  }, [section, subsection]);

  if (!articleData) {
    // You can add loading or error handling here
    return null;
  }

  return (
    <div className="article-page">
      {/* Rest of your component code */}
    </div>
  );
}

export default ArticlePage;
