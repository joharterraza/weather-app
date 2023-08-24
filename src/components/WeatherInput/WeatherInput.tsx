import React, { useState } from 'react';
import weatherAPI from '../../services/weather';
import { CurrentWeather, SearchResults } from '../../interfaces/weather';
import styles from './WeatherInput.module.css';

interface WeatherInputProps {
    searchHandler: (searchResult: SearchResults) => void
}

const WeatherInput: React.FC<WeatherInputProps> = ({ searchHandler }) => {
    const [cityValue, setCityValue] = useState<string>('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCityValue(event.target.value);
    };

    //Build the variable to emit { searchResults }
    async function searchOnClick() {
        const [currentWeatherResult, forecastsResult] = await Promise.all([
            currentWeatherHandler(),
            forecastsHandler()
        ]);

        const combinedResults = {
            currentWeather: currentWeatherResult,
            forecasts: forecastsResult
        };

        searchHandler(combinedResults);
    }

    //Get current weather
    async function currentWeatherHandler() {
        try {
            const response = await weatherAPI.getCurrentWeather(cityValue);
            saveLastSearch(response);
            return response
        } catch (error) {
            saveLastSearch(null);
        }
    }

    //Get forecast
    async function forecastsHandler() {
        try {
            const response = await weatherAPI.getForecasts(cityValue);
            return response
        } catch (error) {
            console.log(error);
        }
    }

    //Save last search in local storage
    function saveLastSearch(city: CurrentWeather | null) {
        if (!city) {
            localStorage.removeItem("lastWeatherSearch");
        } else {
            const stringJson = JSON.stringify(city);
            localStorage.setItem("lastWeatherSearch", stringJson);
        }
    }

    return (
        <div className={styles.inputContainer}>
            <input type='text' placeholder='Type a city name' value={cityValue} onChange={handleInputChange} className={styles.cityInput} />
            <button onClick={searchOnClick} className={styles.buttonSearch}>Search</button>
        </div>
    )
}

export default WeatherInput;