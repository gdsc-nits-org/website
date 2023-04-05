import React from 'react'
// import Styles from './UpcomingEvents.module.scss'
import { Link } from 'react-router-dom'

const UpcomingEvents = ({umcomingEvents, Styles}) => {

  return (
    <>
      <h2 className={Styles.heading}>UPCOMMING EVENTS</h2>
            <div className={Styles.uc_events_card}>
                <div className={Styles.upper_info}>
                    <div className={Styles.logo}><img src={`/images/${umcomingEvents.img}.png`} alt="" /></div>
                    <div className={Styles.info}>
                        <div className={Styles.title}><b>{umcomingEvents.date}</b> - {umcomingEvents.title}</div>
                        <div className={Styles.badges}>
                            <div className={Styles.subtitle}><b>{umcomingEvents.subtitle.slice(0,30)+`${umcomingEvents.subtitle.length>30?'...':''}`}</b></div>
                            <div className={Styles.badge}>{umcomingEvents.badge}</div>
                        </div>
                        {window.innerWidth > 800 ? <><div className={Styles.desc}>{umcomingEvents.desc}</div></> : ''}
                    <button className={Styles.more}><Link to='/'>View Details</Link></button>
                    </div>
                </div>
                {window.innerWidth < 800 ? <><div className={Styles.desc_mobile}>{umcomingEvents.desc}</div></> : ''}
            </div>
    </>
  )
}

export default UpcomingEvents
