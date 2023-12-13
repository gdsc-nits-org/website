import React from "react";
import Styles from "./Events.module.scss";
import PropTypes from "prop-types";

const DataCard = ({ info, upcoming }) => {
  const req_date = new Date(info.date);
  const month = [
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

  return (
    <div className={Styles.basis_buffer}>
      <div className={Styles.card}>
        <div className={Styles.flip_card}>
          <div className={Styles.flip_card_front}>
            <div
              className={Styles.flip_card_inner}
              style={upcoming ? { paddingTop: "3rem" } : null}
            >
              <img src={info.logo} alt="" className={Styles.card_img} />
              <div className={Styles.info}>
                <div className={Styles.date}>
                  {upcoming
                    ? info.upcoming
                    : `${month[req_date.getUTCMonth()].slice(0, 3)}
                  ${req_date.getUTCDate()}, ${req_date.getFullYear()}`}
                </div>
                {upcoming && <div className={Styles.upcoming}>(Upcoming)</div>}
                <div className={Styles.title}>
                  {info.title.slice(0, 30) + `${info.title.length > 30 ? "..." : ""}`}
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.flip_card_back}>
            <div className={Styles.flip_card_inner}>
              <div className={Styles.subtitle}>
                {info.desc.slice(0, 100) + `${info.desc.length > 100 ? "..." : ""}`}
              </div>
              <a href={info.link}>
                <button className={Styles.button}>Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DataCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default DataCard;
