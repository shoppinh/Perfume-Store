import React, { FC } from "react";
import "./Specification.css";
const Specification: FC = () => {
  return (
    <div className="Specification">
      <div className="Specification-box">
        <div className="Specification-icon">
          <i className="fas fa-truck"></i>
        </div>
        <div className="Specification-detail">
          <h4 className="Specification-title">Free Shipping</h4>
          <p>Orders Over $500</p>
        </div>
      </div>
      <div className="Specification-box">
        <div className="Specification-icon">
          <i className="fas fa-credit-card"></i>
        </div>
        <div className="Specification-detail">
          <h4 className="Specification-title">Quick Payment</h4>
          <p>100% Secure</p>
        </div>
      </div>
      <div className="Specification-box">
        <div className="Specification-icon" style={{ paddingLeft: "20px" }}>
          <i className="fas fa-hand-holding-usd"></i>
        </div>
        <div className="Specification-detail">
          <h4 className="Specification-title">Big Deals</h4>
          <p>Over 40$ Cashback</p>
        </div>
      </div>
      <div className="Specification-box">
        <div className="Specification-icon" style={{ paddingLeft: "20px" }}>
          <i className="fas fa-headset"></i>
        </div>
        <div className="Specification-detail">
          <h4 className="Specification-title">24/7 Support</h4>
          <p>Ready For You</p>
        </div>
      </div>
    </div>
  );
};
export default Specification;
