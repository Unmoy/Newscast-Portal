import React from "react";
import "./CarouselCard.css";
const CarouselCard = ({ cardImage }) => {
  return (
    <div className="carousel_img">
      <img src={cardImage} alt="" />
    </div>
  );
};

export default CarouselCard;
