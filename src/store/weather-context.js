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
  hasError: () => {},
  error: () => {},
  alert: false,
  removeAlert: () => {},
  reset: () => {},
});

export default WeatherContext;
