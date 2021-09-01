import React, { useReducer } from "react";
import WeatherContext from "./weather-context";

const defaultState = {
  locations: [],
  unit: "metric",
  errorMessage: "",
};

const weatherReducer = (state, action) => {
  if (action.type === "ADD") {
    // const locations = [...state.locations];
    const updatedLocations = [...state.locations].concat(action.locationData);
    return {
      ...state,
      locations: updatedLocations,
    };
  }
  if (action.type === "ERROR") {
    console.log(action.code);
  }
  if (action.type === "REMOVE") {
    console.log("REMOVE");
  }
  if (action.type === "CHANGE") {
    console.log("CHANGE");
  }
  return defaultState;
};

const WeatherProvider = (props) => {
  const [state, dispatchWeatherAction] = useReducer(weatherReducer, defaultState);

  const addLocationWeatherHandler = (locationData) => {
    dispatchWeatherAction({ type: "ADD", locationData: locationData });
  };
  const removeCityHandler = (id) => {
    dispatchWeatherAction({ type: "REMOVE", id: id });
  };
  const changeUnitHandler = (unit) => {
    dispatchWeatherAction({ type: "UNIT", unit: unit });
  };

  const errorHandler = (errorCode) => {
    dispatchWeatherAction({ type: "ERROR", code: errorCode });
  };

  const weatherContext = {
    locations: state.locations,
    unit: state.unit,
    errorMessage: state.errorMessage,
    addLocation: addLocationWeatherHandler,
    removeLocation: removeCityHandler,
    changeUnit: changeUnitHandler,
    error: errorHandler,
  };

  return <WeatherContext.Provider value={weatherContext}>{props.children}</WeatherContext.Provider>;
};

export default WeatherProvider;
