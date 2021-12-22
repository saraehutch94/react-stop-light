import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [red, setRed] = useState("#111");
  const [yellow, setYellow] = useState("#111");
  const [green, setGreen] = useState("#111");

  const handleRed = () => {
    setRed("red");
    setYellow("#111");
    setGreen("#111");
  };

  const handleYellow = () => {
    setYellow("yellow");
    setRed("#111");
    setGreen("#111");
  };

  const handleGreen = () => {
    setGreen("green");
    setRed("#111");
    setYellow("#111");
  };

  return (
    <div className="App">
      <section>
        <div id="controlPanel">
          <h2 id="stopButton" className="button" onClick={handleRed}>
            Stop
          </h2>
          <h2 id="slowButton" className="button" onClick={handleYellow}>
            Slow
          </h2>
          <h2 id="goButton" className="button" onClick={handleGreen}>
            Go
          </h2>
        </div>
        <div id="traffic-light">
          <div
            id="stopLight"
            style={{ backgroundColor: red }}
            className="bulb"
          ></div>
          <div
            id="slowLight"
            style={{ backgroundColor: yellow }}
            className="bulb"
          ></div>
          <div
            id="goLight"
            style={{ backgroundColor: green }}
            className="bulb"
          ></div>
        </div>
      </section>
    </div>
  );
}
