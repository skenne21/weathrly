import React from 'react';
import { shallow, mount } from 'enzyme'
import TenDayForecast from '../lib/TenDayForecast';
import Card from '../lib/Card';
import data from '../lib/mock-data/CO/Denver.js';

describe('10 Day Forcast shallow copy', () => {
  let wrapper;

  const weather = data.forecast.simpleforecast.forecastday

  beforeEach(() => {
    wrapper = shallow(<TenDayForecast weather={ weather }/>)
  })


  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('it should have a h2 with text of Ten Day Forecast', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual('Ten Day Forecast')
  })

  it('it should have props that are being passed to the component', () => {
    expect(wrapper.instance().props.weather).toEqual(data.forecast.simpleforecast.forecastday)
  });
})


