import React, { Component } from "react";
import "./styles/about.css";

//------------------------- CSS -------------------------//

import "../index.css";
import "../styles.css";

//-------------------------------------------------------//

class About extends Component {
  render() {
    const classNames = "App-header about";
    return (
      <div className={classNames}>
        <div className="about-contents">
          <h2>MISSÃO</h2>
          <div className="text-about">
            <img src="images/img3.jpg" alt="" />
          </div>
          <div className="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id,
            officiis architecto recusandae dicta consectetur maxime officia
            illum hic. Quia, asperiores veritatis? Deserunt saepe dolor repellat
            blanditiis fugit pariatur fugiat odio ipsam mollitia beatae
            repellendus, rerum consequuntur totam officia! Veniam expedita
          </div>
        </div>
        <div className="about-contents">
          <h2>VISSÃO</h2>
          <div className="text-about">
            <img src="images/img4.jpg" alt="" />
          </div>  
          <div className="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id,
            officiis architecto recusandae dicta consectetur maxime officia
            illum hic. Quia, asperiores veritatis? Deserunt saepe dolor repellat
            blanditiis fugit pariatur fugiat odio ipsam mollitia beatae
            repellendus, rerum consequuntur totam officia! Veniam expedita
          </div>
        </div>
        <div className="about-contents">
          <h2>VALORES</h2>
          <div className="text-about">
            <img src="images/img5.jpg" alt="" />
          </div>
          <div className="text-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id,
            officiis architecto recusandae dicta consectetur maxime officia
            illum hic. Quia, asperiores veritatis? Deserunt saepe dolor repellat
            blanditiis fugit pariatur fugiat odio ipsam mollitia beatae
            repellendus, rerum consequuntur totam officia! Veniam expedita
          </div>
        </div>
      </div>
    );
  }
}

export default About;
