import "./Weather.css";
import { WeatherSVG } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "partlycloudy",
    "scattered-clouds-day": "partlycloudy",
    "scattered-clouds-night": "partlycloudy",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "pouring",
    "shower-rain-night": "pouring",
    "rain-day": "rainy",
    "rain-night": "rainy",
    "thunderstorm-day": "lightning-rainy",
    "thunderstorm-night'": "lightning-rainy",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "fog",
    "mist-night": "fog",
  };
  return (
    <WeatherSVG
      icon={codeMapping[props.code]}
      color={props.color}
      size={props.size}
      animate={true}
    />
  );
}
