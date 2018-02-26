import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../lib/App.js';
import Welcome from '../lib/Welcome.js';
import LocalStorage from './__mock-test-data__/mock-local-storage.js';

describe('App shallow copy', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state with location as an empty string, weather as an empty object, and error equal to false', () => {
    expect(wrapper.state('location')).toEqual('');
    expect(wrapper.state('weather')).toEqual({});
    expect(wrapper.state('error')).toEqual(false);
  })

  it('should render Welcome if state does not have a location', () => {
    expect(wrapper.state('location')).toEqual('');
    expect(wrapper.find('Welcome').length).toEqual(1);
  })

  it('should render App component with a header and main if state has a location and state.error is false', () => {
    wrapper.setState( {location: 'Denver, CO'} )
    expect(wrapper.state('error')).toEqual(false);
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('main').length).toEqual(1);
  })

  it('should render ErrorPage and Search components if state.error equals true', () => {
    wrapper.setState( {location: 'Denver, CO'} );
    wrapper.setState( {error: true} );
    expect(wrapper.find('ErrorPage').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(0);
  })

    it('should save location to local storage', () => {
    const location = 'Chicago,IL';
    wrapper.setState( {location: 'Chicago,IL'} );
    wrapper.instance().setLocationInLocalStorage(location);
    const storage = localStorage.store.location;
    expect(storage).toEqual('Chicago,IL')
  })

  it('should retrieve data from local storage on mount', () => {
    wrapper.setState( {location: 'Chicago,IL'} ); //set initial location to Chicago
    const location = 'Atlanta,GA'; //this will be the new location
    wrapper.instance().setLocationInLocalStorage(location); //save location to local storage
    const storage = localStorage.store.location; //simulated local storage
    const updatedLocation = localStorage.getItem('location'); //updatedLocation pull from local storage
    wrapper.setState( { location: storage } ) //set state to location pulled from local storage
    expect(wrapper.state().location).toEqual(location); //expect state to equal new location
  })

})

describe('App mount copy', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<App/>)
  })

  it('should render App component with a header and Search component if state has a location and state.error is false', () => {
    wrapper.setState( {location: 'Chicago,IL'} );
    expect(wrapper.state('location')).toEqual('Chicago,IL');
    expect(wrapper.state('error')).toEqual(false);
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should render App component with a CurrentWeather component if state has a location and state.error is false', () => {
    wrapper.setState( {location: 'Chicago,IL'} );
    expect(wrapper.state('location')).toEqual('Chicago,IL');
    expect(wrapper.state('error')).toEqual(false);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
  })

  it('should render App component with a TenDayForecast component if state has a location and state.error is false', () => {
    wrapper.setState( {location: 'Chicago,IL'} );
    expect(wrapper.state('location')).toEqual('Chicago,IL');
    expect(wrapper.state('error')).toEqual(false);
    expect(wrapper.find('TenDayForecast').length).toEqual(1);
  })

  it('should render App component with a SevenHourForecast component if state has a location and state.error is false', () => {
    wrapper.setState( {location: 'Chicago,IL'} );
    expect(wrapper.state('location')).toEqual('Chicago,IL');
    expect(wrapper.state('error')).toEqual(false);
    expect(wrapper.find('SevenHourForecast').length).toEqual(1);
  })

    it('should call the componentDidMount method on mount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(spy).toHaveBeenCalled();
  })

  it('should call the setWeather method on mount', () => {
    const spy = jest.spyOn(App.prototype, 'setWeather');
    const wrapper = mount(<App location = 'Chicago,IL' />);
    expect(spy).toHaveBeenCalled();
  })

  it('should call the setLocationInLocalStorage method on mount', () => {
    const spy = jest.spyOn(App.prototype, 'setLocationInLocalStorage');
    const wrapper = mount(<App location = 'Chicago,IL' />);
    expect(spy).toHaveBeenCalled();
  })



})
