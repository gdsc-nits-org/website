import React from "react";
import logo from "../../assets/images/logo.png";
import rightArrow from "../../assets/images/rightArrow.svg";
// import timeline from "./timeline.json";
import timelineData from "/public/events.json";

import "./Timeline.scss";

function Timeline() {
  // const [timelineData] = useState(timeline.events);
  let dist = 0;
  let isRev = false;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
    <div id="timeLine" className="timeline-container">
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
                  key={timelineData}
                  style={{ backgroundColor: timelineData.theme }}
                  // style={{ backgroundColor: '#3CBA54' }}
                >
                  <div className="timeline-stick">
                    <div className="timeline-event-content">
                      <img
                        src={timelineData.logo}
                        alt=""
                        className="timeline-event-logo"
                      />
                      <h3 className="timeline-event-name">{timelineData.title}</h3>
                      <h4 className="timeline-event-date">
                        {months[timelineData.time.split("-")[1]]}{" "}
                        {timelineData.time.split("-")[0]}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="arrow-container" onClick={timelineScroll}>
          <div className="timeline-arrow">
            <img
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
