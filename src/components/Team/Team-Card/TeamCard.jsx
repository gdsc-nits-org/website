import React from "react";
import './TeamCard.scss'
import {Link} from "react-router-dom"
import profileImage from "../../../assets/images/team.jpg"
import fb from "../../../assets/images/fb.svg"
import insta from "../../../assets/images/insta.svg"
import lin from "../../../assets/images/linkedin.svg"
import twt from "../../../assets/images/twitter.svg"


function TeamCard(props){
return(  <div className="teamCard">
        <div className="animation">
        <div className="pic">
            <img src={profileImage} alt=" " className="image" />
        </div>
        </div>
        <div className="details">
            <div>
                <div className="name">{props.Name}</div>
            </div>
            <div>
                <div className="domian">{props.Domain}</div>
            </div>
        </div>
        <div className="description">{props.Description}</div>
        <div className="socials">
            <div className="linkdin socialIcon">
                <Link to = {props.Linkdin}>
                    <img src={lin} alt="" />
                </Link>
            </div>
            <div className="facebook socialIcon">
                <Link to = {props.Facebook}>
                    <img src={fb} alt="" />
                </Link>
            </div>
            <div className="instagram socialIcon">
                <Link to ={props.Instagram}>
                    <img src={insta} alt="example" />
                </Link>
            </div>
            <div className="twitter socialIcon">
                <Link to = {props.Twitter}>
                    <img src={twt} alt="" />
                </Link>
            </div>
        </div>
        

    </div>
)
    };

export default TeamCard;