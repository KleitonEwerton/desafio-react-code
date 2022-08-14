import React, { Component } from "react";

//------------------------- CSS -------------------------//

import "../index.css";
import "../styles.css";
import Card from "./Card";

//-------------------------------------------------------//

class Members extends Component {
  render() {
    return (
      <div className="App-header" >
        <div style={{ display: "flex",  flexFlow: 'row wrap', width: "70%",justifyContent: 'center', alignContent:'spaceBetween'}}>
          <Card name="Maria1" />
          <Card name="Maria2" />
          <Card name="Maria3" />
          <Card name="Maria4" />
          <Card name="Maria5" />
          <Card name="Maria6" />
        </div>
      </div>
    );
  }
}

export default Members;
