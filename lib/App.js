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


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: {},
    }

    this.setWeather = this.setWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);

  }

  setLocation(searchInput) {
    this.setState({
      location: searchInput,
    })
  }

  setWeather(location) {
    this.setLocation(location);
    fetch(`https://api.wunderground.com/api/${ApiKey}/forecast10day/hourly/conditions/q/${location}.json`)
      .then( response => response.json())
      .then( data => {
        const apiData = storage(data);
        this.setState( { weather: apiData } );
        this.setLocationInLocalStorage(this.state.location)
        
      })
      .catch( error => this.setState( { error } ));
  }

  setLocationInLocalStorage(location) {
    localStorage.setItem('location', location)
  }

  // pullFromStorage() {
  //   this.state.location = localStorage.getItem('location')
  //   console.log(pullFromStorage)
  // }

  componentDidMount() {   
    this.setWeather(this.state.location);
  }

  render() {
        return (
          <div className ='App'>
            <header className='main-header'>
              <h1> Weatherly: 
                {/*
                <span>{currentWeather.location}</span>
                 */}
              </h1>
              <Search setWeather={this.setWeather}/>
            </header>
            <main className='main-section'>
              <CurrentWeather weather={this.state.weather}/> 
            </main>
          </div>
        ) 
   
}
}

export default App;