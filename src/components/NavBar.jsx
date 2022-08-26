import React, { Component } from "react";
import { Link } from "react-router-dom";

//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/nav-bar.css";

//-------------------------------------------------------//
class NavBar extends Component {
  componentDidMount() {
    let navBar = document.querySelector(".nav-bar");
    let checkBox = document.getElementById("checkbox_toggle");

    checkBox.onclick = () => {
      if (checkBox.checked) {
        navBar.style.marginBottom = "200px";
        navBar.style.borderBottom = "none";
      } else {
        navBar.style.marginBottom = "0px";
        navBar.style.borderBottom = " 0.5px solid #d1c1e0";
      }
    };
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="logo">
          <Link to="/home">
            <img className="logo-img" src="/images/logo.png"></img>
          </Link>
        </div>

        <ul className="nav-links">
          <input
            type="checkbox"
            id="checkbox_toggle"
            className="checkbox_toggle"
          />
          <label htmlFor="checkbox_toggle" className="hamburger" id="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <Link to="/" className="links-nav-bar">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="links-nav-bar">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="links-nav-bar">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="links-nav-bar ">
                LOGIN
              </Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
