import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <span class="navbar-brand">
          <img src="logo.png" width="45" height="35" alt="" />
        </span>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <Link to="/">
              <span class="nav-item nav-link">Home</span>
            </Link>
            <Link to="/drivers">
              <span class="nav-item nav-link">Drivers</span>
            </Link>
            <Link to="/races">
              <span class="nav-item nav-link">Races</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
