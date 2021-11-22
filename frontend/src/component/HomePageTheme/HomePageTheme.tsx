import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./HomePageTheme.css";
const HomePageTheme: FC = () => {
  return (
    <div className="container mt-5">
      <p>Perfume Product</p>
      <h2 className="HomePageTheme-title">Perfume For Everyone</h2>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-5 HomepageImageW">
            <div className="HomepageImageW-Overlay"></div>
            <div className="HomePageImage_Detail">
              <h2>Woman Perfume</h2>
              <Link to={{ pathname: "/menu", state: { id: "female" } }}>
                See More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-5 HomepageImageM">
            <div className="HomepageImageM-Overlay"></div>
            <div className="HomePageImage_Detail">
              <h2>Man Perfume</h2>
              <Link to={{ pathname: "/menu", state: { id: "male" } }}>
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTheme;
