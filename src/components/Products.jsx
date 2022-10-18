import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ProductCard from "./ProductCard";

function Products({ category, productsData }) {
  return (
    <>
      <h1>{category}</h1>
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </>
  );
}

Products.propTypes = {
  category: PropTypes.string.isRequired,
  productsData: PropTypes.string.isRequired,
};

export default Products;
