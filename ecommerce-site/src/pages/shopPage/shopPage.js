import React from "react";
import { Route } from "react-router-dom";
import ItemsOverview from "../../components/itemsOverview/itemsOverview";
import CollectionPage from "../collection/collectionPage";

// Route passes in match, location and history
const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={ItemsOverview} />
    <Route exact path={`${match.path}/:itemSetId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
