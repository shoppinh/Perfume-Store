import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import GirlWithPerfume from "../../resources/img/girl-with-perfume.jpg";
const AboutUs: FC = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-overlay"></div>
      <div className="container mt-5 AboutUs-container">
        <img src={GirlWithPerfume} className="AboutUs-SideImg" />
        <div className="AboutUs-detail">
          <p>About Us</p>
          <h2 className="AboutUs-title">
            Using The Organic & Natural Essence That Makes You Comfortable
          </h2>
          <p className="AboutUs-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam.
            Voluptate, necessitatibus quidem? Quas totam vitae, distinctio
            laborum voluptatem dolores nostrum neque, earum illum cum sed
            blanditiis debitis, unde accusantium.
          </p>
          <div className="Benefits">
            <ul className="Benefits-list">
              <li>Organic Ingredients</li>
              <li>Online Shopping</li>
              <li>Perfume Variants</li>
            </ul>
            <ul className="Benefits-list">
              <li>For All Gender</li>
              <li>Natural Fragrant</li>
              <li>High Quality Product</li>
            </ul>
          </div>
          <div className="AboutUs-Button-list">
            <div className="AboutUs-Button">
              <a href="/about">About Us</a>
            </div>
            <div className="AboutUs-Button2">
              <a href="/menu">Shop Online</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
