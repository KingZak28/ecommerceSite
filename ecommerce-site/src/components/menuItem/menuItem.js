import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.scss";

const MenuItem = ({ title, imgUrl, size, history, match, linkUrl }) => (
  <div
    className={`${size} menuItem`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
