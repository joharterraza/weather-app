import React, { useState } from 'react';

interface WeatherInputProps {
    searchHandler: (city: string) => void
}

const WeatherInput: React.FC<WeatherInputProps> = ({searchHandler}) => {
    const [cityValue, setCityValue] = useState<string>('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {        
        setCityValue(event.target.value);       
    };

    function searchOnClick() {
        searchHandler(cityValue)
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