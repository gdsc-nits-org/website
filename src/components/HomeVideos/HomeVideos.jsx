import React from "react";
import "./HomeVideos.scss";

function HomeVideos() {
  return (
    <div className="video-section">
      <div className="video-title">Video section</div>
      <div className="video-container">
        <div className="vid-wrapper">
          <div className="vid-container">
            <iframe
              src="https://www.youtube.com/embed/eOVS1s3mJro"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="vid-wrapper"></div>
        <div className="vid-wrapper"></div>
      </div>
    </div>
  );
}

export default HomeVideos;
