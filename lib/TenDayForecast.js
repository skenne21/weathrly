import React from 'react';
import Card from './Card';
import '../styles/TenDayForecast.scss';


const TenDayForecast = (props) => {
 
  const tenDayArray = props.weather.tenDayArray || [];

  return (  
    <div className='ten-day-forecast'>
      <h2>Ten Day Forecast</h2>
      <div className='ten-day-grid'>
        {
          tenDayArray.map( (dayVal, index) => {
            return (
              <div className = 'day-card' key = {index}>
                {
                <Card img={dayVal.img}
                      period={dayVal.period}
                      high={dayVal.high}
                      low={dayVal.low} />
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default TenDayForecast;
