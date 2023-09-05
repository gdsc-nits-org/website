import React, { useState, useRef } from "react";
import "./Team.scss";
import TeamHome from "../../components/Hero-lottie/HeroLottie.jsx";
import TeamCard from "../../components/Team/Team-Card/TeamCard";
import FilterModule from "../../components/Team/Team-Filter/FilterModule";
import TeamData from "../../assets/data/Data";
import ScrollToSection from "../../components/ScrollToSection/ScrollToSection";

function data(value) {
  return (
    <TeamCard
      key={value._id}
      ImageSrc={value.imageSrc}
      Name={value.Name}
      Domain={value.Domain}
      Description={value.Description}
      Website={value.Website}
      Linkdin={value.Linkdin}
      Facebook={value.Facebook}
      Github={value.Github}
    />
  );
}
const Team = () => {
  ScrollToSection();
  let currentBatch = "2023-24";
  let [newMemeberList] = useState(TeamData);
  let [filterBatchValue, setBatchValue] = useState(currentBatch);
  let [filterModuleValue, setModuleValue] = useState("All");

  const sortArray = (x, y) => (x.Name < y.Name ? -1 : 1);

  const DropDownRef = useRef();

  function onBatchValueSelected(event) {
    setBatchValue(event);
  }
  function onModuleValueChanged(filterModule) {
    setModuleValue(filterModule);
  }
  let filterByDomain = false;

  let filteredMemberList = newMemeberList.filter((member) =>
    filterBatchValue === "2022-23" ||
    filterBatchValue === "2023-24" ||
    filterBatchValue === "2024-25"
      ? member.Batch == `${filterBatchValue}`
      : currentBatch
  );

  let newFilteredMemberList = filteredMemberList.filter((member) => {
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

  let CoreMemberList = newFilteredMemberList.filter((member) => member.Description != "");
  let GDSCLead = newFilteredMemberList.filter((member) => member.Description === "Lead");

  let OtherMemberList = newFilteredMemberList.filter(
    (member) => member.Description == ""
  );

  const sortedCoreMemberList = (() => {
    const mods = CoreMemberList.filter(
      (member) => member.Description.split(" ")[1] == "Moderator"
    );
    const notMod = CoreMemberList.filter(
      (member) => member.Description.split(" ")[1] != "Moderator"
    );
    notMod.sort(sortArray);
    mods.sort(sortArray);
    return mods.concat(notMod);
  })();

  return (
    <div
      onClick={() => {
        DropDownRef.current.dropDown();
      }}
    >
      <TeamHome className="teamHome" page="team" />
      <div className="filter">
        <p className="sort">Sort By :</p>
        <FilterModule
          ref={DropDownRef}
          className="filterByModule"
          title="Module"
          option1="All"
          option2="Web"
          option4="UI/UX"
          option3="Flutter"
          option5="Android"
          option6="Cloud"
          filterModuleData={onModuleValueChanged}
        />
        <FilterModule
          ref={DropDownRef}
          className="filterByYear"
          title={currentBatch}
          option1="2022-23"
          option2="2023-24"
          // option3="2024-25"
          filterModuleData={onBatchValueSelected}
        />
      </div>

      {filterByDomain ? (
        <>
          <div className="member-title" id="core">
            CORE MEMBERS
          </div>
          <div className="grid">{sortedCoreMemberList.map(data)}</div>
          <div className="member-title" id="members">
            MEMBERS
          </div>
          <div className="grid">{OtherMemberList.sort(sortArray).map(data)}</div>
        </>
      ) : (
        <>
          <div className="member-title">LEAD</div>
          <div className="grid">{GDSCLead.map(data)}</div>
          <div className="member-title" id="core">
            CORE MEMBERS
          </div>
          <div className="grid">
            {sortedCoreMemberList
              .filter((member) => member.Description != "Lead")
              .map(data)}
          </div>
          <div className="member-title" id="members">
            MEMBERS
          </div>
          <div className="grid">{OtherMemberList.sort(sortArray).map(data)}</div>
        </>
      )}
    </div>
  );
};

export default Team;
