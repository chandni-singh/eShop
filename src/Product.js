import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
