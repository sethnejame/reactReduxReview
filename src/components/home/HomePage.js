import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>React Redux Review</h1>
    <p>React, Redux and React Router for responsive web applications.</p>
    <Link to="about" className="btn btn-primary btn-lg">About</Link>
  </div>
);

export default HomePage;
