import React, { Component } from "react";
import { Link } from "react-router-dom";

//------------------------- CSS -------------------------//

import "../index.css";
import "../styles.css";
import "./styles/contact.css";

//-------------------------------------------------------//

class Contact extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="screen-contact">       
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="contact">CONTACT INFO : +55 32 0800 9090</div>
            </div>
            <div className="screen-body-item">
              <div className="form">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="NAME"
                    
                  />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="EMAIL" />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="CONTACT NO" />
                </div>
                <div className="form-group message">
                  <input className="form-control" placeholder="MESSAGE" />
                </div>
                <div className="form-group buttons">
                  <button className="form-button"><Link to="/home">CANCEL</Link></button>
                  <button className="form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
