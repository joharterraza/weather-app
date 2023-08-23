import React from "react";
import { CurrentWeather } from "../../interfaces/weather";

interface WeatherCardProps {
    weatherInfo: CurrentWeather | null
}

const WeatherCard: React.FC<WeatherCardProps> = ({weatherInfo}) => {
    return (
        <div className="weatherCard">
            <p>Date: {weatherInfo?.date} </p>
            <p>City: {weatherInfo?.cityName}</p>
            <p>Temp: {weatherInfo?.currentTemp}</p>
            <p>Max temp: {weatherInfo?.maxTemp}</p>
            <p>Min temp: {weatherInfo?.minTemp}</p>
            <p>Humidity: {weatherInfo?.humidity}</p>
        </div>
    )
}

export default WeatherCard;