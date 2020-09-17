import React from "react";
import "../Header/Header.scss";
import Title from "../Title/Title"

const Header = () => {
  return (

    <header className="header" >
      <p className="mainheader">Компания</p>
      <Title title="EUROCOM" />
      <div className="phone"><a id="phone" href="tel:+380661234568">+380(66)123-45-68</a></div>
      <p className="mainheader mainheader--2 ">Украинское производство</p>
    </header>

  );
};

export default Header;
