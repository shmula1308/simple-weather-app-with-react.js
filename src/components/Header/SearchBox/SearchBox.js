import React, { useRef, useContext } from "react";
import WeatherContext from "../../../store/weather-context";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import classes from "./SearchBox.module.css";

const SearchBox = (props) => {
  const locationInputRef = useRef();
  const ctx = useContext(WeatherContext);

  const fetchWeatherDataHandler = (ev) => {
    ev.preventDefault();
    const searchTerm = locationInputRef.current.value.trim();
    const API_KEY = "197b6a44145ab67b216dd460b6fee51c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=${ctx.unit}&appid=${API_KEY}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          const data = response.json();
          return data;
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        const locationData = {
          name: data.name,
          id: data.id,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          feels_like: data.main.feels_like,
          description: data.weather[0].description,
          min_temp: data.main.temp_min,
          max_temp: data.main.temp_max,
          wind_speed: data.wind.speed,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          visibility: data.visibility,
          cloudiness: data.clouds.all,
          coord: {
            lat: data.coord.lat,
            lon: data.coord.lon,
          },
          timezone: data.timezone,
          dt: data.dt,
        };

        ctx.addLocation(locationData);
      })
      .catch((error) => {
        ctx.error(error);
      });

    locationInputRef.current.value = "";
  };

  return (
    <form onSubmit={fetchWeatherDataHandler}>
      <div className={classes.controls}>
        <Input
          input={{
            id: "location",
            type: "text",
            placeholder: "Search for a location",
          }}
          ref={locationInputRef}
        />
        <Button type='submit' className={classes.searchBtn}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBox;
