import React from "react";
import "./header.scss";
import logo from '../images/Eurocom3.png'

const Header = () => {
  return (
    <div>
      <header >
        <img src={logo} alt="logo"/>
      </header>
    </div>
  );
};

export default Header;
