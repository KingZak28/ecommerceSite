import React from "react";
import MenuItem from "../menuItem/menuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuSections } from "../../redux/menu/menuSelector";
import "./menu.scss";

const Menu = ({ sections }) => (
  <div className="menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectMenuSections,
  });

export default connect(mapStateToProps)(Menu);
