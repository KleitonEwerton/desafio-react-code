import React, { Component } from "react";
import "../styles.css";
import "./styles/nav-bar.css";


class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            {" "}
            <a href="/">home</a>
          </li>
          <li>
            {" "}
            <a href="/about">About</a>
          </li>

          <li>
            {" "}
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
