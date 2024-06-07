import Navbar from "../components/Navbar";
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e41c7e948ffd420caa219a5cc59a4cd8'
        );
        const data = await response.json();
        if (data.status === 'ok') {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar/>
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Technology News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
