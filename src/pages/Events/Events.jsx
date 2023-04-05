import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Events.module.scss'
import data from './data.json'
import DataCard from './DataCard'
import { useState } from 'react'

const Events = () => {

    const [pastEvents, setPastEvents] = useState('2021')

    const umcomingEvents = data.data[0];

    return (
        <div className={Styles.events}>
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

            <div className={Styles.past_events}>
                <h2 className={Styles.past_events_heading}>Past Events</h2>
                <div className={Styles.dropdown}>
                    <select name="past-events" id={Styles.past_events} onChange={(e)=>{setPastEvents(e.target.value)}} value={pastEvents}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
            </div>

            <div className={Styles.cards}>
                {data.data.map((info, i) => {
                    if (i !== 0 && info.date.slice(-4) === pastEvents){
                    return (
                        <DataCard key={i} info={info} />
                    )
                }})}
            </div>


        </div>
    )
}

export default Events
