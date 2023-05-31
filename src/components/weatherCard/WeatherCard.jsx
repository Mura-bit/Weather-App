import "./weatherCard.style.css";

const WeatherCard = (props) => {

    const { city, temperature, description, feelsLikeTemp, humidity, wind } = props;

    return (
      <div className="card-container">
        <div className="cards">
          <div>
            <h3>{city}</h3>
          </div>
          <p>Temperature: {temperature}</p>
          <p>Description: {description}</p>
          <p>Feelslike: {feelsLikeTemp}</p>
          <p>Humidity: {humidity}</p>
          <p>Wind: {wind}</p>
        </div>
      </div>
    );
}

export default WeatherCard;