import React from 'react';
import Welcome from './Welcome';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';
import CurrentWeather from './CurrentWeather';
import '../styles/index.scss';
import ApiKey from './ApiKey';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 'IL/Chicago',
      weather: {}
    }

    this.getWeather = this.getWeather.bind(this);

  }

  getWeather(location) {
    fetch(`https://api.wunderground.com/api/${ApiKey}/forecast10day/hourly/conditions/q/${location}.json`)
      .then( data => data.json())
      .then( data => {
        const denverData = data;
        console.log(data)
        this.setState({weather: data});
      })
      .catch( error => this.setState({error}));
  }

  componentDidMount() {   
    this.getWeather(this.state.location);
  }

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