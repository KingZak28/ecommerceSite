import React from "react";
import "./shoppingBag.scss";
import { ReactComponent as ShoppingBagIcon } from "../../Assets/Navbar Assets/bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectTotalCartItems } from "../../redux/cart/cartSelectors";

const ShoppingBag = ({ toggleCartHidden, totalItems }) => (
  <div className="shoppingBag" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shoppingBagIcon" />
    <span className="itemCount">{totalItems}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// This is a selector as we grab the state and pull off just a small portion of the state and then computing a new value based on the state.
// But we don't want to rerender everytime if the value doesn't change so caching the value would be useful here thats why I am using the reselect library instead of directly including the reduce in this map state to props.
const mapStateToProps = (state) => ({
  totalItems: selectTotalCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
