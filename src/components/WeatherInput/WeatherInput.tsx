import React, { useState } from 'react';
import weatherAPI from '../../services/weather';

interface WeatherInputProps {
    searchHandler: (city: string) => void
}

const WeatherInput: React.FC<WeatherInputProps> = ({searchHandler}) => {
    const [cityValue, setCityValue] = useState<string>('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {        
        setCityValue(event.target.value);       
    };

    async function searchOnClick() {
        try {
            const response = await weatherAPI.getCurrentWeather(cityValue);
            console.log(response)
        } catch ( error ) {
            console.log(error)
        }      
    }
    return (
        <div className='inputContainer'>
            <label>Search city</label>
            <input type='text' placeholder='Type a city name' value={cityValue} onChange={handleInputChange}/>
            <button onClick={searchOnClick}>Search</button>
        </div>
    )
} 

export default WeatherInput;