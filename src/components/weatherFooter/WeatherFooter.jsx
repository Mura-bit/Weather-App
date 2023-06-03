import "./weatherFooter.style.css";
import { getDayOfWeek, getMonth, getTime } from "../utils/helperFunction";

const WeatherFooter = () => {
    return (
      <div className="footer-app">
        <p>Today is: {getDayOfWeek()}</p>
            <p>Month is: {getMonth()}</p>
            <p>{getTime}</p>
      </div>
    );
} 

export default WeatherFooter;