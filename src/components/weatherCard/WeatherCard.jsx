import React from "react";
import "./weatherCard.style.css";
import WeatherFooter from "../weatherFooter/WeatherFooter";

const WeatherCard = (props) => {

    const { city, temperature, description, feelsLikeTemp, humidity, wind, icon } = props;

    return (
      <div className="card-container">
        <div className="cards">
          <div className="temp-card">
            <h3 className="city-name">{city}</h3>
            <p className="temp">{temperature}</p>
            <img
              className="temp-img"
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="weather"
            />
          </div>
          <div className="temp-card-desc">
            <p className="temp-feels">Feelslike: {feelsLikeTemp}</p>
            <p>{description}</p>
            <p>Humidity: {humidity}</p>
            <p>Wind: {wind}</p>
          </div>
          <div>
            {WeatherFooter}
          </div>
        </div>
      </div>
    );
}

export default WeatherCard;