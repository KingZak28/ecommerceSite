import React from "react";
import CollectionItem from "../collectionItem/collectionItem";
import "./collection.scss";

const Collection = ({ title, items }) => (
  <div className="collection-container">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...restOfProps }) => (
          <CollectionItem key={id} {...restOfProps}></CollectionItem>
        ))}
    </div>
  </div>
);

export default Collection;
