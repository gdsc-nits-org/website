import React, { useState } from "react";
import Styles from "./Events.module.scss";
import data from "/src/assets/events.json";
import DataCard from "./DataCard";

const Events = () => {
  const [pastEvents, setPastEvents] = useState("2023");
  const dataReversed = Array.from(data).reverse();
  const [month, year] = [new Date().getMonth(), new Date().getFullYear()];

  const checkUpcoming = (info, idx) => {
    if (new Date() - new Date(info.date) > 0) {
      return <DataCard key={idx} info={info} upcoming={false} />;
    } else {
      return <DataCard key={idx} info={info} upcoming={true} />;
    }
  };

  const dataCallback = (info, idx) => {
    if (pastEvents == "All") {
      return checkUpcoming(info, idx);
    } else {
      if (info.date.slice(0, 4) === pastEvents) {
        return checkUpcoming(info, idx);
      }
    }
  };

  return (
    <div className={Styles.events}>
      <div className={Styles.past_events}>
        <h2 className={Styles.past_events_heading} id="previous">
          Filter by year
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
            <option value="All">All</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>

      <div className={Styles.cards}>
        {pastEvents == "All"
          ? data.map((info, idx) => checkUpcoming(info, idx))
          : month > 5 && year == pastEvents
            ? data.map(dataCallback)
            : dataReversed.map(dataCallback)}
      </div>
    </div>
  );
};

export default Events;
