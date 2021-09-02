import React from "react";
import { FaRegTrashAlt, FaChevronDown } from "react-icons/fa";
import classes from "./WeatherCard.module.css";

const WeatherCard = (props) => {
  const temp = Math.floor(props.temp);
  const minTemp = Math.floor(props.minTemp);
  const maxTemp = Math.floor(props.maxTemp);
  const realFeel = Math.floor(props.feels);
  const windSpeed = Math.floor(props.windSpeed);
  const visibility = Math.floor(props.visibility / 1000);
  const currentTime = new Date(props.dt * 1000).toLocaleTimeString().slice(0, -3);
  const sunrise = new Date(props.sunrise * 1000).toLocaleTimeString().slice(0, -3);
  const sunset = new Date(props.sunset * 1000).toLocaleTimeString().slice(0, -3);

  const onRemoveHandler = (id) => {
    console.log(id);
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
            <div className={classes.temp}>{temp}&#176;</div>
            <div className={classes.realfeel}>
              <span>RealFeel </span>
              <span>{realFeel}&#176;</span>
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
              <span className={classes.value}>{minTemp}&#176;C</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Max-temp</span>
              <span className={classes.value}>{maxTemp}&#176;C</span>
            </div>
            <div className={classes.data}>
              <span className={classes.key}>Wind</span>
              <span className={classes.value}>{windSpeed} km/h</span>
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
              <span className={classes.value}>{visibility} km</span>
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
