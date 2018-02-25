import React from 'react';
import {shallow, mount} from 'enzyme';
import Welcome from '../lib/Welcome.js';
import App from '../lib/App.js';
import data from '../lib/mock-data/CO/Denver.js';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Welcome weather={ data } />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a Welcome page', () => {
    expect(wrapper.find('div.Welcome').length).toEqual(1);
  })

  it('should render a header with a Weathrly heading and search prompt', () => {
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
  })

  it('should render a Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should take in a weather prop', () => {
    const location = data.current_observation.display_location.full;
    wrapper = mount(<Welcome weather={ location } />);
    expect(wrapper.props(location)).toEqual( {weather: location} );
  })

})
