import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "../elements/NavBar/NavBar";
import Main from "../pages/Main/Main";
import Polypropylene from "../pages/Polypropylene/Polypropylene";
import Cabel from "../pages/Cabel/Cabel";
import Aluminium from "../pages/Aluminium/Aluminium";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/main" render={() => <Main />} />
      <Route path="/recycledpolypropylene" render={() => <Polypropylene />} />
      <Route path="/cabel" render={() => <Cabel />} />
      <Route path="/aluminium" render={() => <Aluminium />} />
    </Router>
  );
};

export default App;
