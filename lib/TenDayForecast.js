import React from 'react';
import DayCard from './DayCard';
import '../styles/TenDayForecast.scss';
import denverData from './mock-data/CO/Denver.js'

const TenDayForecast = (props) => {
  return (
    <div className='ten-day-forecast'>
      <h2>Ten Day Forecast</h2>
      <div className='ten-day-grid'>
        {
          denverData.forecast.simpleforecast.forecastday.map( (dayVal, index) => {
            return (
              <div className = 'day-card' key = {index}>
                <DayCard  img={dayVal.icon_url}
                          dayDesc={dayVal.date.weekday}
                          high={dayVal.high.fahrenheit}
                          low={dayVal.low.fahrenheit} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TenDayForecast;
