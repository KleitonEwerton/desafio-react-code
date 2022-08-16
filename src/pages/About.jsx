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
        <div className="text-about">imagem1</div>
        <div className="text-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          voluptates! Autem voluptatem quod alias expedita ipsum illo inventore
          eaque excepturi nemo ducimus labore, nam ea nihil tempore debitis. Aut
          necessitatibus laboriosam pariatur iste fugiat dolores consectetur sed
          deleniti ducimus doloribus veritatis, temporibus ea odit quos cumque
          minima est perspiciatis. Non.
        </div>

        <div className="text-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id,
          officiis architecto recusandae dicta consectetur maxime officia illum
          hic. Quia, asperiores veritatis? Deserunt saepe dolor repellat
          blanditiis fugit pariatur fugiat odio ipsam mollitia beatae
          repellendus, rerum consequuntur totam officia! Veniam expedita
          provident non libero accusantium at ratione. Molestias, distinctio
          qui.
        </div>
        <div className="text-about">imagem2</div>

        <div className="text-about">imagem3</div>
        <div className="text-about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          facere ipsam doloribus nisi error quam, non, nam mollitia dolores,
          eveniet earum assumenda corporis rem vero totam voluptate illo odio
          perspiciatis omnis odit necessitatibus harum nihil! Laudantium maxime
          itaque quaerat ex aliquid quibusdam et eveniet culpa libero
          dignissimos, modi sed vero?
        </div>
      </div>
    );
  }
}

export default About;
