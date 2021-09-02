import React, { useContext } from "react";
import classes from "./WeatherList.module.css";
import WeatherContext from "../../store/weather-context";
import WeatherCard from "./WeatherCard";

const WeatherList = (props) => {
  const ctx = useContext(WeatherContext);

  const { locations } = ctx;
  // const locationData = {
  //   name: data.name,
  //   id: data.id,
  //   icon: data.weather[0].icon,
  //   temperature: data.main.temp,
  //   feels_like: data.main.feels_like,
  //   description: data.weather[0].description,
  //   min_temp: data.main.temp_min,
  //   max_temp: data.main.temp_max,
  //   wind_speed: data.wind.speed,
  //   sunrise: data.sys.sunrise,
  //   sunset: data.sys.sunset,
  //   humidity: data.main.humidity,
  //   pressure: data.main.pressure,
  //   visibility: data.visibility,
  //   cloudiness: data.clouds.all,
  //   coord: {
  //     lat: data.coord.lat,
  //     lon: data.coord.lon,
  //   },
  //   timezone: data.timezone,
  //   dt: data.dt,
  // };
  return (
    <ul className={classes.list}>
      {locations.map((location) => {
        return (
          <WeatherCard
            key={location.id}
            id={location.id}
            name={location.name}
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
