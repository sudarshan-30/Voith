import React, { useEffect, useMemo } from 'react';
import './App.css';
import { API_KEY, API_URL } from "./utils";
import { CitiesComponent } from "./components/CitiesComponent";
import { WeatherDetails } from "./components/WeatherDetails";


function App() {
  const [weatherDetails, setWeatherDetails] = React.useState(null);
  const [requestInProgress, toggleRequestInProgress] = React.useState(false);

  const latLongDetails = useMemo(() => {
    return [{ city: 'Germany', lat: 51.1657, lng: 10.4515 }, { city: 'Heidenheim', lat: 48.6786, lng: 10.1507 }]
  }, [])


  const getDetails = async (lat, lng) => {
    try {
      toggleRequestInProgress(true);
      const apiRes = await fetch(`${API_URL}?lat=${lat}&lon=${lng}&appid=${API_KEY}`);
      const weatherDetails = await apiRes.json();
      setWeatherDetails(weatherDetails);
      toggleRequestInProgress(false);
    } catch (e) {
      alert("Please try again later");
      toggleRequestInProgress(false);
    }
  }
  
  return (
    <div className="App">
      <h1>Voith - Technical Assignment</h1>
      <CitiesComponent getDetails={getDetails} latLongDetails={latLongDetails} />
      {requestInProgress ? <div className="loader"></div> :
        weatherDetails ? <WeatherDetails weatherDetails={weatherDetails} /> : null}
    </div>
  );
}

export default App;
