import React from "react";
import "./cartItem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt="item" />
    <div className="detailsContainer">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
