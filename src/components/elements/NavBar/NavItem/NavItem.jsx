import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.scss";

export default class Al_item extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li className="navigation__item">
        <NavLink className="navigation__link" to={url}>
          {itemName}
        </NavLink>
      </li>
    );

  }
}

