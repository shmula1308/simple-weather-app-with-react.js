import React, { useContext } from "react";
import classes from "./WeatherList.module.css";
import WeatherContext from "../../store/weather-context";
import WeatherCard from "./WeatherCard";

const WeatherList = (props) => {
  const ctx = useContext(WeatherContext);
  const { locations } = ctx;

  return (
    <ul className={classes.list}>
      {locations.map((location) => {
        return (
          <WeatherCard
            key={location.id}
            id={location.id}
            name={location.name}
            countryCode={location.countryCode}
            icon={location.icon}
            temp={location.temperature}
            feels={location.feels_like}
            desc={location.description}
            minTemp={location.min_temp}
            maxTemp={location.max_temp}
            windSpeed={location.wind_speed}
            sunrise={location.sunrise}
            sunset={location.sunset}
            humidity={location.humidity}
            pressure={location.pressure}
            visibility={location.visibility}
            cloudiness={location.cloudiness}
            coord={location.coord}
            timezone={location.timezone}
            dt={location.dt}
          />
        );
      })}
    </ul>
  );
};

export default WeatherList;
