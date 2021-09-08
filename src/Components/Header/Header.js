import React from "react";
import "./Header.css";
import Carousel from "react-elastic-carousel";
import image1 from "../../images/img-1.jpg";
import image2 from "../../images/img-2.jpg";
import image3 from "../../images/img-3.jpg";
import CarouselCard from "../CarouselCard/CarouselCard";

const Header = () => {
  return (
    <>
      <div className="carousel_wrapper">
        <Carousel itemsToShow={1}>
          <CarouselCard cardImage={image1}></CarouselCard>
          <CarouselCard cardImage={image2}></CarouselCard>
          <CarouselCard cardImage={image3}></CarouselCard>
        </Carousel>
      </div>
    </>
  );
};

export default Header;
