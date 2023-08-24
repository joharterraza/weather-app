import React from 'react';
import { CurrentWeather } from '../../interfaces/weather';
import styles from './Forecast.module.css';
import WeatherCard from '../WeatherCard/WeatherCard';

interface ForecastProps {
    forecast: CurrentWeather[] | null | undefined
}
const Forecast: React.FC<ForecastProps> = ({forecast}) => {

    return (
        <div className={styles.forecast_container}>
            {forecast?.map((element) => (
                <aside>
                    <strong className={styles.forecast_date}>{element.date}</strong>
                    <WeatherCard key={element.date} weatherInfo={element}/>
                </aside>              
            ))}
        </div>
    )
}

export default Forecast;