import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Al_item.scss";

export default class Al_item extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li >
        <NavLink className='almenu__link' activeStyle={{ color: 'blue', border: '2px solid blue '}} to={url}>
          {itemName}
        </NavLink>
      </li>
    );

  }
}