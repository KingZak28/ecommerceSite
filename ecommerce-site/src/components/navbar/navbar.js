import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/Navbar Assets/new.svg";
import { auth } from "../../firebase/firebaseUtils";
import { connect } from "react-redux"; // Higher order components are functions that take components as arguments and return a ssj3 component
import "./navbar.scss";
import ShoppingBag from "../shoppingBag/shoppingBag";
import CartDropDown from "../cartDropDown/cartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";

const Navbar = ({ currentUser, hidden }) => (
  <div className="navbar">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options-container">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <ShoppingBag />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

// create structured selector method allows us to just match the property to the selector instead of having to pass the state into each selector like currentUser: selectCurrentUser(state)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar);
