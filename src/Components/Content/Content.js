import React, { useEffect, useState } from "react";
import "./Content.css";
import NewsSection from "./NewsSection";

const Content = () => {
  const [newsData, setnewsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shownews")
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
    <>
      <h1
        style={{
          fontSize: "40px",
          textAlign: "center",
          fontFamily: "Poppins",
          color: " #ff2500",
          marginTop: "50px",
        }}
      >
        Latest News
      </h1>
      <div className="news_container">
        {newsData.map((news) => (
          <NewsSection news={news}></NewsSection>
        ))}
      </div>
    </>
  );
};

export default Content;
