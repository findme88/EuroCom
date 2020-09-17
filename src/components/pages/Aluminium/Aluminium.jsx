import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "../../elements/NavBar/NavBar"
import SimpleSlider from "./carousel/carousel";
import Example from "./TitleDencrypt/TitleDencrypt";
import Al_menu from "./Al_menu/Al_menu";
import Description from "./Description/Description";
import Quality from "./Quality/Quality";
import Extra from "./Extra/Extra";
import Powder from "./Powder/Powder";

import "./Aluminium.scss";


const Aluminium = () => {
  return (<div>
    <NavBar />
    <div className="container aluminium">
      <SimpleSlider />
      <Example />
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
  </div >
  );
};

export default Aluminium;
