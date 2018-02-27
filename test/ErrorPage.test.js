import React from 'react';
import {shallow, mount} from 'enzyme';
import ErrorPage from '../lib/ErrorPage.js';
import App from '../lib/App.js';
import data from '../lib/mock-data/CO/Denver.js';

describe('Error', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ErrorPage weather={ data } />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a Error page', () => {
    expect(wrapper.find('div.Error').length).toEqual(1);
  })

  it('should render a header with text and an image', () => {
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(1);
  })

  it('should render a Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should take in a weather prop', () => {
    const location = data.current_observation.display_location.full;
    wrapper = mount(<ErrorPage weather={ location } />);
    expect(wrapper.props(location)).toEqual( {weather: location} );
  })

})
