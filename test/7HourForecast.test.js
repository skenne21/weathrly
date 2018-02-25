import React from 'react';
import { shallow, mount } from 'enzyme'
import SevenHourForecast from '../lib/SevenHourForecast';
import data from '../lib/mock-data/CO/Denver.js';

describe('Seven Day Forcast shallow component', () => {
  let wrapper;

  const weather = data.hourly_forecast


  beforeEach(() => {
    wrapper = shallow(<SevenHourForecast weather={ weather }/>)
  })


  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('it should have a h2 with text of Ten Day Forecast', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual('Seven Hour Forecast')
  })

  it('it should have props that are being passed to the component', () => {
    expect(wrapper.instance().props.weather).toEqual(weather)
  });
})