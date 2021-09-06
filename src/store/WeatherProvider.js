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
        errorMessage: "Location is already displayed!",
        alert: true,
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
      errorMessage: action.message,
      alert: true,
    };
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  }

  if (action.type === "REMOVEALERT") {
    return {
      ...state,
      alert: false,
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      locations: [],
    };
  }

  if (action.type === "COORD") {
    console.log(action.data);
    return {
      ...state,
      locationCoord: action.data,
    };
  }
  return defaultState;
};

const WeatherProvider = (props) => {
  const [state, dispatchWeatherAction] = useReducer(weatherReducer, defaultState);

  const addLocationWeatherHandler = useCallback((locationData) => {
    dispatchWeatherAction({ type: "ADD", locationData: locationData });
  }, []);
  const removeLocationHandler = (id) => {
    dispatchWeatherAction({ type: "REMOVE", id: id });
  };
  const changeUnitHandler = () => {
    dispatchWeatherAction({ type: "UNIT" });
  };

  const loadingHandler = useCallback((boolean) => {
    dispatchWeatherAction({ type: "LOADING", isLoading: boolean });
  }, []);

  const errorHandler = useCallback((errorMessage) => {
    dispatchWeatherAction({ type: "ERROR", message: errorMessage });
  }, []);

  const removeAlertHandler = () => {
    dispatchWeatherAction({ type: "REMOVEALERT" });
  };

  const resetHandler = () => {
    dispatchWeatherAction({ type: "RESET" });
  };

  const weatherContext = {
    locations: state.locations,
    locationCoord: state.locationCoord,
    unit: state.unit,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    addLocation: addLocationWeatherHandler,
    removeLocation: removeLocationHandler,
    changeUnit: changeUnitHandler,
    setIsLoading: loadingHandler,
    hasError: errorHandler,
    alert: state.alert,
    removeAlert: removeAlertHandler,
    reset: resetHandler,
  };

  return <WeatherContext.Provider value={weatherContext}>{props.children}</WeatherContext.Provider>;
};

export default WeatherProvider;
