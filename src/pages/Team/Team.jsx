import React, { useState } from "react";
import "./Team.scss";
import TeamHome from "../../components/Team/Team-Home/TeamHome.jsx";
import TeamCard from "../../components/Team/Team-Card/TeamCard";
import FilterModule from "../../components/Team/Team-Filter/FilterModule";
import TeamData from "../../assets/data/Data";

function data(value) {
  return (
    <TeamCard
      key={value._id}
      ImageSrc={value.imageSrc}
      Name={value.Name}
      Domain={value.Domain}
      Description={value.Description}
      Linkdin={value.Linkdin}
      Facebook={value.Facebook}
      Instagram={value.Instagram}
      Twitter={value.Twitter}
    />
  );
}
function Team() {
  let [newMemeberList] = useState(TeamData);
  let [filterBatchValue, setBatchValue] = useState("All");
  let [filterModuleValue, setModuleValue] = useState("All");

  function onBatchValueSelected(event) {
    setBatchValue(event);
  }
  function onModuleValueChanged(filterModule) {
    setModuleValue(filterModule);
  }
  let filterCoreMember = true;
  let filteredMemberList = newMemeberList.filter((member) => {
    if (
      filterBatchValue === "2026" ||
      filterBatchValue === "2025" ||
      filterBatchValue === "2024"
    ) {
      filterCoreMember = false;
      return member.Batch == `${filterBatchValue}`;
    } else {
      filterCoreMember = true;
      return newMemeberList;
    }
  });

  let newFilteredMemberList = filteredMemberList.filter((member) => {
    if (
      filterModuleValue === "Web" ||
      filterModuleValue === "Android" ||
      filterModuleValue === "Flutter" ||
      filterModuleValue === "Cloud" ||
      filterModuleValue === "UI/UX"
    ) {
      return member.Domain == `${filterModuleValue}`;
    } else {
      return filteredMemberList;
    }
  });
  let CoreMemberList = newFilteredMemberList.filter((member) => {
    return member.Batch == 2024;
  });

  let OtherMemberList = newFilteredMemberList.filter((member) => {
    return member.Batch == 2025;
  });

  return (
    <div>
      <TeamHome className="teamHome" />
      <div className="filter">
        <p className="sort">Sort By :</p>
        <FilterModule
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
          className="filterByYear"
          title="Year"
          option1="All"
          option2="2024"
          option3="2025"
          option4="2026"
          filterModuleData={onBatchValueSelected}
        />
      </div>

      {filterCoreMember ? (
        <>
          <div className="member-title">CORE MEMBERS</div>
          <div className="grid">{CoreMemberList.map(data)}</div>
          <div className="member-title">MEMBERS</div>
          <div className="grid">{OtherMemberList.map(data)}</div>
        </>
      ) : (
        <>
          <div className="grid">{newFilteredMemberList.map(data)}</div>
        </>
      )}
    </div>
  );
}

export default Team;
