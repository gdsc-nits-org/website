import React, { useState } from "react";
import "./Infographic.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InfoGraphic = () => {
  const members_fixed = 1528;
  const events_fixed = 50;
  const organizers_fixed = 82;
  const projects_fixed = 10;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [members, setMembers] = useState(0);
  const [events, setEvents] = useState(0);
  const [organizers, setOrganizers] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    if (inView === false) {
      setMembers(0);
      setEvents(0);
      setOrganizers(0);
      setProjects(0);
    }
  }, [inView]);

  useEffect(() => {
    if (inView === true) {
      setTimeout(() => {
        if (members !== members_fixed) {
          setMembers(members + 1);
        }
      }, "0.9");

      setTimeout(() => {
        if (events !== events_fixed) {
          setEvents(events + 1);
        }
        if (organizers !== organizers_fixed) {
          setOrganizers(organizers + 1);
        }
      }, 20);

      setTimeout(() => {
        if (projects !== projects_fixed) {
          setProjects(projects + 1);
        }
      }, 200);
    }
  }, [members, inView, events, organizers, projects]);

  return (
    <div className="info-graphic" ref={ref}>
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
