import React, { FC } from "react";
import "./Introduction.css";

const Introduction: FC = () => {
  return (
    <div className="Introduction">
      <div className="Introduction-Wrapper">
        <div className="Intro-section">
          <div className="element-widget-container">Colone Fragrant</div>
          <h2 className="element-title">
            Be The Attention With Our Best Fragrant
          </h2>
          <div className="element-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, veritatis beatae sed explicabo consequuntur
              exercitationem.
            </p>
          </div>
          <div className="element-button">
            <a href="/menu" className="">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
