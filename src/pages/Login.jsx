import React, { Component } from "react";
import { Link } from "react-router-dom";
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
//------------------------- CSS -------------------------//

import "../styles.css";
import "./styles/login.css";
//-------------------------------------------------------//

function Login() {
  return (
    <div className="login-header">
      <div className="left-header">Form</div>
      <div className="right-header"></div>
      <Link to="/home" style={{position: 'absolute',zIndex:'2', margin:'10px' }}> <BsFillArrowLeftSquareFill style={{fontSize:'30px', color:"#d1c1e0"}}/></Link>
    </div>
  );
}

export default Login;
