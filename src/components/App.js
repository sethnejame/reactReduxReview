import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Route>
        <HomePage exact path="/" component={HomePage} />
        <AboutPage path="/about" component={AboutPage} />
      </Route>
    </div>
  );
};

export default App;
