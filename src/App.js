import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [lightState, setLight] = useState({
    red: "#111",
    yellow: "#111",
    green: "#111"
  });

  const handleLight = (e) => {
    if (e.target.id === "stopButton") {
      setLight({
        red: "red",
        yellow: "#111",
        green: "#111"
      });
    } else if (e.target.id === "slowButton") {
      setLight({
        red: "#111",
        yellow: "yellow",
        green: "#111"
      });
    } else {
      setLight({
        red: "#111",
        yellow: "#111",
        green: "green"
      });
    }
  };

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
