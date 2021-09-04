import React, { useReducer, useCallback } from "react";
import WeatherContext from "./weather-context";

const defaultState = {
  locations: [],
  unit: "metric",
  isLoading: false,
  errorMessage: "",
  alert: false,
};

const weatherReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingLocation = state.locations.find((locations) => locations.id === action.locationData.id);

    if (existingLocation) {
      return {
        ...state,
        alert: !state.alert,
      };
    }

    const updatedLocations = [...state.locations].concat(action.locationData);
    return {
      ...state,
      locations: updatedLocations,
    };
  }

  if (action.type === "REMOVE") {
    const updatedLocations = state.locations.filter((location) => location.id !== action.id);

    return {
      ...state,
      locations: updatedLocations,
    };
  }

  if (action.type === "UNIT") {
    return {
      ...state,
      unit: state.unit === "metric" ? "imperial" : "metric",
    };
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
  const removeLocationHandler = (id) => {
    dispatchWeatherAction({ type: "REMOVE", id: id });
  };
  const changeUnitHandler = () => {
    dispatchWeatherAction({ type: "UNIT" });
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
    removeLocation: removeLocationHandler,
    changeUnit: changeUnitHandler,
    setIsLoading: loadingHandler,
    hasError: errorHandler,
    alert: state.alert,
  };

  return <WeatherContext.Provider value={weatherContext}>{props.children}</WeatherContext.Provider>;
};

export default WeatherProvider;
