export interface CurrentWeather {
    cityName: string,
    currentTemp: number,
    maxTemp: number,
    minTemp: number,
    description: string
    humidity: number
    date: string | null
    country: string
}