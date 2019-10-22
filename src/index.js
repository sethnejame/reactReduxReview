import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //imports the minified vers of BS
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
