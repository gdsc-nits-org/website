import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Events.module.scss'
import data from './data.json'
import DataCard from './DataCard'

const Events = () => {

    const umcomingEvents = data.data[0];
    console.log(umcomingEvents);

  return (
    <div className={Styles.events}>
      <h2 className={Styles.heading}>UPCOMMING EVENTS</h2>
      <div className={Styles.uc_events_card}>
        <div className={Styles.logo}><img src={umcomingEvents.img} alt="" /></div>
        <div className={Styles.info}>
            <div className={Styles.title}><b>{umcomingEvents.date}</b> - {umcomingEvents.title}</div>
            <div className={Styles.badges}>
                <div className={Styles.subtitle}><b>{umcomingEvents.subtitle.slice(0,30)+'...'}</b></div>
                <div className={Styles.badge}>{umcomingEvents.badge}</div>
            </div>
            <div className={Styles.desc}>{umcomingEvents.desc}</div>
            <button className={Styles.more}><Link to='/'>View Details</Link></button>
        </div>
      </div>

        <div className={Styles.past_events}>
            <h2 className={Styles.past_events_heading}>Past Events</h2>
            <div className={Styles.dropdown}>
                <select name="past-events" id={Styles.past_events}>
                    <option value="--none--">Filter Events</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>

        <div className={Styles.cards}>
            {data.data.map((info, i) =>{
                return (
                    <DataCard key={i} info={info}/>
                )
            })}
        </div>


    </div>
  )
}

export default Events
