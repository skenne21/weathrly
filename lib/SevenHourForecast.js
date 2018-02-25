import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../styles/SevenHourForecast.scss';

const SevenHourForecast = (props) => {
  const sevenHourArray = props.weather.sevenHourArray || [];
  
  return (
    <div className='seven-hour-forecast'>
      <div className='container'>
      <h2>Seven Hour Forecast</h2>
      <div className='seven-hour-grid'>
        {
          sevenHourArray.map( (hourVal, index) => {
            while (index < 8) {
              return (
                <div className = 'hour-card' key = {index}>
                  <Card img={hourVal.icon_url}
                        period={hourVal.FCTTIME.civil}
                        temp={hourVal.temp.english} />
                </div>
              );
            }
          })
        }
      </div>
    </div>
  </div>
  );
};

SevenHourForecast.propTypes = {
  weather: PropTypes.oneOfType( [
    PropTypes.object,
    PropTypes.array
  ] ),
  sevenHourArray: PropTypes.array.isRequired
};

SevenHourForecast.defaultProps = {
  sevenHourArray: []
};

export default SevenHourForecast;
