import React, { useState } from "react";
import "./Filter.scss";
const FilterModule = (props) => {
  const [viewDropDown, setViewDropDown] = useState(false);
  const [filterValue, setFilterValue] = useState(props.default);
  const showDropDown = () => setViewDropDown(!viewDropDown);
  const onModuleValueChanged = (event) => {
    setViewDropDown(!viewDropDown);
    setFilterValue(event.target.textContent);
    props.filterModuleData(event.target.textContent);
  };
  return (
    <div className="filter">
      <div className="dropDown" onClick={showDropDown}>
        {filterValue}
      </div>
      <div className="triangle" onClick={showDropDown}></div>
      {viewDropDown && (
        <ul className="dropDownContent">
          {props.option1 && (
            <div className="value" value={props.option1} onClick={onModuleValueChanged}>
              {props.option1}
            </div>
          )}
          {props.option2 && (
            <div className="value" value={props.option2} onClick={onModuleValueChanged}>
              {props.option2}
            </div>
          )}
          {props.option3 && (
            <div className="value" value={props.option3} onClick={onModuleValueChanged}>
              {props.option3}
            </div>
          )}
          {props.option4 && (
            <div className="value" value={props.option4} onClick={onModuleValueChanged}>
              {props.option4}
            </div>
          )}
          {props.option5 && (
            <div className="value" value={props?.option5} onClick={onModuleValueChanged}>
              {props.option5}
            </div>
          )}
          {props.option6 && (
            <div className="value" value={props?.option6} onClick={onModuleValueChanged}>
              {props.option6}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

FilterModule.displayName = "FilterModule";
export default FilterModule;
