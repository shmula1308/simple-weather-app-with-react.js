import React, { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./UnitToggle.module.css";

const UnitToggle = (props) => {
  const ctx = useContext(WeatherContext);
  const unitSwitchHandler = () => {
    ctx.changeUnit();
  };
  return (
    <div className={classes.toggle}>
      <label htmlFor='unit'>
        <span>{props.from}</span>
      </label>
      <input className={classes.switch} type='checkbox' id='unit' onClick={unitSwitchHandler} />
      <label htmlFor='unit'>
        <span>{props.to}</span>
      </label>
    </div>
  );
};

export default UnitToggle;
