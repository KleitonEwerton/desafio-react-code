import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/login.css";
//-------------------------------------------------------//

function Login() {
  return (
    <div className="login-header">
      <div className="left-header">
          

          <div className="content">
            <div id="login">
              {/* Method post not working */}
              <form method="" action="/login">
                <h1>Login</h1>
                <p>
                  <label htmlFor="emailLogin">E-MAIL</label>
                  <input
                    id="emailLogin"
                    name="emailLogin"
                    required="required"
                    type="email"
                    placeholder="ex. name.lastaname@fhjuridica.com.br"
                  />
                </p>

                <p>
                  <label htmlFor="passwordLogin">PASSWORD</label>
                  <input
                    id="passwordLogin"
                    name="passwordLogin"
                    required="required"
                    type="password"
                    placeholder="ex. 12345678"
                  />
                </p>

                <p>
                  <input
                    type="checkbox"
                    name="manterlogado"
                    id="manterlogado"
                    value=""
                  />
                  <label htmlFor="rememberMe"> Remember me</label>
                </p>

                <p>
                  <input type="submit" value="Login" />
                  <span className="forgotPassword">Forgot <Link to="#">password?</Link></span>
                </p>

                
              </form>
            </div>

            
          </div>
      </div>
      <div className="right-header"></div>
      <Link
        to="/home"
        style={{ position: "absolute", zIndex: "2", margin: "10px" }}
      >
        {" "}
        <BsFillArrowLeftSquareFill
          style={{ fontSize: "30px", color: "#d1c1e0" }}
        />
      </Link>
    </div>
  );
}

export default Login;
