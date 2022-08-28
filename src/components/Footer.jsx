import React, { Component } from "react";

//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/footer.css";
import "../App.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

//-------------------------------------------------------//

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="fh-container footer-border">
        <div className="footer">
          <div className="contents">
            <h4>FH Jurídica</h4>
            <p>
              O juiz não é nomeado para fazer favores com a justiça, mas para
              julgar segundo as leis.
            </p>
          </div>
          <div className="contents">
            <h4>LINKS</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="contents2">
            <Link to="#">
              <BsFacebook></BsFacebook>
            </Link>
            <Link to="#">
              <BsInstagram></BsInstagram>
            </Link>

            <Link to="#">
              <BsTwitter></BsTwitter>
            </Link>

            <Link to="#">
              <BsWhatsapp></BsWhatsapp>
            </Link>
          </div>
        </div>
        <div className="copyright">
          © 2022 Copyright: <b>fhjuridica.com.br</b>
        </div>
      </div>
    );
  }
}

export default Footer;
