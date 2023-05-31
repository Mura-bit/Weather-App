import { useState } from "react";
import "./weatherApp.style.css";
import axios from "axios"; 
import WeatherCard from "../weatherCard/WeatherCard.jsx";

const WeatherApp = () => {
    const [temperature, setTemperature] = useState(0);
    const [description, setDescription] = useState("");
    const [feelsLikeTemp, setFeelsLikeTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);
    const [city, setCity] = useState("");
    const [searchedCity, setSearchedCity] = useState("");

    const onClickHandler = async () => {
        try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=imperial&appid=355cf3bff397cfe55bf144d10da9b2d8`
            );

            const { data } = response;
            //set the data
            setTemperature(data.main.temp)
            setDescription(data.weather[0].description)
            setFeelsLikeTemp(data.main.feels_like);
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setCity(data.name)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeHandler = (e) => {
        setSearchedCity(e.target.value)
    }
    
    return (
      <div className="container">
            <input placeholder="Enter city name" type="text" onChange={onChangeHandler} value={searchedCity} />
            <button onClick={onClickHandler}>Get the weather</button>
            <WeatherCard
                city={city}
                temperature={temperature}
                descriptio={description}
                feelsLikeTemp={feelsLikeTemp}
                humidity={humidity}
                wind={wind}
            />
      </div>
    );
}

export default WeatherApp;