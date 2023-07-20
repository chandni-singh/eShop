import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product" id={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star rating">
                ⭐️
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__image" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
