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
    wrapper.setState( {error: true } );
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
    wrapper.setState( {location: 'Chicago,IL'} );
    const location = 'Atlanta,GA';
    wrapper.instance().setLocationInLocalStorage(location);
    const storage = localStorage.store.location;
    const updatedLocation = localStorage.getItem('location');
    wrapper.setState( { location: storage } );
    expect(wrapper.state().location).toEqual(location);
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
    const setWeather = jest.fn();
    const locatxion = 'Atlanta,GA'; 
    const componentDidMount = () => {
      if (localStorage.store.location) {
        const updatedLocation = localStorage.getItem('location');

        setWeather(updatedLocation);
      }
    }
    wrapper.instance().setLocationInLocalStorage(location);
    componentDidMount();
    expect(setWeather.mock.calls.length).toEqual(1);
  })

  it('should call the setLocation method on mount', () => {
    const setLocation = jest.fn();
    const location = 'Atlanta,GA';
    const setWeather = (location) => {
      setLocation(location);
    }
    wrapper.instance().setLocationInLocalStorage(location);
    setWeather();
    expect(setLocation.mock.calls.length).toEqual(1);
  })

  it('should call the setLocationInLocalStorage method on mount', () => {
    const setLocationInLocalStorage = jest.fn();
    const location = 'Atlanta,GA'; 
    const setWeather = (location) => {
      setLocationInLocalStorage(location);
    }
    wrapper.instance().setLocationInLocalStorage(location);
    setWeather();
    expect(setLocationInLocalStorage.mock.calls.length).toEqual(1);
  })

})
