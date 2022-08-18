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
        <div className="logo">
          <Link to="/home"><img className="logo-img" src="/images/logo.png"></img></Link>
        </div>
        <div>
          <Link to="/" className="links-nav-bar">Home</Link>
          <Link to="/about" className="links-nav-bar">About</Link>
          <Link to="/members" className="links-nav-bar">Members</Link>
          <Link to="/contact" className="links-nav-bar">Contact</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
