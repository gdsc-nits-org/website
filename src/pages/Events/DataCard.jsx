import React from 'react'
import Styles from './Events.module.scss'
import PropTypes from 'prop-types'

const DataCard = ({info}) => {

  return (
    <div className={Styles.basis_buffer}>
    <div className={Styles.card}>
      <img src={`/images/${info.img}.png`} alt="" className={Styles.card_img} />
      <div className={Styles.info}>
        <div className={Styles.date}>{info.date}</div>
        <div className={Styles.title}>{info.title.slice(0,30)+`${info.title.length>30?'...':''}`}</div>
        <div className={Styles.subtitle}>{info.subtitle.slice(0,80)+`${info.subtitle.length>80?'...':''}`}</div>
      </div>
    </div>
    </div>
  )
}

DataCard.propTypes = {
    info: PropTypes.object.isRequired,
}

export default DataCard
