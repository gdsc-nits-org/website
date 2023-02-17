import React ,{useState,useEffect} from "react";
import "./Team.scss";
import TeamHome from  "../../components/Team/Team-Home/TeamHome.jsx"
import TeamCard from "../../components/Team/Team-Card/TeamCard";
import FilterModule from "../../components/Team/Team-Filter/FilterModule";
import TeamData from "../../assets/data/Data";


function data(value){
  return(
    <TeamCard
    key={value.key}
    ImageSrc={value.imageSrc}
    Name= {value.Name}
    Domain={value.Domain}
    Description={value.Description}
    Linkdin={value.Linkdin}
    Facebook={value.Facebook}
    Instagram={value.Instagram}
    Twitter={value.Twitter}
    />
  )
}
function Team() {
  let [newMemeberList,setMemberList] = useState(TeamData)
  let [filterBatchValue , setBatchValue]=useState("All")
  let[filterModuleValue , setModuleValue]=useState("All")
  
  function onBatchValueSelected(event){
    setBatchValue(event)
  }
  function onModuleValueChanged(filterModule){
  setModuleValue(filterModule)
  }
  
  
  let filteredMemberList = newMemeberList.filter((member)=>{
  if(filterBatchValue==="2026" ||
    filterBatchValue==="2025"  ||
    filterBatchValue==="2024"){ 
      console.log(typeof(filterBatchValue))
      
    return member.Batch==`${filterBatchValue}`
  }
  else{
    return newMemeberList
  }
})

let newFilteredMemberList = filteredMemberList.filter((member)=>{
  if(filterModuleValue==='Web'||
    filterModuleValue==='App' ||
    filterModuleValue==='UI/UX'){
    return member.Domain==`${filterModuleValue}`
  }
  else{
    return filteredMemberList
  }
})

  return <div>
    <TeamHome className="teamHome"/>
    <div className="filter">
          <p className="sort">Sort By :</p>
        <FilterModule
          className="filterByModule"
          title="Module"
          option1="All" 
          option2="Web"
          option4="UI/UX"
          option3="App"
          filterModuleData={onModuleValueChanged} /> 
        <FilterModule
          className="filterByYear"
          title="Year"
          option1="All" 
          option2="2024"
          option3="2025"
          option4="2026"
          filterModuleData={onBatchValueSelected} />
    </div>
    <div className='grid'>
        {newFilteredMemberList.map(data)}
    </div>
        
      </div>
  
}

export default Team;
