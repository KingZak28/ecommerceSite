import React from "react";
import "./collectionItem.scss";

const collectionItem = ({ id, name, imageUrl, price }) => (
  <div className="collectionItem">
    <div className="img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default collectionItem;
