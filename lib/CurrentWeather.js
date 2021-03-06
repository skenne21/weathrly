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
      <div className='contanier'>
        <div className='header'>
           <h1 className='location'>{ location }</h1>
          <h2 className='weather'>{ condition }</h2>
        </div>
         <div className='Image-box'>
          <p className='date'>{ date }</p>
          <img className='weather-icon'src={ icon }
               alt="current weather picture" />
          <h2 className="temp"> { temp }&deg; F</h2>
          <ul>
            <li>High: ⬆︎{ high }&deg; F</li>
            <li>Low: ⬇︎{ low }&deg; F</li>
           </ul>
        </div>
        <p className='summary'>{ summary }</p>
      </div>
    </div>
  );
};

CurrentWeather.propTypes = {
  weather: PropTypes.oneOfType( [
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ] )
};

export default CurrentWeather;
