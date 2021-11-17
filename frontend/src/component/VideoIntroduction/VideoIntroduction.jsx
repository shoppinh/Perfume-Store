import React, { FC, useState } from "react";
import "./VideoIntroduction.css";
import ModalVideo from "react-modal-video";

const VideoIntroduction = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="VideoIntroduction">
      <div className="VideoIntroduction-overlay"></div>
      <div className="VideoIntroduction-container">
        <div className="VideoIntroduction-description">
          <p>Be The Best of You</p>
          <h2 className="VideoIntroduction-title">
            Become More Confident & Show Your Better Self
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
            illo soluta eaque a sint voluptate perferendis quidem ipsam expedita
            recusandae.
          </p>
        </div>
        <div className="VideoIntroduction-video">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="L61p2uyiMSo"
            onClose={() => setOpen(false)}
          />

          <button className="btn-primary" onClick={() => setOpen(true)}>
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroduction;
