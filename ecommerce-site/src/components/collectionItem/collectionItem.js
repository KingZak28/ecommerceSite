import React from "react";
import PrettyButton from "../prettyButton/prettyButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import "./collectionItem.scss";

const collectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collectionItem">
      <div
        className="img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <PrettyButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </PrettyButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(collectionItem);
