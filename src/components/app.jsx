import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Main from "./Main/main"
import Polipropilen from "./Polipropilen/polipropilen"
import Cabel from "./Cabel/cabel"
import Aluminium from "./Aluminium/aluminium"

const App = () => {
    return (
      <Router>
        <Main />
        {/* <Route exact path="/" render={() => <Redirect to="/Main" />} /> */}
        {/* <Route path="/main" render={() => <Main />} />
        <Route path="/polipropilen" render={() => <Polipropilen />} />
        <Route path="/cabel" render={() => <Cabel />} /> */}
        {/* <Route path="/aluminium" render={() => <Aluminium />} /> */}
         <Aluminium />        
      </Router>
    );
  };
  
  export default App;