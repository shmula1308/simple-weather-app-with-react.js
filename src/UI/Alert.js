import React, { Fragment, useContext } from "react";
import WeatherContext from "../store/weather-context";
import ReactDOM from "react-dom";
import classes from "./Alert.module.css";

const AlertOverlay = (props) => {
  const ctx = useContext(WeatherContext);
  const alertClasses = `${classes.alert} ${ctx.alert ? classes.showAlert : ""}`;

  return (
    <div className={alertClasses}>
      <p>{props.message}</p>
    </div>
  );
};

const Alert = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<AlertOverlay message={props.message} />, document.getElementById("overlays"))}
    </Fragment>
  );
};
export default Alert;
