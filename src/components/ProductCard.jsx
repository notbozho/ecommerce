import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ image, name, price }) {
    return (
        <div>
            <Link to="/">
                <div className="product-card">
                    <img
                        src={image}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{name}</p>
                    <p className="product-price">${price}</p>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;