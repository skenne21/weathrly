import React from 'react';
import HourCard from './HourCard';
import '../styles/SevenHourForecast.scss';
import denverData from './mock-data/CO/Denver.js'

const SevenHourForecast = (props) => {
  return (
    <div className='seven-hour-forecast'>
      <h2>Seven Hour Forecast</h2 >
      <div className='seven-hour-grid'>
        {
          denverData.hourly_forecast.map( (hourVal, index) => {
            while (index < 7) {
              console.log(denverData.hourly_forecast);
              return (
                <div className = 'hour-card' key = {index}>
                  <HourCard img={hourVal.icon_url}
                            hourDesc={hourVal.FCTTIME.hour_padded}
                            temp={hourVal.temp.english} />
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default SevenHourForecast;
