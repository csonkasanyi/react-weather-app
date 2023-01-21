import React from 'react';
import '../styles/Weather.css'

const Weather = ({ weatherData }) => {
    return (
        <main>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <h3>Temperature: {Math.round(weatherData.main.temp)} °C</h3>
            <h3>Wind speed: {Math.round(weatherData.wind.speed)} km/h</h3>
            <h3>{weatherData.weather[0].description}</h3>
        </main>
    )
}

export default Weather