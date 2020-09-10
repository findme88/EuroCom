import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "normalize.css";
import "./index.scss";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
