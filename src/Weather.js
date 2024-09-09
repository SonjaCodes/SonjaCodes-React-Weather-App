import "./Weather.css";
import axios from "axios";
import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weatherOutput, setWeatherOutput] = useState(null);

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
      <hr />
      {weatherOutput && (
        <div className="weatherOutput" class="row">
          <div class="col-8">
            <h1>{weatherOutput.city}</h1>
            <p>{weatherOutput.description}
            <br />
              Humidity: {weatherOutput.humidity}%, Wind: {weatherOutput.wind}
              km/h
            </p>
          </div>

          <div class="col-1">
            <img src={weatherOutput.icon} alt={weatherOutput.description} />
          </div>
          <div class="col-2">{weatherOutput.temperature}</div>
          <div class="col-1">°C</div>
        </div>
      )}
    </div>
  );
}
