import React from "react";
import WeatherInput from "../../components/WeatherInput/WeatherInput";
import { CurrentWeather } from "../../interfaces/weather";

const Home: React.FC = () => {
    
    function showData(data: CurrentWeather | null) {
       console.log(data)
    }
    return (
        <div className="homePage">
            <WeatherInput searchHandler={(data) => showData(data)}/>
        </div>
    )
}

export default Home;