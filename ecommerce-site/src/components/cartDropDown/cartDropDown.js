import React from "react";
import { connect } from "react-redux";
import PrettyButton from "../prettyButton/prettyButton";
import CartItem from "../cartItem/cartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import "./cartDropDown.scss";

// connect actually passes in the dispatch as a prop so for one off dispatches instead of writing a mapDispatchToProps we can just fire it when needed
const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cartDropDown">
    <div className="cartItems" />
    {cartItems.length ? (
      cartItems.map((item) => <CartItem key={item.id} item={item}></CartItem>)
    ) : (
      <span className="emptyCart">YOUR CART IS EMPTY BRO</span>
    )}
    <PrettyButton
      onClick={() => {
        history.push("/checkout");
        // This will hide the dropdown when we go to our checkout page
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </PrettyButton>
  </div>
);

// Using reselect library for performance considerations do not want the cartdropdown to rerender unnecessarily.
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
