import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ControlledInput from './Components/ControlledInput';
import Weather from './Components/Weather';
import NotFound from './Components/NotFound';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [notFound, setNotFound] = useState(false);

  // Current weather API
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0c7a88d9f6996cd456a746bc29badbcc&units=metric`

  useEffect(() => {
    setWeatherData({})
    location && axios.get(API_URL)
      .then(response => {
        setWeatherData(response.data)
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
      <ControlledInput valueSubmitted={searchLocation} />
      {weatherData.name && <Weather weatherData={weatherData} />}
      {notFound && <NotFound />}
    </div>
  );
}

export default App;
