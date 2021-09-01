import React from "react";

const WeatherContext = React.createContext({
  locations: [],
  unit: "",
  errorMessage: "",
  addLocation: () => {},
  removeLocation: () => {},
  changeUnit: () => {},
});

export default WeatherContext;
