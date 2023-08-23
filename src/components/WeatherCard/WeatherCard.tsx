import React from "react";
import { CurrentWeather } from "../../interfaces/weather";
import styles from './WeatherCard.module.css';
interface WeatherCardProps {
    weatherInfo: CurrentWeather | null
}

const WeatherCard: React.FC<WeatherCardProps> = ({weatherInfo}) => {
    return (
        <div className={styles.weatherCard}>
            <div className={styles.title}>
                <span>{weatherInfo?.date}</span>
                <strong>
                    {weatherInfo?.cityName}
                    {weatherInfo?.country ? `,${weatherInfo?.country}` : ''}
                </strong>
            </div>  

            <div className={styles.content}>
                <div className={styles.current}>
                    <strong className={styles.currentTemp}>{weatherInfo?.currentTemp}°C</strong>

                    {weatherInfo?.description && (
                        <strong className={styles.description}>{weatherInfo.description}</strong>
                    )}
                </div>
                
                <div className={styles.details}>
                    <span>Max temp: {weatherInfo?.maxTemp}°C</span>
                    <span>Min temp: {weatherInfo?.minTemp}°C</span>
                    <span>Humidity: {weatherInfo?.humidity}%</span>
                </div>
            </div>                  
        </div>
    )
}

export default WeatherCard;