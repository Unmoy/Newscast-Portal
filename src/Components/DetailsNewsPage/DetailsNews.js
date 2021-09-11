import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./DetailsNews.css";

const DetailsNews = () => {
  const { id } = useParams();
  const [singleNews, setSingleNews] = useState([]);
  const { title, description } = singleNews;

  useEffect(() => {
    fetch(`http://localhost:5000/getNewsById/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleNews(data));
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="fullnews_container">
      <h2>Full News article</h2>

      <div className="fullnews_content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="fullnews_footer">Thank You For Reading...</div>
    </div>
  );
};

export default DetailsNews;
