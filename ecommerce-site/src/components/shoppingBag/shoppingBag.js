import React from "react";
import "./shoppingBag.scss";
import { ReactComponent as ShoppingBagIcon } from "../../Assets/Navbar Assets/bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const ShoppingBag = ({ toggleCartHidden }) => (
  <div className="shoppingBag" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shoppingBagIcon" />
    <span className="itemCount">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(ShoppingBag);
