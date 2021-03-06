import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../elements/NavBar/NavBar";
import SimpleSlider from "./carousel/carousel";
import Title from "./Title/Title";
import Al_menu from "./Al_menu/Al_menu";
import Description from "./Description/Description";
import Quality from "./Quality/Quality";
import Extra from "./Extra/Extra";
import Powder from "./Powder/Powder";

import "./Aluminium.scss";

function Aluminium() {
  return (
    <div>
      <NavBar />
      <div className="aluminium">
        <header className="al__header">
          <div className="overlay">
            <SimpleSlider />
            <Title />
          </div>
        </header>
        <div className="container">
          <Al_menu />
          <Route
            exact
            path="/aluminium"
            render={() => <Redirect to="/aluminium/description" />}
          />
          <Route path="/aluminium/description" render={() => <Description />} />
          <Route path="/aluminium/quality" render={() => <Quality />} />
          <Route path="/aluminium/extra" render={() => <Extra />} />
          <Route path="/aluminium/powder" render={() => <Powder />} />
        </div>
      </div>
    </div>
  );
}

export default Aluminium;
