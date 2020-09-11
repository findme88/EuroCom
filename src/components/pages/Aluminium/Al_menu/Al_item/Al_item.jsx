import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Al_item.scss";

export default class Al_item extends Component {
  render() {
    let { itemName, url } = this.props;
    return (
      <li >
        <NavLink className='almenu__link' activeStyle={{ color: 'tomato', border: '2px solid rgb(231, 59, 49) '}} to={url}>
          {itemName}
        </NavLink>
      </li>
    );

  }
}