import React from "react";
import classes from "./MyInput.module.css"

const MyInput = ({...props}) => {
  return (
    <label>
      <input className={classes.myInput} {...props}/>
    </label>
  );
};

export default MyInput;
