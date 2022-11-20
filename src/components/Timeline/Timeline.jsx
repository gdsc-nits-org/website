import React from "react";
import { useState } from "react";

import Logo from "../../assets/images/logo.png";
import RightArrow from "../../assets/images/RightArrow.svg";
import timeline from "./timeline.json";

import "./Timeline.scss";

function Timeline() {
  const [timelineData] = useState(timeline.events);
  const timelineScroll = () => {
    document.getElementById("timeline-wrapper").scrollLeft +=
      document.getElementById("timeline-wrapper").clientWidth / 4;
  };
  return (
    <div className="timeline-container">
      <div className="timeline-title">Timeline</div>
      <div className="timeline-content">
        <div className="logo-container">
          <div className="timeline-logo">
            <img src={Logo} alt="" className="timeline-logo-icon" />
          </div>
        </div>
        <div id="timeline-wrapper" className="timeline-wrapper">
          <div id="timeline-bar" className="timeline-bar">
            {timelineData.map((timelineData) => {
              return (
                <div
                  className="timeline-circle"
                  key={timelineData.id}
                  style={{ backgroundColor: timelineData.color }}
                >
                  <div className="timeline-stick">
                    <div className="timeline-event-content">
                      <img
                        src={timelineData.src}
                        alt=""
                        className="timeline-event-logo"
                      />
                      <h3 className="timeline-event-name">{timelineData.name}</h3>
                      <h4 className="timeline-event-date">{timelineData.date}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="arrow-container">
          <div className="timeline-arrow">
            <img
              onClick={timelineScroll}
              src={RightArrow}
              alt=""
              id="timeline-scroll-button"
              className="timeline-arrow-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
