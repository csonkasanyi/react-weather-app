import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ControlledInput from './Components/ControlledInput';
import Weather from './Components/Weather';
import Forecast from './Components/Forecast';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({})
  const [notFound, setNotFound] = useState(false);

  // Current weather API
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0c7a88d9f6996cd456a746bc29badbcc&units=metric`

  // Weather forecast API
  const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=0c7a88d9f6996cd456a746bc29badbcc&units=metric`

  useEffect(() => {

    // Korábbi helyszínek adatainak törlése
    setWeatherData({});
    setWeatherForecast({});

    // Aktuális időjárási adatok lekérése
    location && axios.get(WEATHER_URL)
      .then(response => {
        setWeatherData(response.data)
        setNotFound(false)
      })
      .catch(err => {
        if (err.response.status === 404) {
          setNotFound(true)
        }
      })

    // 5 napos előrejelzés lekérése
    location && axios.get(FORECAST_URL)
      .then(response => {
        setWeatherForecast(response.data)
        setNotFound(false)
      })
      .catch(err => {
        if (err.response.status === 404) {
          setNotFound(true)
        }
      })

  }, [location])

  const searchLocation = (locationName) => {
    setLocation(locationName)
  }

  return (
    <div className="App">
      <header>
        <ControlledInput valueSubmitted={searchLocation} />
      </header>
      <main>
        {weatherData.name && <Weather weatherData={weatherData} />}
        {weatherData.name && <Forecast weatherForecast={weatherForecast} />}
        {notFound && <NotFound />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
