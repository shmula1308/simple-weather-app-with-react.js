import React, { useRef, useContext, useState, useEffect } from "react";
import WeatherContext from "../../../store/weather-context";
import moment from "moment";
import timezone from "moment-timezone";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import classes from "./SearchBox.module.css";

const SearchBox = () => {
  const locationInputRef = useRef();
  const ctx = useContext(WeatherContext);
  const [locationData, setLocationData] = useState({
    sunrise: null,
    sunset: null,
    timezoneStr: "",
  });

  const { addLocation } = ctx;

  useEffect(() => {
    if (!locationData.timezoneStr) {
      return;
    }

    const sunrise = moment.unix(locationData.sunrise).tz(locationData.timezoneStr).format("h:mm a");
    const sunset = moment.unix(locationData.sunset).tz(locationData.timezoneStr).format("h:mm a");

    addLocation({
      ...locationData,
      sunrise: sunrise,
      sunset: sunset,
    });
  }, [locationData, addLocation]);

  const fetchWeatherDataHandler = (ev) => {
    ev.preventDefault();
    const searchTerm = locationInputRef.current.value.trim();
    const API_KEY = "197b6a44145ab67b216dd460b6fee51c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${API_KEY}`;
    ctx.setIsLoading(true);

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed! " + response.status);
        }
      })
      .then((data) => {
        const weatherData = {
          name: data.name,
          countryCode: data.sys.country,
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
          coord: {
            lat: data.coord.lat,
            lon: data.coord.lon,
          },
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          visibility: data.visibility,
          cloudiness: data.clouds.all,
          timezone: data.timezone,
          timezoneStr: "",
          dt: data.dt,
        };

        setLocationData(weatherData);

        const lat = data.coord.lat;
        const lon = data.coord.lon;
        const urlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

        return fetch(urlOneCall);
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setLocationData((prevData) => {
          return {
            ...prevData,
            timezoneStr: data.timezone,
          };
        });
      })
      .catch((error) => {
        ctx.hasError(error.message);
      });
    ctx.setIsLoading(false);
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
