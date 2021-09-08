import React, { useEffect, useState } from "react";
import "./Content.css";
import NewsSection from "./NewsSection";

const Content = () => {
  const [newsData, setnewsData] = useState([]);

  useEffect(() => {
    fetch("https://safe-atoll-13917.herokuapp.com/shownews")
      .then((res) => res.json())
      .then((data) => setnewsData(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filterItem = (selected) => {
    const updatedItem = newsData.filter((item) => {
      return item.category === selected;
    });
    setnewsData(updatedItem);
  };
  return (
    <>
      <div className="categ">
        <button onClick={() => filterItem("business")}>Business</button>
        <button onClick={() => filterItem("real estate")}>Real Estate</button>
        <button onClick={() => filterItem("sports")}>Sports</button>
        <button onClick={() => filterItem("politics")}>Politics</button>
        <button onClick={() => filterItem("life")}>Life</button>
        <button onClick={() => filterItem("international")}>
          International
        </button>
        <button onClick={() => filterItem("entertainment")}>
          Entertainment
        </button>
        <button onClick={() => filterItem("")}>All</button>
      </div>

      <div className="news_container">
        {newsData.map((news) => (
          <NewsSection news={news}></NewsSection>
        ))}
      </div>
    </>
  );
};

export default Content;
