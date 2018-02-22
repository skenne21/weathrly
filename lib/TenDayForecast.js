import React from 'react';
import Card from './Card';
import '../styles/TenDayForecast.scss';
import denverData from './mock-data/CO/Denver.js'

const TenDayForecast = (props) => {
  const tenDayArray = props.weather.tenDayArray || []
  return (
    <div className='ten-day-forecast'>
      <h2>Ten Day Forecast</h2>
      <div className='ten-day-grid'>
        {
          tenDayArray.map( (dayVal, index) => {
            return (
              <div className = 'day-card' key = {index}>
                <Card img={dayVal.icon_url}
                      period={dayVal.date.weekday}
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
