import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let audio = new Audio("/beep.wav");

  let userBPM; // Пользовательское значение метронома
  const [startTimeState, setStateInterval] = useState("");
  const bpm = 1000; // убрать когда будет UI
  function saveTimer() {
    let startTime = Date.now();
    setStateInterval(startTime); // выкинули наверх в глобальный стейт
    const beep = () => {
      audio.play();
      console.log("Beeeep");
      startTime += bpm;
      setStateInterval(startTime);
      // console.log('startTimeState------------------------>', startTimeState)
    };
    const myTimerSetInterval = () => setInterval(beep, bpm);

    return myTimerSetInterval();
    // var t = d.toLocaleTimeString();
  }
  function hit() {
    const hitTime = Date.now();
    // console.log('startTimeState------------------------>', startTimeState)
    console.log("hitTime", hitTime);
    console.log("bmp", bpm);

    // const faultMinus = startTimeState + bpm - bpm/64;  Погрешность минус одна шестьдесятчетвертая
    // const faultPlus = startTimeState + bpm + bpm/64;   Погрешность плюс одна шестьдесятчетвертая

    const bpm2 = startTimeState + bpm;
    if (hitTime > startTimeState && hitTime < bpm2 - 200) {
      console.log("SLOW NUB");
    }
    if (hitTime >= bpm2 - 200 && hitTime <= bpm2) {
      console.log("GOD");
    }
  }

  return (
    <>
      {" "}
      <button onClick={saveTimer}>CLICK</button>
      <button onClick={hit}>CLICK TO TEST</button>
    </>
  );
}

export default App;
