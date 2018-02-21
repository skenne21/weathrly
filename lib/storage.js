const storage = (data) => {
    const readableDate = (date) => {
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

  return  {
    location : data.current_observation.display_location.full,
    date: readableDate(data.current_observation.observation_time_rfc822),
    condition: data.current_observation.weather,
    temp: data.current_observation.temp_f,
    high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit, 
    summery: data.forecast.txt_forecast.forecastday[0].fcttext,
    icon: data.current_observation.icon_url
    }
  
}





export default storage;