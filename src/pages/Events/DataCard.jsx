import React from "react";
import Styles from "./Events.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DataCard = ({ info }) => {
  const req_date = new Date(info.time);
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
      {/* <a href={info.link} target="_blank" rel="noreferrer" className={Styles.card}> */}
      <div className={Styles.card}>
        <div className={Styles.flip_card}>
          <div className={Styles.flip_card_front}>
            <div className={Styles.flip_card_inner}>
              <img src={info.logo} alt="" className={Styles.card_img} />
              <div className={Styles.info}>
                <div className={Styles.date}>{`${month[req_date.getUTCMonth()].slice(
                  0,
                  3
                )} ${req_date.getUTCDate()}, ${req_date.getFullYear()}`}</div>
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
              <Link to={info.link}>
                <button className={Styles.button}>Read More</button>
              </Link>
            </div>
          </div>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
};

DataCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default DataCard;
