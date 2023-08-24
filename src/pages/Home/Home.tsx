import React, { useEffect, useState } from "react";
import WeatherInput from "../../components/WeatherInput/WeatherInput";
import { CurrentWeather } from "../../interfaces/weather";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import styles from './Home.module.css';

const Home: React.FC = () => {    
    const [cityResult, setCityResult] = useState<CurrentWeather | null>(null);

    useEffect(() => {
        validateLastSearch();
    }, [])

    function validateLastSearch() {
        let lastSearch = localStorage.getItem("lastWeatherSearch");

        if (lastSearch) {
            try {
                const parsedJson = JSON.parse(lastSearch);
                setCityResult(parsedJson);
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    function showData(data: CurrentWeather | null) {
       setCityResult(data);       
    }

    const bgImage = (temperature: number) =>{
        return (
            !temperature ? '' :
            temperature > 28 ? 'hot' :
            temperature > 20 && temperature < 28 ? 'normal' : 'cold'
        );
    }

    return (
        <div className={`${styles.page_background} ${cityResult ? styles[bgImage(cityResult.currentTemp)] : ''}`}>
            <div className={`${styles.homePage} page`}>
                 <WeatherInput searchHandler={(data) => showData(data)}/>
                {cityResult ? (
                    <WeatherCard weatherInfo={cityResult}/>
                ) : (
                    <p className={styles.not_found}>No city result available.</p>
                )}
            </div>           
        </div>
    )
}

export default Home;