import React from "react";
import Input from "../../UI/Input";
import classes from "./UnitToggle.module.css";

const UnitToggle = (props) => {
  return (
    <div className={classes.toggle}>
      <label htmlFor='unit'>
        <span>{props.from}</span>
      </label>
      <input className={classes.switch} type='checkbox' id='unit' />
      <label htmlFor='unit'>
        <span>{props.to}</span>
      </label>
    </div>
  );
};

export default UnitToggle;
