import axios from 'axios';
import { CurrentWeather } from '../interfaces/weather';

const APIKey = '7d8d884865adfc12053ce680debffb04';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';

const client = {
    async getCurrentWeather(cityName: string): Promise<CurrentWeather | null> {
        try {
            const response = await axios.get(`${apiUrl}weather?q=${cityName}&appid=${APIKey}&units=metric`);
            let cityInfo = null;

            if (response.data) {
                cityInfo = {
                    cityName: response.data.name,
                    currentTemp: response.data.main.temp,
                    maxTemp: response.data.main.temp_max,
                    minTemp: response.data.main.temp_min,
                    humidity: response.data.main.humidity
                }
            }
            return cityInfo;
        } catch (error) {
            throw error;
        }
        
    }
}

export default client;