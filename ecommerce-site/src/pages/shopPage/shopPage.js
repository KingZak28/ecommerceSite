import React from "react";
import Collection from "../../components/collection/collection";
import SHOPPING_DATA from "./shoppingData";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSets: SHOPPING_DATA,
    };
  }

  render() {
    const { itemSets } = this.state;
    return (
      <div>
        {itemSets.map(({ id, ...restOfProps }) => (
          <Collection key={id} {...restOfProps}></Collection>
        ))}
      </div>
    );
  }
}

export default ShopPage;
