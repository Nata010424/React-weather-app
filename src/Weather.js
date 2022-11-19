import React from "react";
import "./weather.css";
export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    temperature: 14,
    day: "Monday",
    time: "13:00",
    description: "cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 65,
    wind: 5,
  };
  return (
    <div className="Weather">
      <div className="search-city">
        <div className="col-8 pe-3">
          <form>
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control"
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
            <span className="temp">{weatherData.temperature}</span>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |<a href="/">°F</a>
            </span>
            <br />
            <span>{weatherData.description}</span>
            <br />
            <span>humidity: {weatherData.humidity}</span>
            <br />
            <span>wind:{weatherData.wind} km/hour</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        ✌️ This website was coded by Nataliia Mykhalevych, and is
        <a href="https://github.com/Nata010424/React-weather-app">
          {" "}
          open-sourced
        </a>
      </p>
    </div>
  );
}
