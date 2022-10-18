import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Carousel from "react-elastic-carousel";

import ProductCard from "./ProductCard";

function Products({ category, productsData }) {
  return (
    <>
      <h1>{category}</h1>
      <Carousel itemsToScroll={2} itemsToShow={2}>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </Carousel>
    </>
  );
}

Products.propTypes = {
  category: PropTypes.string.isRequired,
  productsData: PropTypes.array.isRequired,
};

export default Products;
