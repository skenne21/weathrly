import React from 'react';
import Welcome from './Welcome';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';
import CurrentWeather from './CurrentWeather';
import '../styles/index.scss';
import Search from './Search';
import ErrorPage from './ErrorPage.js';
import apiCleaner from './helperFunction/apiCleaner';
import '../styles/App.scss';
import ApiKey from './helperFunction/apiKey';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: {},
      error: false 
    };

    this.setWeather = this.setWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setLocationInLocalStorage = this.setLocationInLocalStorage.bind(this);
  }

  setLocation(searchInput) {
    this.setState( { location: searchInput } );
  }

  setWeather(location) {
    this.setState( {error: false} );
    this.setLocation(location);
    const url = 'https://api.wunderground.com/api/';
    const features = '/forecast10day/hourly/conditions/q/';
    
    fetch(`${url}${ApiKey}${features}${location}.json`)
      .then( response => response.json())
      .then( data => {
        const apiData = apiCleaner(data);

        this.setState( { weather: apiData } );
        this.setLocationInLocalStorage(this.state.location);
      })
      .catch( error => this.setState( { error: {error} } ));
  }

  setLocationInLocalStorage(location) {
    localStorage.setItem('location', location);
  }

  componentDidMount() {  
    if (localStorage.location) {
      const updatedLocation = localStorage.getItem('location');

      this.setWeather(updatedLocation);
    }
  }

  render() {
    if (!this.state.location) {
      return (
        <div>
          <Welcome setWeather={ this.setWeather }/> 
        </div>
      );
    } else if (!this.state.error) {
      return (
        <div className ='App'>
          <div className="grid-contanter">
            <header className='main-header'>
              <h1> 
                <span className='icon'>
                  <img src="../images/clouds-weather-icon.png"/>
                </span>
                Weatherly: 
                <span 
                  className='location'>&ensp;{ this.state.weather.location }
                </span>
              </h1>
              <Search setWeather={ this.setWeather }/>
            </header>
            <main className='main-section'>
              <CurrentWeather weather={ this.state.weather }/> 
              <TenDayForecast weather={ this.state.weather }/> 
              <SevenHourForecast weather={ this.state.weather }/>
            </main>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <ErrorPage setWeather={ this.setWeather } />
        </div>
      );
    } 
  }
}

export default App;