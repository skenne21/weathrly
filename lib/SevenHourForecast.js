import React from 'react';
import Card from './Card';
import '../styles/SevenHourForecast.scss';
import denverData from './mock-data/CO/Denver.js'

const SevenHourForecast = (props) => {
  const sevenHourArray = props.weather.sevenHourArray || [];
  return (
    <div className='seven-hour-forecast'>
      <h2>Seven Hour Forecast</h2>
      <div className='seven-hour-grid'>
        {
          sevenHourArray.map( (hourVal, index) => {
            while (index < 7) {
              return (
                <div className = 'hour-card' key = {index}>
                  <Card img={hourVal.icon_url}
                        period={hourVal.FCTTIME.civil}
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
