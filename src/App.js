import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState({ backgroundColor: "#111" });

  return (
    <div className="App">
      <section>
        <div id="controlPanel">
          <h2 id="stopButton" className="button">
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
          <div id="stopLight" style={color} className="bulb"></div>
          <div id="slowLight" style={color} className="bulb"></div>
          <div id="goLight" style={color} className="bulb"></div>
        </div>
      </section>
    </div>
  );
}
