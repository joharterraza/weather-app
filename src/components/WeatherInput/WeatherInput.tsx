import React, { useState } from 'react';
import weatherAPI from '../../services/weather';
import { CurrentWeather } from '../../interfaces/weather';
import styles from './WeatherInput.module.css';

interface WeatherInputProps {
    searchHandler: (searchResult: CurrentWeather | null) => void
}

const WeatherInput: React.FC<WeatherInputProps> = ({searchHandler}) => {
    const [cityValue, setCityValue] = useState<string>('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {        
        setCityValue(event.target.value);       
    };

    async function searchOnClick() {
        let result = null;
        try {
            const response = await weatherAPI.getCurrentWeather(cityValue);  
            result = response;
            searchHandler(result);  
            saveLastSearch(result);        
        } catch ( error ) {
           searchHandler(result);
           saveLastSearch(result);
        }      
    }    

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
            <input type='text' placeholder='Type a city name' value={cityValue} onChange={handleInputChange} className={styles.cityInput}/>
            <button onClick={searchOnClick} className={styles.buttonSearch}>Search</button>
        </div>
    )
} 

export default WeatherInput;