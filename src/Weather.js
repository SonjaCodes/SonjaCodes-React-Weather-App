import "./Weather.css";
import axios from "axios";
import { useState } from "react";
import { DateTime } from "luxon";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherOutput, setWeatherOutput] = useState("");
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);

  function displayWeatherOutput(response) {
    setWeatherOutput({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city === "") {
      alert("Please enter a city");
    } else {
      const apiKey = "5201594abea9f3e38b70e65b11a80c24";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayWeatherOutput);
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          class="search-form-input"
          onChange={updateCity}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
      {weatherOutput && (
        <div
          className="weatherOutput"
          class="row d-flex justify-content-space-between">
          <div class="col-6">
            <h1 className="city">{weatherOutput.city}</h1>
            <ul class="list-unstyled">
              <li>
                {date}, {weatherOutput.description}
              </li>

              <li>
                Humidity: <strong>{weatherOutput.humidity}%</strong>, Wind:{" "}
                <strong>
                  {weatherOutput.wind}
                  km/h
                </strong>
              </li>
            </ul>
          </div>

          <div class="col-6">
            <div class="temperature-container d-flex justify-content-end">
              <img
                src={weatherOutput.icon}
                alt={weatherOutput.description}
                className="weatherIcon"
              />
              <div>
                <span className="currentTemperature">
                  {weatherOutput.temperature}
                </span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
