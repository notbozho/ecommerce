import React, { useState, useEffect } from "react";

import Products from "../components/Products";
import ProductsData from "../../data/products.json";
import HeroBanner from "../components/HeroBanner";

function Home() {
  // const [productsData, setProductsData] = useState([]);

  // useEffect(() => {
  //   setProductsData(ProductsData);
  // }, []);

  return (
    <>
      <HeroBanner />
      {/* <Products productsData={productsData} /> */}
    </>
  );
}

export default Home;
