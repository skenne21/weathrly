import React, { Component } from 'react';
import denverData from './mock-data/CO/Denver.js'
import apiKey from './apiKey.js'

const localData = './mock-data/'
const urlData = 'http://api.wunderground.com/api/'+ apiKey + '/forecast/conditions/forecast10day/hourly/q/'

class WeatherData extends Component {
  constructor() {
    super();
    this.state = denverData;
  }

  // setWeather(api) {
  //   fetch(api)
  //   .then(response => response.json())
  //   .then (data => {
  //     // weatherData = new WeatherData(data);
  //     this.setState({data})
  //   })
  //   console.log(this.state)
  // }
}

export default WeatherData;