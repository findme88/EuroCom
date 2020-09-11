import React, { Component } from "react";
import Al_item from './Al_item/Al_item'

import './Al_menu.scss'

export default class Al_menu extends Component {
  state = {
    navbar: [
      { itemName: "описание", id: 1, url: "/aluminium/description" },
      { itemName: "качество", id: 2, url: "/aluminium/quality" },
      { itemName: "дополнительные услуги", id: 3, url: "/aluminium/extra" },
      { itemName: "порошковая окраска", id: 4, url: "/aluminium/powder" },
    ],
  };
  render() {
    return (
      <div className="almenu">
        <ul className="almenu__button">
          {this.state.navbar.map((item) => {
            return (
              <Al_item itemName={item.itemName} key={item.id} url={item.url} />
            );
          })}
        </ul>
      </div>
    );
  }
}
