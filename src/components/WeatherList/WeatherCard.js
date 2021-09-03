import React, { useContext } from "react";
import { FaRegTrashAlt, FaChevronDown } from "react-icons/fa";
import WeatherContext from "../../store/weather-context";
import classes from "./WeatherCard.module.css";

const WeatherCard = (props) => {
  const ctx = useContext(WeatherContext);
  const { unit } = ctx;

  const farenheit = (temp) => {
    return Math.floor((temp * 9) / 5 + 32);
  };

  const miles = (speed) => {
    return (speed / 1.609).toFixed(2);
  };

  const currentTemp = unit === "imperial" ? farenheit(props.temp) : Math.floor(props.temp);

  const minTemp =
    unit === "imperial" ? farenheit(props.minTemp) + "\u2109" : Math.floor(props.minTemp) + "\u2103";

  const maxTemp =
    unit === "imperial" ? farenheit(props.maxTemp) + "\u2109" : Math.floor(props.maxTemp) + "\u2103";

  const realFeel =
    unit === "imperial" ? farenheit(props.feels) + "\u2109" : Math.floor(props.feels) + "\u2103";

  const windSpeed =
    unit === "imperial" ? miles(props.windSpeed) + " m/h" : props.windSpeed.toFixed(2) + " km/h";

  const visibility =
    unit === "imperial"
      ? Math.floor(miles(props.visibility) / 1000) + " mi."
      : Math.floor(props.visibility) / 1000 + " km";

  const sunrise = new Date(props.sunrise * 1000).toLocaleTimeString().slice(0, -3);
  const sunset = new Date(props.sunset * 1000).toLocaleTimeString().slice(0, -3);

  const addZero = (component) => {
    return component < 10 ? "0" + component : component;
  };

  const generateCurrentTime = (timezone) => {
    let now = new Date();
    let localTime = now.getTime();
    let localOffset = now.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset;
    let city = utc + 1000 * timezone;
    let nd = new Date(city);
    let hours = nd.getHours();
    let minutes = nd.getMinutes();
    let amOrPm = hours < 12 ? "AM" : "PM";
    hours = addZero(hours);
    minutes = addZero(minutes);
    return `${hours}:${minutes} ${amOrPm}`;
  };

  const currentTime = generateCurrentTime(props.timezone);

  const onRemoveHandler = (id) => {
    ctx.removeLocation(id);
  };

  return (
    <li className={classes.weatherCard}>
      <div className={classes.trashBtn} onClick={onRemoveHandler.bind(null, props.id)}>
        <FaRegTrashAlt />
      </div>
      <details>
        <summary className={classes.header}>
          <div className={classes["header-content"]}>
            <div className={classes.location}>
              <p className={classes.time}>{currentTime}</p>
              <p className={classes.city}>{props.name}</p>
            </div>
            <div className={classes.icon}>
              <img
                className={classes["weather-icon"]}
                src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
                alt=''
              />
            </div>
            <div className={classes.temp}>{currentTemp}&#176;</div>
            <div className={classes.realfeel}>
              <span>RealFeel </span>
              <span>{realFeel}</span>
            </div>
            <div className={classes.description}>{props.desc}</div>
            <div>
              <FaChevronDown className={classes.arrow} />
            </div>
          </div>
        </summary>
        <div className={classes.content}>
          <div className={classes.column}>
            <div className={classes.data}>
              <span className={classes.key}>Min-temp</span>
              <span className={classes.value}>{minTemp}</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Max-temp</span>
              <span className={classes.value}>{maxTemp}</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Wind</span>
              <span className={classes.value}>{windSpeed}</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Sunrise</span>
              <span className={classes.value}>{sunrise} AM</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Sunset</span>
              <span className={classes.value}>{sunset} PM</span>
            </div>
          </div>
          <div className={classes.column}>
            <div className={classes.data}>
              <span className={classes.key}>Humidity</span>
              <span className={classes.value}>{props.humidity}%</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Pressure</span>
              <span className={classes.value}>{props.pressure} hPa</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Visibility</span>
              <span className={classes.value}>{visibility}</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Cloudiness</span>
              <span className={classes.value}>{props.cloudiness} %</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Lon/Lat</span>
              <span className={classes.value}>
                {props.coord.lon.toFixed(2)}/{props.coord.lat.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </details>
    </li>
  );
};

export default WeatherCard;
