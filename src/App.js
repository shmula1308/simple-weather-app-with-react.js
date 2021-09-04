import { useContext } from "react";
import WeatherContext from "./store/weather-context";
import classes from "./App.module.css";
import WeatherProvider from "./store/WeatherProvider";
import UnitToggle from "./components/Toggle/UnitToggle";
import { FaThermometerHalf } from "react-icons/fa";
import WeatherList from "./components/WeatherList/WeatherList";
import Header from "./components/Header/Header";
import Alert from "./UI/Alert";

const App = () => {
  const ctx = useContext(WeatherContext);
  return (
    <div className='app'>
      <Header />
      <main className={classes.main}>
        <div className={classes.actions}>
          <FaThermometerHalf className={classes.icon} />
          <UnitToggle from='&#176;C' to='&#176;F' />
        </div>
        <div className={classes.container}>
          <WeatherList />
        </div>
      </main>
      {ctx.alert && <Alert message='Location is already displayed!' />}
    </div>
  );
};

export default App;
