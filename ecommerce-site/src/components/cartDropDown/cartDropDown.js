import React from "react";
import { connect } from "react-redux";
import PrettyButton from "../prettyButton/prettyButton";
import CartItem from "../cartItem/cartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
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

// Using reselect library for performance considerations do not want the cartdropdown to rerender unnecessarily.
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
