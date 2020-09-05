import React from "react";
import "./formInput.scss";

const FormInput = ({ handleChange, label, ...restOfProps }) => (
  <div className="form-container">
    {label ? (
      // This label will always have the form label class but in the event the user types something in we'll also have the shrink property
      <label
        className={`${restOfProps.value.length ? "shrink" : ""} form-label`}
      >
        {label}
      </label>
    ) : null}
    <input
      className="form-input"
      onChange={handleChange}
      {...restOfProps}
    ></input>
  </div>
);

export default FormInput;
