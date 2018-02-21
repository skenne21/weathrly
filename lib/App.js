import React from 'react';
import Welcome from './Welcome';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';
import CurrentWeather from './CurrentWeather';
import '../styles/index.scss';
// import denverData from './mock-data/CO/Denver.js';
import Search from './Search';
import storage from './storage';
import '../styles/App.scss';
import ApiKey from './apiKey';


// const currentWeather = {
//   location : denverData.current_observation.display_location.full,
//   date: denverData.current_observation.observation_time_rfc822,
//   condition: denverData.current_observation.weather,
//   temp: denverData.current_observation.temp_f,
//   high: denverData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
//   low: denverData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
//   summery: denverData.forecast.txt_forecast.forecastday[0].fcttext,
//   icon: denverData.current_observation.icon_url
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: {}
    }

    this.searchCity = this.searchCity.bind(this);

  }

  setInput(searchInput) {
    this.setState({
      location: searchInput,
    })
    console.log(this.state)
    return searchInput;
  }

  searchCity(location) {
    location = this.setInput(location);
    fetch(`https://api.wunderground.com/api/${ApiKey}/forecast10day/hourly/conditions/q/${location}.json`)
      .then( data => data.json())
      .then( data => {
        const apiData = storage(data);
        this.setState({weather: apiData});
        console.log(this.state.weather)
      })
      .catch( error => this.setState({error}));
  }

  componentDidMount() {   
    this.searchCity(this.state.location);
  }

  render() {
    return (
      <div className ='App'>
        <header className='main-header'>
          <h1> Weatherly: 
            {/*<span>{currentWeather.location}</span> */}
          </h1>
          <Search searchCity={this.searchCity}/>
        </header>
        <main className='main-section'>
          <CurrentWeather weather={this.state.weather}/> 
        </main>
      </div>
    ) 
  } 
}

export default App;