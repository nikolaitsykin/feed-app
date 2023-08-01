import React from "react";
import classes from "./Input.module.css"

const Input = ({...props}) => {
  return (
    <label>
      <input className={classes.myInput} {...props}/>
    </label>
  );
};

export default Input;
