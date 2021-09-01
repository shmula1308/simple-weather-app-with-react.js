import React from "react";
import { FaRegTrashAlt, FaChevronDown } from "react-icons/fa";
import classes from "./WeatherCard.module.css";

const WeatherCard = (props) => {
  return (
    <li className={classes.weatherCard}>
      <details>
        <summary className={classes.header}>
          <div className={classes.trashBtn}>
            <FaRegTrashAlt />
          </div>
          <div className={classes["header-content"]}>
            <div className={classes.location}>
              <p className={classes.time}>10:34</p>
              <p className={classes.city}>Pristina</p>
            </div>
            <div className={classes.icon}>
              <img className={classes["weather-icon"]} src='/' />
            </div>
            <div className={classes.temp}>13&#176;</div>
            <div className={classes.realfeel}>
              <span>RealFeel</span>
              <span> 17 &#176;</span>
            </div>
            <div className={classes.description}>Mostly Sunny</div>
            <div>
              <FaChevronDown className={classes.arrow} />
            </div>
          </div>
        </summary>
        <div className={classes.content}>
          <div className={classes.column}>
            <div className={classes.data}>
              <span className={classes.key}>Min-temp</span>
              <span className={classes.value}>17 &#176;C</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Max-temp</span>
              <span className={classes.value}>27&#176;C</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Wind</span>
              <span className={classes.value}>N 2km/h</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Sunrise</span>
              <span className={classes.value}>7:00 AM</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Sunset</span>
              <span className={classes.value}>16:54 PM</span>
            </div>
          </div>
          <div className={classes.column}>
            <div class={classes.data}>
              <span className={classes.key}>Humidity</span>
              <span className={classes.value}>35%</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Pressure</span>
              <span className={classes.value}>4 hPa</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Visibility</span>
              <span className={classes.value}>10 km</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Cloudiness</span>
              <span className={classes.value}>40 %</span>
            </div>
            <div class={classes.data}>
              <span className={classes.key}>Lon/Lat</span>
              <span className={classes.value}>-40.13/30.21</span>
            </div>
          </div>
        </div>
      </details>
    </li>
  );
};

export default WeatherCard;
