import React, { useState, useEffect } from "react";

import Products from "../components/Products";
import ProductsData from "../../data/products.json";
import CategoriesData from "../../data/categories.json";
import HeroBanner from "../components/HeroBanner";

function Home() {
  const [productsForCategories, setProductsForCategories] = useState({});

  useEffect(() => {
    const getProsucts = () => {
      let productsTemplateData = {};

      CategoriesData.forEach((category) => {
        productsTemplateData[category.name] = { data: [] };
      });

      ProductsData.forEach((product) => {
        productsTemplateData[product.category].data.push(product);
      });

      return productsTemplateData;
    };

    setProductsForCategories(getProsucts);
  }, []);

  return (
    <>
      <HeroBanner />
      {Object.keys(productsForCategories).forEach((key) => {
        const products = productsForCategories[key].data;

        products.lenght != 0 && (
          <Products
            category={key}
            productsData={products}
          />
        );
      })}
    </>
  );
}

export default Home;
