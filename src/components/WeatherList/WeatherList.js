import React from "react";
import classes from "./WeatherList.module.css";
import WeatherCard from "./WeatherCard";

const WeatherList = (props) => {
  return (
    <ul className={classes.list}>
      <WeatherCard />
    </ul>
  );
};

export default WeatherList;
