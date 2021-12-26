import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // const [red, setRed] = useState("#111");
  // const [yellow, setYellow] = useState("#111");
  // const [green, setGreen] = useState("#111");

  const [lightState, setLight] = useState({
    red: "#111",
    yellow: "#111",
    green: "#111"
  });

  const handleLight = (e) => {
    console.log(e.target);
  };

  // const handleRed = () => {
  //   setRed("red");
  //   setYellow("#111");
  //   setGreen("#111");
  // };

  // const handleYellow = () => {
  //   setYellow("yellow");
  //   setRed("#111");
  //   setGreen("#111");
  // };

  // const handleGreen = () => {
  //   setGreen("green");
  //   setRed("#111");
  //   setYellow("#111");
  // };

  return (
    <div className="App">
      <section>
        <div id="controlPanel">
          <h2 id="stopButton" className="button" onClick={handleLight}>
            Stop
          </h2>
          <h2 id="slowButton" className="button" onClick={handleLight}>
            Slow
          </h2>
          <h2 id="goButton" className="button" onClick={handleLight}>
            Go
          </h2>
        </div>
        <div id="traffic-light">
          <div
            id="stopLight"
            style={{ backgroundColor: lightState.red }}
            className="bulb"
          ></div>
          <div
            id="slowLight"
            style={{ backgroundColor: lightState.yellow }}
            className="bulb"
          ></div>
          <div
            id="goLight"
            style={{ backgroundColor: lightState.green }}
            className="bulb"
          ></div>
        </div>
      </section>
    </div>
  );
}
