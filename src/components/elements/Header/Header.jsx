import React from "react";
import "./Header.scss";
import logo from '../../pages/Main/images/Eurocom3.png'

const Header = () => {
  return (
    <div>
      <header >
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;
