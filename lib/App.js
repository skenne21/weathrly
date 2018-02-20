import React from 'react';
import Welcome from './Welcome';
import '../styles/index.scss';
import denverData from './mock-data/CO/Denver.js';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import '../styles/App.scss';

const currentWeather = {
  location : denverData.current_observation.display_location.full,
  date: denverData.current_observation.observation_time_rfc822,
  condition: denverData.current_observation.weather,
  temp: denverData.current_observation.temp_f,
  high: denverData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  low: denverData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  summery: denverData.forecast.txt_forecast.forecastday[0].fcttext,
  icon: denverData.current_observation.icon_url
}


console.log(currentWeather)


class App extends React.Component {
  constructor() {
    super()
  } 

  render() {
    
   return (

      <div className ='App'>
        <header className='main-header'>
          <h1> Weatherly: <span>{currentWeather.location}</span></h1>
          <Search />
        </header>
        <main className='main-section'>
          <CurrentWeather weather={currentWeather}/> 
        </main>
      {/* <Welcome /> */}  
      </div>
    ) 
  } 
}

export default App;