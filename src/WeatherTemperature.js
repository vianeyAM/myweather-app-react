import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <strong id="temperature">{Math.round(props.celsius)}</strong>
        <span className="units">
          <a href="/" className="links btn disable">
            ºC{" "}
          </a>
          |
          <a href="/" className="links btn active" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-temperature">
        <strong id="temperature">{Math.round(fahrenheit())}</strong>
        <span className="units">
          <a
            href="/"
            className="links btn active"
            role="button"
            onClick={showCelsius}
          >
            ºC{" "}
          </a>
          |
          <a href="/" className="links btn disable">
            ºF
          </a>
        </span>
      </div>
    );
  }
}
