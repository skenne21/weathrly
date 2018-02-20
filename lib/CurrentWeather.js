import React from 'react';
import Card from './Card';
import denverData from './mock-data/CO/Denver.js';
import '../styles/CurrentWeather.scss';

class CurrentWeather extends React.Component {

  render() {
    const { 
      location,
      condition,
      temp,
      high,
      low,
      summery,
      icon } = this.props.weather;

    return (
      <div className='CurrentWeather'>
        <div className='header'>
          <h1 className='location'>{ location }</h1>
          <h2 className='weather'>{ condition }</h2>
        </div>
        <div className='Image-box'>
        <img className='weather-icon'src={ icon } alt="current weather picture" />
        <h2 className="temp"> { temp } ℉</h2>
        <ul>
          <li>High: { high } ℉ </li>
          <li>Low: { low } ℉ </li>
        </ul>
        </div>
        <p>{ summery }</p>
      </div>
    )
  }
}

export default CurrentWeather;
