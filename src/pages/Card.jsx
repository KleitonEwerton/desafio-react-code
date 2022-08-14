import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        style={{
          height: "400px",
          width: "300px",
          background: "#fff",
          color: "#000",
          borderRadius: "10px",
          margin: "30px",
        }}
      >
        {" "}
        {this.props.name}{" "}
      </div>
    );
  }
}

export default Card;
