import React from "react";
import './TeamHome.scss'

import TeamLottie from "../Team-lotti/TeamLottie";


function TeamHome(){
        

        
        return (
        <div className="teamHome">
            <div className="textContent">
                <div className="title our">OUR</div>
                <div className="title Team">MEMBERS</div>
            </div>
            <div className="lottie">
                <TeamLottie />
            </div>
        </div>
        );
    }

export default TeamHome