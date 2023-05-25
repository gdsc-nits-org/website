import React from 'react'
import Styles from './Events.module.scss'
import PropTypes from 'prop-types'

const DataCard = ({info}) => {

  const req_date = new Date(info.time)
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  return (
    <div className={Styles.basis_buffer}>
    <a href={info.link} target='_blank' rel='noreferrer' className={Styles.card}>
      <img src={info.logo} alt="" className={Styles.card_img} />
      <div className={Styles.info}>
        <div className={Styles.date}>{`${month[req_date.getUTCMonth()].slice(0,3)} ${req_date.getUTCDate()}, ${req_date.getFullYear()}`}</div>
        <div className={Styles.title}>{info.title.slice(0,30)+`${info.title.length>30?'...':''}`}</div>
        <div className={Styles.subtitle}>{info.desc.slice(0,80)+`${info.desc.length>80?'...':''}`}</div>
      </div>
    </a>
    </div>
  )
}

DataCard.propTypes = {
    info: PropTypes.object.isRequired,
}

export default DataCard
