import React, { useContext, useEffect } from "react";
import classes from "./WeatherList.module.css";
import WeatherContext from "../../store/weather-context";
import WeatherCard from "./WeatherCard";

const WeatherList = (props) => {
  const ctx = useContext(WeatherContext);

  useEffect(() => {
    console.log(ctx.locations);
  }, [ctx.locations]);

  return (
    <ul className={classes.list}>
      <WeatherCard />
    </ul>
  );
};

export default WeatherList;
