import React, { Component } from "react";

//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/footer.css";
import "../App.css";
import { Link } from "react-router-dom";

//-------------------------------------------------------//

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer fh-container">
        <div className="contents">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nihil?
        </div>
        <div className="contents">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="contents">3</div>
      </div>
    );
  }
}

export default Footer;
