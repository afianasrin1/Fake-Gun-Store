/*
 * Don't for get to include <Cars> </Cars>
 * In App.js file
 */
​
/*----------------------------- Cars.js ------------------------------*/
/*
 * Keep this code below in ./src/components/Cars.js path
 *
 */
import { useEffect, useState } from "react";
import styles from "../css/Cars.module.css";
import Button from "./Button";
​
export default function Cars() {
  const [cars, setCars] = useState([]);
​
  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars")
      .then((res) => res.json())
      .then(({ cars: data }) => setCars(data));
  }, []);
​
  if (cars.length === 0) {
    return <div> Loading... </div>;
  }
​
  return (
    <div className={styles.carsGrid}>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
}
​
function Car({ car }) {
  const [warning, setWarning] = useState(false);
​
  const { id, car: carCompany, car_model, price } = car;
​
  const initialPercentage = {
    percent: 100,
    backgroundImage: `linear-gradient(to left, #2fff2f 100%, white 0%)`,
  };
​
  const [batteryPercentage, setBatteryPercentage] = useState(initialPercentage);
​
  const style = {
    border: "1px solid red",
    borderRadius: "3rem",
    gridColumn: "span 4",
    padding: "2rem",
  };
​
  const drive = () => {
    setBatteryPercentage((prev) => {
      if (!prev.percent || prev.percent === 0) {
        setWarning(true);
      }
​
      const { percent, backgroundImage } = prev;
      const newBgImg = backgroundImage.replace(percent, percent - 10);
      return { percent: percent - 10, backgroundImage: newBgImg };
    });
  };
​
  const recharge = () => {
    setWarning(false);
    setBatteryPercentage((prev) => {
      const { percent, backgroundImage } = prev;
      const newBgImg = backgroundImage.replace(percent, 100);
​
      return { percent: 100, backgroundImage: newBgImg };
    });
  };
​
  return (
    <div style={style} key={id}>
      <h1>{carCompany}</h1>
      <h2>{car_model}</h2>
      <p>{price}</p>
      <div className={styles.battery}>
        <div className={styles["battery-head"]}></div>
        <div className={styles["battery-body"]} style={batteryPercentage}></div>
      </div>
      <div style={{ display: warning ? "block" : "none" }}>
        <p>Please Recharge / Refuel your car</p>
      </div>
      <div
        className="buttons"
        style={{
          padding: "1rem",
          margin: "1rem",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
        }}
      >
        <span onClick={drive}>
          <Button txt={"Drive"} bgColor={"blue"}></Button>
        </span>
        <span onClick={recharge}>
          <Button txt={"Recharge / Refuel"} bgColor={"green"}></Button>
        </span>
      </div>
    </div>
  );
}
​
/*-------------------------------- Button.js -------------------------*/
/*
 * Keep this code below in ./src/components/Button.js path
 *
 */
​
import { useState } from "react";
​
export default function Button({ txt, bgColor }) {
  const style = {
    backgroundColor: bgColor,
    color: "white",
    display: "block",
    textAlign: "center",
    marginTop: "0.5rem",
  };
  const [styles, setStyles] = useState(style);
  const handleClick = () => {
    setStyles((prevState) => {
      const logic = prevState.backgroundColor === "red" ? "blue" : "red";
      return { ...prevState, backgroundColor: logic };
    });
  };
  return (
    <button type="button" onClick={handleClick} className="App" style={styles}>
      {txt}
    </button>
  );
}
​
​
/* ---------------------------- Cars.module.css ----------------------*/
/*
 * Keep this code below in ./src/css/Cars.module.css path
 *
.carsGrid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  margin: 1rem 4rem;
}
​
.carItem {
  grid-column: span 4;
}
.battery {
  display: flex;
  justify-content: center;
  align-items: center;
}
.battery-head {
  height: 1rem;
  width: 0.5rem;
  background-color: black;
}
​
.battery-body {
  box-sizing: border-box;
  height: 2rem;
  width: 5rem;
  border: 5px solid black;
}
​
*/