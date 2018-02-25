import React from 'react';
import {shallow, mount} from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import App from '../lib/App.js';
import data from '../lib/mock-data/CO/Denver.js';
import newData from '../lib/mock-data/IL/Chicago.js';


describe('CurrentWeather', () => {
  let wrapper;
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

  beforeEach(() => {
    wrapper = mount(<CurrentWeather weather={ data } />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a current weather container', () => {
    expect(wrapper.find('div.CurrentWeather').length).toEqual(1);
  })

  it('should render a header with the current location and condition', () => {
    expect(wrapper.find('div.header').length).toEqual(1);
    expect(wrapper.find('h1.location').length).toEqual(1);
    expect(wrapper.find('h2.weather').length).toEqual(1);
  })

  it('should render a main container with date, temp, summary, and image', () => {
    expect(wrapper.find('div.Image-box').length).toEqual(1);
    expect(wrapper.find('p.date').length).toEqual(1);
    expect(wrapper.find('img.weather-icon').length).toEqual(1);
    expect(wrapper.find('h2.temp').length).toEqual(1);
    expect(wrapper.find('p.summary').length).toEqual(1);
  })

  it('should render a list of the forecasted high and low', () => {
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(2);
  })

  it('should take in location prop', () => {
    const location = data.current_observation.display_location.full;
    wrapper = mount(<CurrentWeather weather={ location } />);
    expect(wrapper.props(location)).toEqual( {weather: location} );
  })

  it('should take in date prop', () => {
    const date = data.current_observation.observation_time_rfc822;
    wrapper = mount(<CurrentWeather weather={ date } />);
    expect(wrapper.props(date)).toEqual( {weather: date} );
  })

  it('should take in conditions prop', () => {
    const conditions = data.current_observation.weather;
    wrapper = mount(<CurrentWeather weather={ conditions } />);
    expect(wrapper.props(conditions)).toEqual( {weather: conditions} );
  })

  it('should take in temp prop', () => {
    const temp = data.current_observation.temp_f;
    wrapper = mount(<CurrentWeather weather={ temp } />);
    expect(wrapper.props(temp)).toEqual( {weather: temp} );
  })

  it('should take in high prop', () => {
    const high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    wrapper = mount(<CurrentWeather weather={ high } />);
    expect(wrapper.props(high)).toEqual( {weather: high} );
  })

  it('should take in low prop', () => {
    const low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    wrapper = mount(<CurrentWeather weather={ low } />);
    expect(wrapper.props(low)).toEqual( {weather: low} );
  })

  it('should take in summary prop', () => {
    const summary = data.forecast.txt_forecast.forecastday[0].fcttext;
    wrapper = mount(<CurrentWeather weather={ summary } />);
    expect(wrapper.props(summary)).toEqual( {weather: summary} );
  })

  it('should take in icon prop', () => {
    const icon = data.current_observation.icon_url;
    wrapper = mount(<CurrentWeather weather={ icon } />);
    expect(wrapper.props(icon)).toEqual( {weather: icon} );
  })

  it('should update the weather data when the location changes', () => {
    let location = data.current_observation.display_location.full;
    wrapper = mount(<CurrentWeather weather={ location } />);
    expect(wrapper.props(location)).toEqual( {weather: 'Denver, CO'} );
    location = newData.current_observation.display_location.full;
    wrapper = mount(<CurrentWeather weather={ location } />);
    expect(wrapper.props(location)).toEqual( {weather: 'Chicago, IL'} );
  })

})
