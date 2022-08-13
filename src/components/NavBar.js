import React, { Component } from "react";
import { Link } from "react-router-dom";

//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/nav-bar.css";

//-------------------------------------------------------//

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
    );
  }
}

export default NavBar;
