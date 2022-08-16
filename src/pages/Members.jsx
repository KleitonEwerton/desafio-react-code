import React, { Component, useState } from "react";
import Card from "../components/Card";

//------------------------- CSS -------------------------//

import "../index.css";
import "../styles.css";

//-------------------------------------------------------//

class Members extends Component {

  constructor(props){
    super(props);
    fetch("http://localhost:5000/members", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data)).catch((err)=>console.log(err));

  }

  render() {

   
    return (
      <div className="App-header">
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            width: "70%",
            justifyContent: "center",
            alignContent: "spaceBetween",
          }}
        >
          <Card name="Mariana❤️1" email="exampla@gmail.com" departments="VPGG" post="assessor" birthday="10/02/2023"/>
          <Card name="Mariana❤️2"  email="exampla@gmail.com" departments="VPGG" post="assessor" birthday="10/02/2023" />
          <Card name="Mariana❤️3" email="exampla@gmail.com" departments="VPGG" post="assessor" birthday="10/02/2023"/>
          <Card name="Mariana❤️4" email="exampla@gmail.com" departments="VPGG" post="assessor" birthday="10/02/2023"/>
          <Card name="Mariana❤️5" email="exampla@gmail.com" departments="VPGG" post="assessor" birthday="10/02/2023"/>
          <Card name="Mariana❤️6" email="exampla@gmail.com" departments="VPGG" post="assessor" birthday="10/02/2023"/>
          
        </div>
      </div>
    );
  }
}

export default Members;
