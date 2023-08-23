import axios from 'axios';
import { CurrentWeather } from '../interfaces/weather';
import { convertToDate } from '../utils/convertDate';

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
                    humidity: response.data.main.humidity,
                    date: convertToDate(response.data.dt),
                    country: response.data.sys.country ? response.data.sys.country : '',
                    description: response.data?.weather[0].description ? response.data?.weather[0].description : ''
                }
            }
            return cityInfo;
        } catch (error) {
            throw error;
        }
        
    }    
}

export default client;