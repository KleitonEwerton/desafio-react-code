import React, { Component } from "react";
import "./styles/card.css";
class Card extends Component {
  render() {
    const nice = [];
    return (
      <div
        className="card"
        style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
      >
        {" "}
        <h3> {this.props.name}</h3>
        <h4>{this.props.email}</h4> <h5>{this.props.post}</h5>
        <p>{this.props.departments}</p>
        <p style={{bottom:'0px'}}>{this.props.birthday}</p>
      </div>
    );
  }
}

export default Card;
