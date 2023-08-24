import axios from 'axios';
import { CurrentWeather } from '../interfaces/weather';
import { convertToDate } from '../utils/convertDate';

const APIKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_BACKEND_URL;

const client = {
    //Get current weather from api
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
    },

    //Get forecast from api
    async getForecasts(cityName: string): Promise<CurrentWeather[] | null> {
        const response = await axios.get(`${apiUrl}forecast?q=${cityName}&appid=${APIKey}&units=metric`);        

        try {
            const forecastArray: CurrentWeather[] = [];
            if (response?.data?.list) {
                response.data.list.forEach((forecast: any) => {
                    const cityObject = {
                        cityName: response.data.city.name,
                        currentTemp: forecast?.main.temp,
                        maxTemp: forecast?.main.temp_max,
                        minTemp: forecast?.main.temp_min,
                        humidity: forecast?.main.humidity,
                        date: forecast.dt_txt,
                        country:  response.data.city.country ?  response.data.city.country : '',
                        description: forecast.weather[0].description ? forecast.weather[0].description : ''
                    }
    
                    forecastArray.push(cityObject);
                });
            }
    
            return forecastArray;
            
        } catch (error) {
            throw error;
        }       
    }
}

export default client;