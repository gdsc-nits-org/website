import React from "react";
import { useState } from "react";

import logo from "../../assets/images/logo.png";
import rightArrow from "../../assets/images/rightArrow.svg";
import timeline from "./timeline.json";

import "./Timeline.scss";

function Timeline() {
  const [timelineData] = useState(timeline.events);
  let dist = 0;
  let isRev = false;
  const timelineScroll = () => {
    if (
      dist <= document.getElementById("timeline-wrapper").clientWidth &&
      isRev == false
    ) {
      document.getElementById("timeline-wrapper").scrollLeft += window.innerWidth / 3;
      dist += window.innerWidth / 3;
      if (dist >= document.getElementById("timeline-wrapper").clientWidth) {
        document.getElementById("timeline-scroll-button").style.transform =
          "rotate(180deg)";
        isRev = true;
      }
    } else if (isRev == true) {
      document.getElementById("timeline-wrapper").scrollLeft = 0;
      dist = 0;
      document.getElementById("timeline-scroll-button").style.transform = "rotate(0deg)";
      isRev = false;
    }
  };
  return (
    <div className="timeline-container">
      <div className="timeline-title">Timeline</div>
      <div className="timeline-content">
        <div className="logo-container">
          <div className="timeline-logo">
            <img src={logo} alt="" className="timeline-logo-icon" />
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
              src={rightArrow}
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
