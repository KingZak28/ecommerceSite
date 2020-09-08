import React from "react";
import { connect } from "react-redux";
import PrettyButton from "../prettyButton/prettyButton";
import CartItem from "../cartItem/cartItem";
import "./cartDropDown.scss";

const CartDropDown = ({ cartItems }) => (
  <div className="cartDropDown">
    <div className="cartItems" />
    {cartItems.map((item) => (
      <CartItem key={item.id} item={item}></CartItem>
    ))}
    <PrettyButton>CHECKOUT</PrettyButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
