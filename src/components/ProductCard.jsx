import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ image, name, price }) {
  return (
    <div>
      <Link to={"/"}>
        <div className="product-card">
          <img
            src={image}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">{price}</p>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default ProductCard;
