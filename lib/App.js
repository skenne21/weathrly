import React from 'react';
import Welcome from './Welcome';
import '../styles/index.scss';
// import denverData from './mock-data/CO/Denver.js';
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

  render() {
   return (
      <div className ='App'>
        <Welcome />
      </div>
    ) 
  } 
}

export default App;