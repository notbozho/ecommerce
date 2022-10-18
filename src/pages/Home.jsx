import React, { useState, useEffect } from "react";

import Products from "../components/Products";
import ProductsData from "../../data/products.json";
import HeroBanner from "../components/HeroBanner";

function Home() {
  // category:
  // data: {
  //  ...
  // }
  const [smartphonesProducts, setSmartphonesProducts] = useState([]);
  const [electricAppliancesProducts, setElectricAppliancesProducts] = useState(
    []
  );
  const [fashionProducts, setFashionProducts] = useState([]);
  const [sportsProducts, setSportsProducts] = useState([]);
  const [gamingProducts, setGamingProducts] = useState([]);

  const smartPhonesKeyWord = "smartphones";
  const electricAppliancesKeyWord = "electric appliances";
  const fashionKeyWord = "fashion";
  const sportsKeyWord = "sports";
  const gamingKeyWord = "gaming";

  useEffect(() => {
    const setSmartphonesProductsData = () => {
      ProductsData.forEach((product) => {
        if (product["category"].toLowerCase().includes(smartPhonesKeyWord)) {
          setSmartphonesProducts((state) => [...state, product]);
        }
      });
    };

    const setElectricAppliancesProductsData = () => {
      ProductsData.forEach((product) => {
        if (
          product["category"].toLowerCase().includes(electricAppliancesKeyWord)
        ) {
          setElectricAppliancesProducts((state) => [...state, product]);
        }
      });
    };

    const setFashionProductsData = () => {
      ProductsData.forEach((product) => {
        if (product["category"].toLowerCase().includes(fashionKeyWord)) {
          setFashionProducts((state) => [...state, product]);
        }
      });
    };

    const setSportsProductsData = () => {
      ProductsData.forEach((product) => {
        if (product["category"].toLowerCase().includes(sportsKeyWord)) {
          setSportsProducts((state) => [...state, product]);
        }
      });
    };

    const setGamingProductsData = () => {
      ProductsData.forEach((product) => {
        if (product["category"].toLowerCase().includes(gamingKeyWord)) {
          setGamingProducts((state) => [...state, product]);
        }
      });
    };

    setSmartphonesProductsData();
    setElectricAppliancesProductsData();
    setFashionProductsData();
    setSportsProductsData();
    setGamingProductsData();
  }, []);

  return (
    <>
      <HeroBanner />
      {smartphonesProducts.length != 0 && (
        <Products
          category={smartPhonesKeyWord}
          productsData={smartphonesProducts}
        />
      )}
      {electricAppliancesProducts.length != 0 && (
        <Products
          category={electricAppliancesKeyWord}
          productsData={electricAppliancesProducts}
        />
      )}
      {fashionProducts.length != 0 && (
        <Products category={fashionKeyWord} productsData={fashionProducts} />
      )}
      {sportsProducts.length != 0 && (
        <Products category={sportsKeyWord} productsData={sportsProducts} />
      )}
      {gamingProducts.length != 0 && (
        <Products category={gamingKeyWord} productsData={gamingProducts} />
      )}
    </>
  );
}

export default Home;
