import React from "react";
import "./prettyButton.scss";

const PrettyButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...restOfProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "googleSignIn" : ""
    } prettyButton`}
    {...restOfProps}
  >
    {children}
  </button>
);

export default PrettyButton;
