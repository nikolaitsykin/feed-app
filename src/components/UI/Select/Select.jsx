import React from "react";
import classes from "./Select.module.css"

const MySelect = ({ value, defaultValue, options, onChange }) => {
  return (
    <select value={value} className={classes.mySelect}
    onChange={e => onChange(e.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
