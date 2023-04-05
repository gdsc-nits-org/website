import React from 'react'
import Styles from './Events.module.scss'
import data from './data.json'
import DataCard from './DataCard'
import { useState } from 'react'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'

const Events = () => {

    const [pastEvents, setPastEvents] = useState('2021')

    const umcomingEvents_data = data.data[0];

    return (
        <div className={Styles.events}>
            
            <UpcomingEvents umcomingEvents = {umcomingEvents_data} Styles={Styles} />

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
