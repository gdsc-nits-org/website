import React, { useState } from "react";
import "./Infographic.scss";

const InfoGraphic = () => {
  const members_fixed = 861;
  const events_fixed = 18;
  const organizers_fixed = 19;
  const projects_fixed = 29;

  const [members, setMembers] = useState(0);
  const [events, setEvents] = useState(0);
  const [organizers, setOrganizers] = useState(0);
  const [projects, setProjects] = useState(0);

  setTimeout(() => {
    if (members !== members_fixed) {
      setMembers(members + 1);
    }
    if (events !== events_fixed) {
      setEvents(events + 1);
    }
    if (organizers !== organizers_fixed) {
      setOrganizers(organizers + 1);
    }
    if (projects !== projects_fixed) {
      setProjects(projects + 1);
    }
  }, "1");

  return (
    <div className="info-graphic">
      <div className="red circles">
        <div className="int">{members}</div>
        <div className="text">Chapter Members</div>
      </div>
      <div className="blue circles">
        <div className="int">{events}</div>
        <div className="text">Events</div>
      </div>
      <div className="green circles">
        <div className="int">{organizers}</div>
        <div className="text">Organizers</div>
      </div>
      <div className="yellow circles">
        <div className="int">{projects}</div>
        <div className="text">Projects</div>
      </div>
    </div>
  );
};

export default InfoGraphic;
