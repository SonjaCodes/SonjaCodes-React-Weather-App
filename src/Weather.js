import "./Weather.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C.`
    );
  }
  const apiKey = "5201594abea9f3e38b70e65b11a80c24";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <ClipLoader
      color={"#f53b9b"}
      size={120}
      aria-label="Loading Spinner"
      timeout={3000}
    />
  );
}
