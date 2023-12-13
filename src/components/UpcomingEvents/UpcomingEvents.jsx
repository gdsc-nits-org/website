import React from "react";
import { Link } from "react-router-dom";

const UpcomingEvents = ({ upcomingEvents, Styles }) => {
  return (
    <>
      <h2 className={Styles.heading} id="upcoming">
        UPCOMMING EVENTS
      </h2>
      <div className={Styles.uc_events_card}>
        <div className={Styles.upper_info}>
          <div className={Styles.logo}>
            <img src={upcomingEvents.logo} alt="" />
          </div>
          <div className={Styles.info}>
            <div className={Styles.title}>
              <b>{upcomingEvents.date}</b> - {upcomingEvents.title}
            </div>
            <div className={Styles.badges}>
              <div className={Styles.subtitle}>
                <b>
                  {upcomingEvents.subtitle.slice(0, 30) +
                    `${upcomingEvents.subtitle.length > 30 ? "..." : ""}`}
                </b>
              </div>
              <div className={Styles.badge}>{upcomingEvents.badge}</div>
            </div>
            {window.innerWidth > 800 ? (
              <>
                <div className={Styles.desc}>{upcomingEvents.desc}</div>
              </>
            ) : (
              ""
            )}
            <button className={Styles.more}>
              <Link to="/">View Details</Link>
            </button>
          </div>
        </div>
        {window.innerWidth < 800 ? (
          <>
            <div className={Styles.desc_mobile}>{upcomingEvents.desc}</div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default UpcomingEvents;
