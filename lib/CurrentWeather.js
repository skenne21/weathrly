import React from 'react';

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
      summary,
      icon } = this.props.weather; 

    
    return (
      <div className='CurrentWeather'>
        <div className='header'>
          <h1 className='location'>{ location }</h1>
          <h2 className='weather'>{ condition }</h2>
        </div>
        <div className='Image-box'>
        <p className='date'>{ date }</p>
        <img className='weather-icon'src={ icon } alt="current weather picture" />
        <h2 className="temp"> { temp } ℉</h2>
        <ul>
          <li>High: ⬆︎{ high } ℉ </li>
          <li>Low: ⬇︎{ low } ℉ </li>
        </ul>
        </div>
        <p className='summary'>{ summary }</p>
      </div>
    )
  }
}

export default CurrentWeather;
