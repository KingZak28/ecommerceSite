import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/Navbar Assets/new.svg";
import { auth } from "../../firebase/firebaseUtils";
import "./navbar.scss";

const Navbar = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Navbar;
