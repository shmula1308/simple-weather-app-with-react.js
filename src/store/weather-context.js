import React from "react";

const WeatherContext = React.createContext({
  locations: [],
  unit: "",
  errorMessage: "",
  isLoading: false,
  addLocation: () => {},
  removeLocation: () => {},
  changeUnit: () => {},
  setIsLoading: () => {},
  error: () => {},
  alert: false,
});

export default WeatherContext;
