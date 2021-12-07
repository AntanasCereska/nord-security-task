import React from "react";
import "./picklist.scss";

const Picklist = ({ PicklistValues, func }) => {
  return (
    <select className="picklist" onChange={(e) => func(e.target.value)}>
      {PicklistValues.map((item) => (
        <option value={item.value} key={item.title}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default Picklist;
