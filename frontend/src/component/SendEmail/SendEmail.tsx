import React, { FC } from "react";
import "./SendEmail.css";
const SendEmail: FC = () => {
  return (
    <div className="SendEmail">
      <div className="SendEmail-overlay"></div>
      <div className="SendEmail-container">
        <div className="SendEmail-description">
          <p>Our Newsletter</p>
          <h2 className="SendEmail-title">Join Our Newsletter</h2>
        </div>
        <div className="SendEmail-InputArea">
          <input
            type="text"
            className="SendEmail-InputText"
            placeholder="Enter your email address"
          />
          <div className="SendEmail-Button">Send Email</div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
