import React from "react";
import "./menuItem.scss";

const MenuItem = ({ title, imgUrl, size }) => (
  <div className={`${size} menuItem`}>
    <div
      className="backgroundImage"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    ></div>
    <div className="label">
      <h1 className="title"> {title}</h1>
      <span className="caption">ENTER</span>
    </div>
  </div>
);

export default MenuItem;
