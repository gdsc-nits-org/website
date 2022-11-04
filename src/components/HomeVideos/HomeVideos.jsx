import React, { useState } from "react";
import "./HomeVideos.scss";
import TempVideos from "./TempVideos.json";

function HomeVideos() {
  const [videoData] = useState(TempVideos.video);
  return (
    <div className="video-section">
      <div className="video-title">Video section</div>
      <div className="video-container">
        {videoData.map((videoData) => {
          return (
            <div className="vid-wrapper">
              <div className="vid-container">
                <iframe
                  src={videoData.src}
                  title="YouTube video player"
                  frameborder="0"
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
