import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';
import data from '../lib/mock-data/CO/Denver.js';

describe('Search shallow copy', () => {
  let wrapper;

  const location = 'Denver,CO';
  
  beforeEach(() => {
    wrapper = shallow(<Search setWeather={ location }/>)
  })

  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('Should have a default state with value as an empty string, searchLocation as an empty string, and suggestions an empty array', () => {
    expect(wrapper.state('value')).toEqual('');
    expect(wrapper.state('searchLocation')).toEqual('');
    expect(wrapper.state('suggestions')).toEqual([]);
  })

  it('Should render a form with an input, a button and  a datalist', () => {
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('datalist').length).toEqual(1);
  })

})


describe('Search mount copy', () => {
  let wrapper;

  const location = 'Denver,CO';
  
  const fakeFunction = () => {
    wrapper.setState( { clicked : true });
  }

  beforeEach(() => {
    wrapper = mount(<Search setWeather={() => {}} />)
  })

  it('Should change the state when  is clicked', () => {
    wrapper = shallow(<Search setWeather={ fakeFunction }/>)

    wrapper.setState({ clicked: false })

    const submitButton = wrapper.find('button');

    submitButton.simulate('click', fakeFunction);
    expect(wrapper.state().clicked).toEqual(true);

  });

  it('Should change the state of the value to an empty string when the button is clicked', () => {
    wrapper = shallow(<Search setWeather={ fakeFunction }/>)

    wrapper.setState({ value: 'Denver, CO' })

    const submitButton = wrapper.find('button');

    submitButton.simulate('click', fakeFunction);

    expect(wrapper.state().value).toEqual('');
  })

  it('Should change the state.value when there is a  change in the input', () => {
    
    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}});

    expect(wrapper.state().value).toEqual('Denver, CO'); 
  });

  it('Should set the state of searchLocation when there is a change in an input', () => {
    

    wrapper.find('input').simulate('change', {target: {value: 'Denver, CO'}});

    expect(wrapper.state().searchLocation).toEqual('Denver, CO');
  })

  it('Should populate an array of suggestions when there is an input', () => {
    

    expect(wrapper.state('suggestions')).toEqual([]);

    wrapper.find('input').simulate('change', {target: {value: 'en'}});

    expect(wrapper.state('suggestions')).toEqual(["encinitas, ca", "enid, ok"])
  })

  it('Should have an array of suggestions that is the same length as the amount of suggestions', () => {

    wrapper.setState({ suggestions: ["encinitas, ca", "enid, ok"] });

    expect(wrapper.state('suggestions').length).toEqual(2);
  })

  it('should not set the state of suggestion if there are more the 9 suggestions in the suggestionArray', () => {

    wrapper.find('input').simulate('change', {target: {value: 'r'}});
  
    expect(wrapper.state('suggestions').length).toEqual(0);
  })

  it('should set the state of suggestion if there are more less then 9 suggestions in the suggestionArray', () => {

    wrapper.find('input').simulate('change', {target: {value: 're'}});
  
    expect(wrapper.state('suggestions').length).toEqual(9);
  })

  it('should create as many options for the datalist as the are in the state of suggestions', () => {

    wrapper.setState({ suggestions: [
        'reno, nv',
        'renton, wa',
        'redding, ca',
        'redwood city, ca',
        'redlands, ca',
        'redondo beach, ca',
        'redmond, wa',
        'reading, pa',
        'revere, ma'] });

    expect(wrapper.find('option').length).toEqual(9)
  })
})



