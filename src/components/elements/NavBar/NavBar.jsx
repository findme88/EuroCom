import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default class NavBar extends Component {
  state = {
    navbar: [
      { itemName: "Вторичный полипропилен", id: 2, url: "/recycledpolypropylene" },
      { itemName: "Кабель, провод", id: 3, url: "/cabel" },
      { itemName: "Литье Алюминия", id: 4, url: "/aluminium" },
    ],
  };

  render() {
    if (window.location.pathname === "/") {
      return (
        <div className="navigation--main">
          <Link to="/" className="logo--main">
            <img id="logo"
              src={require("../NavBarLogo/Eurocom3.png")}
              alt="logo" />
          </Link>
          <div className="navigation__container--main">
            <ul className="navigation-bar--main">
              {this.state.navbar.map((item) => {
                return (
                  <NavItem
                    itemName={item.itemName}
                    key={item.id}
                    url={item.url}
                  />
                );
              })}
            </ul>

          </div >
        </div >
      )
    }
    else {
      return (
        <div className="navigation">
          <div className="navigation__container">
            <ul className="navigation-bar">
              {this.state.navbar.map((item) => {
                return (
                  <NavItem
                    itemName={item.itemName}
                    key={item.id}
                    url={item.url}
                  />
                );
              })}
            </ul>
            <Link to="/" className="logo">
              <img id="logo"
                src={require("../NavBarLogo/Eurocom3.png")}
                alt="logo"
                title="на главную"
              />
            </Link>
          </div >
        </div >
      );
    }
  }
}