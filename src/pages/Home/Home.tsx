import React, { useEffect, useState } from "react";
import WeatherInput from "../../components/WeatherInput/WeatherInput";
import { SearchResults } from "../../interfaces/weather";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Forecast from "../../components/Forecast/Forecast";
import styles from './Home.module.css';

const Home: React.FC = () => {
    const [results, setResults] = useState<SearchResults>({ currentWeather: null, forecasts: null });

    useEffect(() => {
        validateLastSearch();
    }, [])

    //Get from local storage last search
    function validateLastSearch() {
        let lastSearch = localStorage.getItem("lastWeatherSearch");

        if (lastSearch) {
            try {
                const parsedJson = JSON.parse(lastSearch);
                const resultsCopy = { ...results }
                resultsCopy.currentWeather = parsedJson;
                setResults(resultsCopy);
            } catch (error) {
                console.log(error);
            }
        }
    }

    //Receive search results
    function showData(data: SearchResults) {
        setResults(data);
    }

    return (
        <div className={`${styles.homePage} page`}>
            <WeatherInput searchHandler={(data) => showData(data)} />
            {results.currentWeather ? (
                <aside>
                    <strong className={styles.weather_title}>Current weather</strong>
                    <WeatherCard weatherInfo={results.currentWeather} />
                </aside>
            ) : (
                <p className={styles.not_found}>No city result available.</p>
            )}

            {results.forecasts && (
                <aside>
                    <strong className={`${styles.weather_title} ${styles.title_forecast}`}>Forecast 3 hour / step</strong>
                    <Forecast forecast={results.forecasts} />
                </aside>
            )}
        </div>
    )
}

export default Home;