import React from "react";
import "./prettyButton.scss";

const PrettyButton = ({ children, isGoogleSignIn, ...restOfProps }) => (
  <button
    className={`${isGoogleSignIn ? "googleSignIn" : ""} prettyButton`}
    {...restOfProps}
  >
    {children}
  </button>
);

export default PrettyButton;
