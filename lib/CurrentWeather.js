import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CurrentWeather.scss';

const CurrentWeather = (props) => {
  const { 
    location,
    date,
    condition,
    temp,
    high,
    low,
    summary,
    icon } = props.weather; 

  return (
    <div className='CurrentWeather'>
      <div className='header'>
         <h1 className='location'>{ location }</h1>
        <h2 className='weather'>{ condition }</h2>
      </div>
       <div className='Image-box'>
        <p className='date'>{ date }</p>
        <img className='weather-icon'src={ icon }
             alt="current weather picture" />
        <h2 className="temp"> { temp } ℉</h2>
        <ul>
           <li>High: ⬆︎{ high } ℉ </li>
          <li>Low: ⬇︎{ low } ℉ </li>
         </ul>
      </div>
      <p className='summary'>{ summary }</p>
    </div>
  );
};

CurrentWeather.PropTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  high: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired,
}

CurrentWeather.defaultProps = {
  location: 'Unknown',
  date: 'Unknown',
  condition: 'Unknown',
  temp: 'Unknown',
  high: 'Unknown',
  low: 'Unknown',
  summary: 'Unknown',
  weather: {},
}

export default CurrentWeather;
