import React, { useState, useEffect } from 'react';
import NewsAPI from 'newsapi';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const newsapi = new NewsAPI('e41c7e948ffd420caa219a5cc59a4cd8');
    const fetchArticles = async () => {
      try {
        const response = await newsapi.v2.topHeadlines({
          sources: 'bbc-news,the-verge',
          q: 'bitcoin',
          category: 'business',
          language: 'en',
          country: 'us'
        });
        setArticles(response.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
    console.log()
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
