import React, { useEffect, useState } from "react";

import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.css";

const Categories = () => {
  const [findItem, setFindItem] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);

  const handleChange = (e) => {
    setFindItem(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://safe-atoll-13917.herokuapp.com/categories?category=` + findItem
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredItem(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [findItem]);
  return (
    <div>
      <div className="category_selector">
        <select class="form-select" onChange={handleChange}>
          <option selected>Choose your favourite news category</option>
          <option value="business">Business News</option>
          <option value=" ">All News</option>
          <option value="life">Life News</option>
          <option value="sports">Sports News</option>
          <option value="entertainment">Entertainment News</option>
          <option value="politics">Politics</option>
        </select>
      </div>
      {filteredItem.length ? (
        <div className="category_news">
          {filteredItem.map((news) => (
            <CategoryCard key={news._id} news={news}></CategoryCard>
          ))}
        </div>
      ) : (
        <h4 style={{ textAlign: "center" }}>Loading...</h4>
      )}
    </div>
  );
};

export default Categories;
