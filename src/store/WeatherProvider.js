import React, { useReducer, useCallback } from "react";
import WeatherContext from "./weather-context";

const defaultState = {
  locations: [],
  unit: "metric",
  isLoading: false,
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

  if (action.type === "REMOVE") {
    console.log("REMOVE");
  }

  if (action.type === "CHANGE") {
    console.log("CHANGE");
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      errorMessage: action.code,
    };
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: action.isLoading,
    };
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

  const loadingHandler = useCallback((boolean) => {
    dispatchWeatherAction({ type: "LOADING", isLoading: boolean });
  }, []);

  const errorHandler = useCallback((errorCode) => {
    dispatchWeatherAction({ type: "ERROR", code: errorCode });
  }, []);

  const weatherContext = {
    locations: state.locations,
    unit: state.unit,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    addLocation: addLocationWeatherHandler,
    removeLocation: removeCityHandler,
    changeUnit: changeUnitHandler,
    setIsLoading: loadingHandler,
    hasError: errorHandler,
  };

  return <WeatherContext.Provider value={weatherContext}>{props.children}</WeatherContext.Provider>;
};

export default WeatherProvider;
