import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';
import data from '../lib/mock-data/CO/Denver.js';

describe('Card compoent hour-card', () => {
  let wrapper;

  const image = "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif";

  const time = "12:00 AM";


  const degree = "29";
  
  beforeEach(() => {
    wrapper = shallow(<Card img={ image }
                            period={ time}
                            temp={ degree }/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('it should render a hour card if the props has a temp', ( ) => {
    expect(wrapper.find('div.hour-card').length).toEqual(1); 
  })

  it('it should have props  of an img, period and temp that are passed to the component when it is a hour card', () => {
    expect(wrapper.instance().props.img).toEqual(image)
    expect(wrapper.instance().props.period).toEqual(time)
    expect(wrapper.instance().props.temp).toEqual(degree)
  });
})

describe('Card componet DayCard', () => {
  let wrapper;

  const image = "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif";

  const lowTemp = '17';

  const highTemp = '67'

  const day = "SaturdaY";
  
  beforeEach(() => {
    wrapper = shallow(<Card img={ image }                     
                            period={ day }          
                            high={ highTemp } 
                            low={ lowTemp }/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('it should render a 10 day card if the props has a high and low props', ( ) => {
    expect(wrapper.find('div.DayCard').length).toEqual(1); 
  })

  it('it should have props  of an img, period and temp that are passed to the component when it is a hour card', () => {
    expect(wrapper.instance().props.img).toEqual(image)
    expect(wrapper.instance().props.period).toEqual(day)
    expect(wrapper.instance().props.high).toEqual(highTemp)
    expect(wrapper.instance().props.low).toEqual(lowTemp)
  })
})

