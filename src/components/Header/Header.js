import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { FaCloudSun } from "react-icons/fa";
import SearchBox from "../SearchBox/SearchBox";
import Button from "../../UI/Button";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes["nav-container"]}>
        <nav className={classes.nav}>
          <a href='#!' className={classes.logo}>
            <FaCloudSun style={{ color: "#FF8E71", fontSize: "2.3rem" }} />
            <span className={classes["logo-text"]}>SimpleWeatherApp</span>
          </a>
          <div className={classes.actions}>
            <Button className={classes.desktop}>Clear weather data</Button>
            <Button className={classes.mobile}>C</Button>
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
