import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //imports the minified vers of BS
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
