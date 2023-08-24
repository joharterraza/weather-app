import React from "react";
import { CurrentWeather } from "../../interfaces/weather";
import styles from './WeatherCard.module.css';
interface WeatherCardProps {
    weatherInfo: CurrentWeather | null
}

const WeatherCard: React.FC<WeatherCardProps> = ({weatherInfo}) => {

    //Depending of the weather, the card is going to show a representative image
    const bgImage = (temperature: number) =>{
        return (
            !temperature ? '' :
            temperature > 28 ? 'hot' :
            temperature > 20 && temperature < 28 ? 'normal' : 'cold'
        );
    }

    return (
        <div className={styles.weatherCard}>
            <div className={styles.title_container}>
                <div className={`${styles.card_image} ${weatherInfo ? styles[bgImage(weatherInfo.currentTemp)] : ''}`}></div>
                <div className={styles.text_container}>
                    <div className={styles.title}>
                        <strong className={styles.currentTemp}>{weatherInfo?.currentTemp}°C</strong>
                        {weatherInfo?.description && (
                            <strong className={styles.description}>{weatherInfo.description}</strong>
                        )}
                        <strong className={styles.city}>
                            {weatherInfo?.cityName}
                            {weatherInfo?.country ? `,${weatherInfo?.country}` : ''}
                        </strong>
                    </div>
                </div>
            </div>              

            <div className={styles.details}>
                <span>Max temperature: <strong>{weatherInfo?.maxTemp}°C</strong></span>
                <span>Min temperature: <strong>{weatherInfo?.minTemp}°C</strong></span>
                <span>Humidity: <strong>{weatherInfo?.humidity}%</strong></span>
            </div>                 
        </div>
    )
}

export default WeatherCard;