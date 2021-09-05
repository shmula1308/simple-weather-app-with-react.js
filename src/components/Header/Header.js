import React, { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./Header.module.css";
import { FaCloudSun } from "react-icons/fa";
import SearchBox from "./SearchBox/SearchBox";
import Button from "../../UI/Button";

const Header = (props) => {
  const ctx = useContext(WeatherContext);

  const clearDataHandler = () => {
    ctx.reset();
  };

  return (
    <header className={classes.header}>
      <div className={classes["nav-container"]}>
        <nav className={classes.nav}>
          <a href='#!' className={classes.logo}>
            <FaCloudSun className={classes.icon} />
            <span className={classes["logo-text"]}>Shpend'sWeatherApp</span>
          </a>
          <div className={classes.actions}>
            <Button className={classes.desktop} onClick={clearDataHandler}>
              Clear weather data
            </Button>
            <Button className={classes.mobile} onClick={clearDataHandler}>
              C
            </Button>
          </div>
          <div className={classes.searchBox}>
            <SearchBox />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
