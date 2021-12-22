import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("#111");

  const handleRed = () => {
    setColor("red");
  };

  return (
    <div className="App">
      <section>
        <div id="controlPanel">
          <h2 id="stopButton" className="button" onClick={handleRed}>
            Stop
          </h2>
          <h2 id="slowButton" className="button">
            Slow
          </h2>
          <h2 id="goButton" className="button">
            Go
          </h2>
        </div>
        <div id="traffic-light">
          <div
            id="stopLight"
            style={{ backgroundColor: color }}
            className="bulb"
          ></div>
          <div
            id="slowLight"
            style={{ backgroundColor: color }}
            className="bulb"
          ></div>
          <div
            id="goLight"
            style={{ backgroundColor: color }}
            className="bulb"
          ></div>
        </div>
      </section>
    </div>
  );
}
