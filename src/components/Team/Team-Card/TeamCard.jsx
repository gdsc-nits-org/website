import React from "react";
import "./TeamCard.scss";
import fb from "../../../assets/images/fb.svg";
import lin from "../../../assets/images/linkedin.svg";
import github from "../../../assets/images/github.svg";

function TeamCard(props) {
  return (
    <div className="teamCard">
      <div className="animation">
        <div className="pic">
          <img src={props.ImageSrc} alt=" " className="image" loading="lazy" />
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
          <a href={props.Linkdin} target="_blank" rel="noreferrer">
            <img src={lin} alt="" />
          </a>
        </div>
        <div className="facebook socialIcon">
          <a href={props.Facebook} target="_blank" rel="noreferrer">
            <img src={fb} alt="" />
          </a>
        </div>
        <div className="github socialIcon">
          <a href={props.Twitter} target="_blank" rel="noreferrer">
            <img className="git" src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
