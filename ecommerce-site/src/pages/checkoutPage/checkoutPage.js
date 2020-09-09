import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotalCartPrice,
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/checkoutItem/checkoutItem";
import "./checkoutPage.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkoutPage">
    <div className="checkoutHeader">
      <div className="sectionHeading">
        <span>PRODUCT</span>
      </div>
      <div className="sectionHeading">
        <span>DESCRIPTION</span>
      </div>
      <div className="sectionHeading">
        <span>QUANTITY</span>
      </div>
      <div className="sectionHeading">
        <span>PRICE</span>
      </div>
      <div className="sectionHeading">
        <span>REMOVE</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="totalPrice">TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotalCartPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
