import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.scss";

export default class Al_item extends Component {
  render() {
    let { itemName, url } = this.props;
    if (window.location.pathname === "/") {
      return (<li className="navigation__item--main">
        <NavLink className="navigation__link--main" to={url}>
          {itemName}
        </NavLink>
      </li>)
    }
    else {
      return (
        <li className="navigation__item">
          <NavLink className="navigation__link" to={url}>
            {itemName}
          </NavLink>
        </li>
      );
    }

  }
}

