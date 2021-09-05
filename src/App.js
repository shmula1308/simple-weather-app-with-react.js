import { useContext, useState } from "react";
import WeatherContext from "./store/weather-context";
import classes from "./App.module.css";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";
import UnitToggle from "./components/Toggle/UnitToggle";
import { FaThermometerHalf } from "react-icons/fa";
import WeatherList from "./components/WeatherList/WeatherList";
import Header from "./components/Header/Header";
import Alert from "./UI/Alert";
import { useEffect } from "react/cjs/react.development";

const App = () => {
  const ctx = useContext(WeatherContext);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (!ctx.alert) {
      return;
    }

    if (ctx.alert) {
      setShowAlert(true);
    }

    let timer = setTimeout(() => {
      setShowAlert(false);
      ctx.removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx, ctx.alert]);

  const removeAlertHandler = () => {
    setShowAlert(false);
  };

  let content = <p className={classes.results}>No results!</p>;

  if (ctx.isLoading) {
    content = null;
  }
  if (ctx.locations.length > 0) {
    content = <WeatherList />;
  }

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  return (
    <div className='app'>
      <Header />
      <main className={classes.main}>
        <div className={classes.actions}>
          <FaThermometerHalf className={classes.icon} />
          <UnitToggle from='&#176;C' to='&#176;F' />
        </div>
        <div className={classes.container}>{content}</div>
        <div>
          <ClockLoader loading={ctx.isLoading} size={55} css={override} />
        </div>
      </main>
      {<Alert showAlert={showAlert} onClose={removeAlertHandler} message={ctx.errorMessage} />}
    </div>
  );
};

export default App;
