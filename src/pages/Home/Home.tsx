import React from "react";
import WeatherInput from "../../components/WeatherInput/WeatherInput";

const Home: React.FC = () => {
    
    function showData(data: string) {
       console.log(data)
    }
    return (
        <div className="homePage">
            <WeatherInput searchHandler={(data) => showData(data)}/>
        </div>
    )
}

export default Home;