import React, { Component } from "react";
import "./styles/card.css";
class Card extends Component {
  render() {
    return (
    <div className="card" style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}> <h3>  {this.props.name }</h3> <p>Olá</p> </div>
      
      
      );
  }
}

export default Card;
