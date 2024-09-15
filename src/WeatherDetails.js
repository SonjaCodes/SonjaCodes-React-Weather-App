import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails" class="row d-flex align-items-center">
      <div class="col-6">
        <h1>{props.data.city}</h1>
        <ul class="list-unstyled">
          <li>
            {props.data.date}, {props.data.description}
          </li>

          <li>
            Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
            <strong>
              {props.data.wind}
              km/h
            </strong>
          </li>
        </ul>
      </div>

      <div class="col-6">
        <div class="temperature-container d-flex justify-content-end">
          <div className="temperatureIcon">
            <WeatherIcon code={props.data.icon} size={68} />
          </div>
          <span className="currentTemperature">{props.data.temperature}</span>
          <span className="units">°C</span>
        </div>
      </div>
    </div>
  );
}
