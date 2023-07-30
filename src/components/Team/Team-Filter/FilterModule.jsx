import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Filter.scss";
const FilterModule = forwardRef((props, ref) => {
  const [viewDropDown, changeViewDropDown] = useState();
  const [filterValue, setFilterValue] = useState(props.title);
  let rotate = ["triangle"];
  const showDropDown = () => {
    if (viewDropDown === undefined) {
      changeViewDropDown("1");
      rotate.push("show");
    } else {
      changeViewDropDown();
      rotate.push("hide");
    }
  };
  useImperativeHandle(ref, () => ({
    dropDown() {
      if (viewDropDown === "1") {
        changeViewDropDown();
      } else {
        return 0;
      }
    },
  }));
  const onModuleValueChanged = (event) => {
    changeViewDropDown();
    setFilterValue(event.target.textContent);
    props.filterModuleData(event.target.textContent);
  };
  return (
    <div className="filter">
      <div className="dropDown" onClick={showDropDown}>
        {filterValue}
      </div>
      <div className={rotate.join(" ")}></div>
      {viewDropDown && (
        <ul className="dropDownContent">
          <div className="value" value="All" onClick={onModuleValueChanged}>
            {props.option1}{" "}
          </div>
          <div className="value" value="Web" onClick={onModuleValueChanged}>
            {props.option2}
          </div>
          <div className="value" value="Flutter" onClick={onModuleValueChanged}>
            {props.option3}
          </div>
          <div className="value" value="UI/UX" onClick={onModuleValueChanged}>
            {props.option4}
          </div>
          <div className="value" value="Android" onClick={onModuleValueChanged}>
            {props.option5}
          </div>
          <div className="value" value="Cloud" onClick={onModuleValueChanged}>
            {props.option6}
          </div>
        </ul>
      )}
    </div>
  );
});

FilterModule.displayName = "FilterModule";
export default FilterModule;
