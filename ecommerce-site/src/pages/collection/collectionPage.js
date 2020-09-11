import React from "react";
import { connect } from "react-redux";
import { selectItemSetType } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collectionItem/collectionItem";
import "./collectionPage.scss";

const CollectionPage = ({ itemSets }) => {
  const { title, items } = itemSets;
  return (
    <div className="category">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  itemSets: selectItemSetType(ownProps.match.params.itemSetId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
