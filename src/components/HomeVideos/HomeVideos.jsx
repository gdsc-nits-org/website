import React, { useState } from "react";
import "./HomeVideos.scss";
import tempVideos from "./tempVideos.json";

function HomeVideos() {
  const [videoData] = useState(tempVideos.video);
  return (
    <div className="video-section">
      <div className="video-title">Video section</div>
      <div className="video-container">
        {videoData.map((videoData) => {
          return (
            <div key={videoData.id} className="vid-wrapper">
              <div className="vid-container">
                <iframe
                  src={videoData.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeVideos;
