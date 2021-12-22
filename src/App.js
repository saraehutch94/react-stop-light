import "./styles.css";

export default function App() {
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
          <div id="stopLight" className="bulb"></div>
          <div id="slowLight" className="bulb"></div>
          <div id="goLight" className="bulb"></div>
        </div>
      </section>
    </div>
  );
}
