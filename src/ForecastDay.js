import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = (date.getDay() + 1) % 7;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={38} />
      <div className="forecast-temperature">
        <span className="forecast-max">{maxTemperature()}</span>
        <span className="forecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
