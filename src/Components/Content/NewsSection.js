import React from "react";
import { useHistory } from "react-router";
import "./NewsSection.css";

const NewsSection = ({ news }) => {
  // console.log(news);
  const { _id, title, description, image, category } = news;

  const history = useHistory();
  const handleClick = () => {
    const url = `/fullnews/${_id}`;
    history.push(url);
  };
  return (
    <div className="card_container">
      <div className="card_image">
        <img src={`data:image/png;base64,${image.img}`} alt="newsImage" />
      </div>
      <div className="card_content">
        <h2>{title?.substring(0, 30)}</h2>
        <h5>{description?.substring(0, 111)}...</h5>
        <button className="view_more" onClick={() => handleClick()}>
          View more
        </button>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default NewsSection;
