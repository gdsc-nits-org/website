import React, { useState } from "react";
import "./Team.scss";
import TeamHome from "../../components/Hero-lottie/HeroLottie.jsx";
import FacultyTeamCard from "../../components/Team/FacultyTeamCard/FacultyTeamCard";
import TeamCard from "../../components/Team/Team-Card/TeamCard";
import FilterModule from "../../components/Team/Team-Filter/FilterModule";
import Faculty from "../../assets/data/Faculty";
import TeamData from "../../assets/data/Data";
import ScrollToSection from "../../components/ScrollToSection/ScrollToSection";

function data(value) {
  return <TeamCard {...value} key={value._id} />;
}

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

  const FacultyAdvisor = Faculty.filter((m) =>
    filterBatchValue === "2021-22" ||
    filterBatchValue === "2022-23" ||
    filterBatchValue === "2023-24"
      ? m.batch.includes(filterBatchValue)
      : currentBatch
  );

  const filteredMemberList = newMemberList.filter((member) =>
    filterBatchValue === "2021-22" ||
    filterBatchValue === "2022-23" ||
    filterBatchValue === "2023-24"
      ? member.Batch == `${filterBatchValue}`
      : currentBatch
  );

  const GDSCLead = filteredMemberList.filter((member) => member.Description === "Lead");

  const newFilteredMemberList = filteredMemberList.filter((member) => {
    if (
      filterModuleValue === "Web" ||
      filterModuleValue === "Android" ||
      filterModuleValue === "Flutter" ||
      filterModuleValue === "Cloud" ||
      filterModuleValue === "UI/UX"
    ) {
      filterByDomain = true;
      return member.Domain == `${filterModuleValue}`;
    } else return filteredMemberList;
  });

  const CoreMemberList = newFilteredMemberList.filter(
    (member) => member.Description !== "" || member.Description !== "Lead"
  );

  const OtherMemberList = newFilteredMemberList
    .filter((member) => member.Description == "")
    .sort(sortArray);

  const sortedCoreMemberList = (() => {
    const mods = CoreMemberList.filter(
      (member) => member.Description.split(" ")[1] === "Moderator"
    );
    const notMod = CoreMemberList.filter(
      (member) => member.Description === "Core Member"
    );
    notMod.sort(sortArray);
    mods.sort(sortArray);
    return mods.concat(notMod);
  })();

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
      <div className="grid">{GDSCLead.map(data)}</div>

      {filterByDomain ? (
        <>
          <div className="member-title" id="core">
            CORE MEMBERS
          </div>
          <div className="grid">{sortedCoreMemberList.map(data)}</div>
          <div className="member-title" id="members">
            MEMBERS
          </div>
          <div className="grid">{OtherMemberList.map(data)}</div>
        </>
      ) : (
        <>
          <div className="member-title" id="core">
            CORE MEMBERS
          </div>
          <div className="grid">{sortedCoreMemberList.map(data)}</div>
          <div className="member-title" id="members">
            MEMBERS
          </div>
          <div className="grid">{OtherMemberList.map(data)}</div>
        </>
      )}
    </div>
  );
};

export default Team;
