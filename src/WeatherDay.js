import React from "react";

export default function WeatherDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function ForecastIcon() {
    const imgurl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return imgurl;
  }
  return (
    <div className="OneDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
      <img src={ForecastIcon()} alt="" width="60" height="60"></img>
    </div>
  );
}
