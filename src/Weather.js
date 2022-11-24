import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Friday",
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "ee87edddc26422e4cc399ddeca53c7c1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-city">
          <div className="col-8 pe-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </form>
          </div>
          <button className="btn" type="submit">
            <i className="fa-solid fa-magnifying-glass second-icon"></i>
          </button>
          <button className="newbutton">Current</button>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <div className="first-block">
              <h1>{weatherData.city}</h1>
              <h2>{weatherData.day}</h2>
              <h3>{weatherData.time}</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="main-icon">
              <img alt="Sunny" src={weatherData.imgUrl} />
            </div>
          </div>

          <div className="col-3">
            <div className="grade">
              <span className="temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </span>
              <br />
              <span>{weatherData.description}</span>
              <br />
              <span>humidity: {weatherData.humidity}%</span>
              <br />
              <span>wind:{Math.round(weatherData.wind)}km/hour</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
