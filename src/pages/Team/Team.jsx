import React, { useState,useRef} from "react";
import "./Team.scss";
import TeamHome from "../../components/Hero-lottie/HeroLottie.jsx";
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
const Team=()=> {
  let [newMemeberList] = useState(TeamData);
  let [filterBatchValue, setBatchValue] = useState("All");
  let [filterModuleValue, setModuleValue] = useState("All");

  const sortArray= (x, y)=>{
    if (x.Name < y.Name) {return -1;}
    if (x.Name > y.Name) {return 1;}
    return 0;
}
  const DropDownRef=useRef()

  function onBatchValueSelected(event) {
    setBatchValue(event);
  }
  function onModuleValueChanged(filterModule) {
    setModuleValue(filterModule);
  }
  let filterByDomain = false;
  let currentBatch = "2022-23"
  let filteredMemberList = newMemeberList.filter((member) => {
    if (
      filterBatchValue === "2022-23" ||
      filterBatchValue === "2023-24" ||
      filterBatchValue === "2024-25"
    ) {
      return member.Batch == `${filterBatchValue}`;
    } else {
      return {currentBatch};
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
      filterByDomain = true;
      return member.Domain == `${filterModuleValue}`;
    } else {
      return filteredMemberList;
    }
  });
  let CoreMemberList = newFilteredMemberList.filter((member) => {
    if(filterByDomain == true)
      {return member.Description != ""}
      else
      { 
        return member.Description != ""
      }
  });
  let GDSCLead = newFilteredMemberList.filter((member)=>{
    return member.Description === "Lead"
  }) 

  let OtherMemberList = newFilteredMemberList.filter((member) => {
    return member.Description == ""
  });

  return (
    <div onClick={()=>{DropDownRef.current.dropDown()}}>
      <TeamHome className="teamHome" page="team"/>
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
          option3="2024-25"
          filterModuleData={onBatchValueSelected}
        />
      </div>

      {filterByDomain ? (
        <>
        <div className="member-title" id="core">CORE MEMBERS</div>
        <div className="grid">{CoreMemberList.map(data)}</div>
        <div className="member-title" id="members">MEMBERS</div>
        <div className="grid">{(OtherMemberList.sort(sortArray)).map(data)}</div>
      </>
      ) : (
        <>
          <div className="member-title">LEAD</div>
          <div className="grid">{GDSCLead.map(data)}</div>
          <div className="member-title">CORE MEMBERS</div>
          <div className="grid">{(CoreMemberList.filter((member) => {
            return member.Description!="Lead"})).map(data)}</div>
          <div className="member-title">MEMBERS</div>
          <div className="grid">{(OtherMemberList.sort(sortArray)).map(data)}</div>
        </>
      )}
    </div>
  );
}

export default Team;
