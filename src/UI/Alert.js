import classes from "./Alert.module.css";

const Alert = (props) => {
  const alertClasses = `${classes.alert}  ${props.showAlert ? classes.showAlert : ""}`;
  return (
    <div className={alertClasses}>
      <span className={classes.removeBtn} onClick={props.onClose}>
        X
      </span>
      <p>{props.message}</p>
    </div>
  );
};

export default Alert;
