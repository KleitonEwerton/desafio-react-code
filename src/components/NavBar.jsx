import React, { Component } from "react";
import { Link } from "react-router-dom";

//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/nav-bar.css";

//-------------------------------------------------------//

class NavBar extends Component {
 
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/members">Members</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default NavBar;
