import React from 'react';
import Welcome from './Welcome';
import TenDayForecast from './TenDayForecast';
import SevenHourForecast from './SevenHourForecast';
import CurrentWeather from './CurrentWeather';
import '../styles/index.scss';
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
      error: false,   
    }

    this.setWeather = this.setWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setLocationInLocalStorage = this.setLocationInLocalStorage.bind(this);
    // this.insertCityInTrie = this.insertCityInTrie.bind(this);
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
      .catch( error => this.setState( { 
          error: true } ));
  }

  setLocationInLocalStorage(location) {
    localStorage.setItem('location', location)
  }

  // insertCityInTrie() {
  //   populateTrie(this.state.trie);
  //   console.log(this.state.trie)
  //   this.setState({ triePopulated: true });
  // }

  componentDidMount() {  
    if(localStorage.location) {
      const updatedLocation = localStorage.getItem('location')
      this.setWeather(updatedLocation)
    }
    // if(this.state.triePopulated === false) {
    //   console.log('work?')
    //   this.setState({trie: new Trie()})
    //   this.insertCityInTrie();
    // }

  }
   
  render() {
    if(!this.state.location) {
      return (
        <div>
          <Welcome setWeather={this.setWeather}/> 
        </div>
      ) 
    } else if(!this.state.error) {
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
            <TenDayForecast weather={this.state.weather}/> 
            <SevenHourForecast weather={this.state.weather}/> 
          </main>
        </div>
      )
    } else {
      return (
        <div>'Error'</div>
      
      )
      
    } 
  }
}

export default App;