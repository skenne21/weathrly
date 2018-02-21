import React from 'react';

import denverData from './mock-data/CO/Denver.js';
import '../styles/CurrentWeather.scss';

class CurrentWeather extends React.Component {
  render() {
    const { 
      location,
      date,
      condition,
      temp,
      high,
      low,
      summery,
      icon } = this.props.weather; 

    const readableDate = () => {
      let orginal = date.split('');
      orginal.splice(16, 30)
      let recombine = orginal.join('');
      let newDate = recombine.split(' ');
      let month = newDate.splice(2, 1);
      newDate.splice(1, 0, ...month)
      return newDate.reduce((acc, word) => {
        return acc += ' ' + word
      }, '') 
    }

    const newDate = readableDate();

    return (
      <div className='CurrentWeather'>
        <div className='header'>
          <h1 className='location'>{ location }</h1>
          <h2 className='weather'>{ condition }</h2>
        </div>
        <div className='Image-box'>
        <p className='date'> { newDate }</p>
        <img className='weather-icon'src={ icon } alt="current weather picture" />
        
        <h2 className="temp"> { temp } ℉</h2>
        <ul>
          <li>High: { high } ℉ </li>
          <li>Low: { low } ℉ </li>
        </ul>
        </div>
        <p className='summery'>{ summery }</p>
      </div>
    )
  }
}

export default CurrentWeather;
