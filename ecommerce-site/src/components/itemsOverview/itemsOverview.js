import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collection from "../collection/collection";
import { selectShopItemSetsForPreview } from "../../redux/shop/shopSelector";
import "./itemsOverview.scss";

const ItemsOverview = ({ itemSets }) => (
  <div className="itemsOverview">
    {itemSets.map(({ id, ...restOfProps }) => (
      <Collection key={id} {...restOfProps}></Collection>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemSets: selectShopItemSetsForPreview,
});

export default connect(mapStateToProps)(ItemsOverview);
