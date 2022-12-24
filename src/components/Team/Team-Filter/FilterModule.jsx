import React, {useState} from "react"
import './Filter.scss'
function FilterModule(props){
    const[viewDropDown , changeViewDropDown]=useState()
    const [filterValue , setFilterValue]=useState(props.title)
    let rotate = ["triangle"]
    const showDropDown =()=>{
        if(viewDropDown===undefined){
            changeViewDropDown("1")
            rotate.push("show")
            console.log(rotate)
        }
        else{
            changeViewDropDown()
            rotate.push("hide")
            console.log(rotate)
        }
        
    }
    const onModuleValueChanged=(event)=>{
        changeViewDropDown()
        setFilterValue(event.target.textContent)
        props.filterModuleData(event.target.textContent)
    }
    return (
        <div className="filter">
            <div className="dropDown" onClick={showDropDown}>{filterValue}</div>
            <div className={rotate.join(" ")}></div>
            {viewDropDown &&<ul className="dropDownContent">
                <div className="value" value="All" onClick={onModuleValueChanged} >{props.option1} </div>
                <div className="value" value="Web" onClick={onModuleValueChanged} >{props.option2}</div>
                <div className="value" value="App" onClick={onModuleValueChanged}>{props.option3}</div>
                <div className="value" value="UI/UX" onClick={onModuleValueChanged}>{props.option4}</div>
            </ul>}
        </div>
    )

}


export default FilterModule