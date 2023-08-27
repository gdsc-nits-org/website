import React, { useState } from "react";
import Styles from "./Events.module.scss";
import data from "/public/events.json";
import DataCard from "./DataCard";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";

const Events = () => {
  const [pastEvents, setPastEvents] = useState("2023");

  // const umcomingEvents_data = data.data[0];

  return (
    <div className={Styles.events}>
      <div className={Styles.past_events}>
        <h2 className={Styles.past_events_heading} id="previous">
          Past Events
        </h2>
        <div className={Styles.dropdown}>
          <select
            name="past-events"
            id={Styles.past_events}
            onChange={(e) => {
              setPastEvents(e.target.value);
            }}
            value={pastEvents}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>

      <div className={Styles.cards}>
        {data.map((info, idx) => {
          const date = new Date(info.time);
          if (new Date() - date > 0) {
            if (info.time.slice(0, 4) === pastEvents) {
              return <DataCard key={idx} info={info} />;
            }
          } else {
            <UpcomingEvents key={idx} umcomingEvents={info} Styles={Styles} />;
          }
        })}
      </div>
    </div>
  );
};

export default Events;
