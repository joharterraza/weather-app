import React, { useState } from "react";
import WeatherInput from "../../components/WeatherInput/WeatherInput";
import { CurrentWeather } from "../../interfaces/weather";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import styles from './Home.module.css';

const Home: React.FC = () => {
    const [isSearchTriggered, setIsSearchTriggered] = useState<Boolean>(false);
    const [cityResult, setCityResult] = useState<CurrentWeather | null>(null);
    
    function showData(data: CurrentWeather | null) {
       setCityResult(data);
       setIsSearchTriggered(true);
    }

    return (
        <div className={styles.homePage}>
            <WeatherInput searchHandler={(data) => showData(data)}/>
            {isSearchTriggered && (
                <aside>                    
                    {cityResult ? (
                        <WeatherCard weatherInfo={cityResult}/>
                    ) : (
                        <p className={styles.not_found}>No city result available.</p>
                    )}
                </aside>
            )}
        </div>
    )
}

export default Home;