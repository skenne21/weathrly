import React from 'react';
import Welcome from './Welcome';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';
import '../styles/index.scss';
import denverData from './mock-data/CO/Denver.js';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import '../styles/App.scss';
import ApiKey from './apiKey';


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
    this.state = {
      location : [],
      data: {}
    }
    this.setLocation = this.setLocation.bind(this)
  }

  findCity(location) {
    console.log(this.state.location)
    fetch(`https://api.wunderground.com/api/${apiKey}/forecast10day/hourly/conditions/q/${location}.json`) 
  } 

  setLocation(location) {
    console.log(this.state.location)
  }


  render() {
    

   
    if(!this.state.location.length) {
      return (
        <Welcome searchCity={this.state.location}/>
      )
    } else{
      return (
      <div className ='App'>
        <header className='main-header'>
          <h1> Weatherly: <span>{currentWeather.location}</span></h1>
          <Search searchCity={this.state.location}/>
        </header>
        <main className='main-section'>
          <CurrentWeather weather={currentWeather}/> 
        </main>
      </div>
    ) 
  } 
}
}

export default App;