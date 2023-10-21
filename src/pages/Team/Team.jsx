import React, { useState, useMemo } from "react";
import "./Team.scss";
import Faculty from "../../assets/data/Faculty";
import TeamData from "../../assets/data/Data";
import TeamHome from "../../components/Hero-lottie/HeroLottie.jsx";
import FacultyTeamCard from "../../components/Team/FacultyTeamCard/FacultyTeamCard";
import TeamCard from "../../components/Team/Team-Card/TeamCard";
import FilterModule from "../../components/Team/Team-Filter/FilterModule";
import ScrollToSection from "../../components/ScrollToSection/ScrollToSection";

const MemberDetails = (d) => {
  return <TeamCard {...d} key={d._id} />;
};

const Team = () => {
  ScrollToSection();
  const currentBatch = "2023-24";
  const [newMemberList] = useState(TeamData);
  const [filterBatchValue, setBatchValue] = useState(currentBatch);
  const [filterModuleValue, setModuleValue] = useState("All");

  // const sortArray = (x, y) => (x.Name < y.Name ? -1 : 1);
  const sortArray = (x, y) => {
    const collator = new Intl.Collator("en", { sensitivity: "base" });
    return collator.compare(x.Name, y.Name);
  };

  function onBatchValueSelected(event) {
    setBatchValue(event);
  }
  function onModuleValueChanged(filterModule) {
    setModuleValue(filterModule);
  }

  let filterByDomain = false;

  const FacultyAdvisor = useMemo(
    () =>
      Faculty.filter((m) =>
        filterBatchValue ? m.batch.includes(filterBatchValue) : currentBatch
      ),
    [filterBatchValue]
  );

  const filteredMemberList = useMemo(
    () =>
      newMemberList.filter((member) =>
        filterBatchValue ? member.Batch === `${filterBatchValue}` : currentBatch
      ),
    [filterBatchValue]
  );

  const GDSCLead = useMemo(
    () => filteredMemberList.filter((member) => member.Description === "Lead"),
    [filteredMemberList]
  );

  const newFilteredMemberList = useMemo(
    () =>
      filteredMemberList.filter((member) => {
        if (filterModuleValue !== "All") {
          filterByDomain = true;
          return member.Domain == `${filterModuleValue}`;
        } else return filteredMemberList;
      }),
    [filterModuleValue, filteredMemberList]
  );

  const CoreMemberList = useMemo(
    () =>
      newFilteredMemberList.filter(
        (member) => member.Description !== "" || member.Description !== "Lead"
      ),
    [newFilteredMemberList]
  );

  const sortedCoreMemberList = useMemo(() => {
    const mods = CoreMemberList.filter(
      (member) => member.Description.split(" ")[1] === "Moderator"
    );
    const notMod = CoreMemberList.filter(
      (member) => member.Description === "Core Member"
    );
    notMod.sort(sortArray);
    mods.sort(sortArray);
    return mods.concat(notMod);
  }, [CoreMemberList]);

  const MemberList = useMemo(
    () =>
      newFilteredMemberList.filter((member) => member.Description === "").sort(sortArray),
    [newFilteredMemberList]
  );

  return (
    <div>
      <TeamHome className="teamHome" page="team" />
      <div className="filter">
        <p className="sort">Sort By :</p>
        <FilterModule
          className="filterByModule"
          default="All"
          option1="All"
          option2="Web"
          option4="UI/UX"
          option3="Flutter"
          option5="Android"
          option6="Cloud"
          filterModuleData={onModuleValueChanged}
        />
        <FilterModule
          className="filterByYear"
          default={currentBatch}
          option1="2021-22"
          option2="2022-23"
          option3="2023-24"
          filterModuleData={onBatchValueSelected}
        />
      </div>
      <div className="member-title" id="core">
        Faculty Advisor
      </div>
      <div className="grid">
        {FacultyAdvisor.map((d) => (
          <FacultyTeamCard {...d} key={d._id} />
        ))}
      </div>

      <div className="member-title">LEAD</div>
      <div className="grid">{GDSCLead.map(MemberDetails)}</div>

      {filterByDomain ? (
        <>
          <div className="member-title" id="core">
            CORE MEMBERS
          </div>
          <div className="grid">{sortedCoreMemberList.map(MemberDetails)}</div>
          <div className="member-title" id="members">
            MEMBERS
          </div>
          <div className="grid">{MemberList.map(MemberDetails)}</div>
        </>
      ) : (
        <>
          <div className="member-title" id="core">
            CORE MEMBERS
          </div>
          <div className="grid">{sortedCoreMemberList.map(MemberDetails)}</div>
          <div className="member-title" id="members">
            MEMBERS
          </div>
          <div className="grid">{MemberList.map(MemberDetails)}</div>
        </>
      )}
    </div>
  );
};

export default Team;
