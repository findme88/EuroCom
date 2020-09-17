import React from "react";
import NavBar from "../../elements/NavBar/NavBar"
import Header from "../../elements/Header/Header";
import "../Main/Main.scss"

const Main = () => {
  return (

    <div className="main">
      <div className="container">
        <Header />
        <NavBar />
      </div>
    </div>
  );
};

export default Main;
