import React from "react";
import { useState } from "react";

import Logo from "../../assets/images/logo.png";
import RightArrow from "../../assets/images/RightArrow.svg";
import timeline from "./timeline.json";

import "./Timeline.scss";

function Timeline() {
  const [timelineData] = useState(timeline.events);
  return (
    <div className="timeline-container">
      <div className="timeline-title">Timeline</div>
      <div className="timeline-content">
        <div className="logo-container">
          <div className="timeline-logo">
            <img src={Logo} alt="" className="timeline-logo-icon" />
          </div>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline-bar">
            {timelineData.map((timelineData) => {
              return (
                <div
                  className="timeline-circle"
                  key={timelineData.id}
                  style={{ backgroundColor: timelineData.color }}
                >
                  <div className="timeline-stick">
                    <div className="timeline-event-content">
                      <img src={timelineData.src} alt="" />
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
            <img src={RightArrow} alt="" className="timeline-arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
