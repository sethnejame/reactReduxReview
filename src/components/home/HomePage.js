import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>React Redux Review</h1>
    <p>React, Redux and React Router for responsive web applications.</p>
    <Link to="about" className="btn btn-primary btn-lg">About</Link>
    {/* We use link here so the link doesn't post back to the server
    We want to keep everything within the client */}
  </div>
);

export default HomePage;
