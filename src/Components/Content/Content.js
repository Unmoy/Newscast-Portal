import React, { useEffect, useState } from "react";
import "./Content.css";
import NewsSection from "./NewsSection";

const Content = () => {
  const [newsData, setnewsData] = useState([]);

  useEffect(() => {
    fetch("https://safe-atoll-13917.herokuapp.com/shownews")
      .then((res) => res.json())
      .then((data) => {
        setnewsData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="content_wrapper">
      <h1>Latest News</h1>
      <div className="news_container">
        {newsData.map((news) => (
          <NewsSection news={news}></NewsSection>
        ))}
      </div>
    </div>
  );
};

export default Content;
