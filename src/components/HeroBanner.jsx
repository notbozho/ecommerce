import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";

import CategoriesData from "../../data/categories.json";
import HeroBannerItem from "./HeroBannerItem";

function HeroBanner() {
  const [carousalData, setCarousalData] = useState([]);

  useEffect(() => {
    setCarousalData(CategoriesData);
  }, []);

  const get = function () {
    console.log(carousalData);
  };

  return (
    <Carousel>
      {carousalData.map((item) => (
        <HeroBannerItem key={item.id} name={item.name} imageUrl={item.image} />
      ))}
    </Carousel>
  );
}

export default HeroBanner;
