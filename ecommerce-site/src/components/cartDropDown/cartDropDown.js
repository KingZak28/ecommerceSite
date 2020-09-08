import React from "react";
import PrettyButton from "../prettyButton/prettyButton";
import "./cartDropDown.scss";

const CartDropDown = () => (
  <div className="cartDropDown">
    <div className="cartItems" />
    <PrettyButton>CHECKOUT</PrettyButton>
  </div>
);

export default CartDropDown;
