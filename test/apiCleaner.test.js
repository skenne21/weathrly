import React from 'react';
import {shallow, mount} from 'enzyme';
import apiCleaner from '../lib/helperFunction/apiCleaner.js';
import data from '../lib/mock-data/CO/Denver.js';

describe('apiCleaner', () => {

  beforeEach(() => {

  })

  it('should exist', () => {
    expect(apiCleaner).toBeDefined();
    // console.log(apiCleaner(data))
  })

  it('should return location from the api', () => {
    expect(apiCleaner(data).location).toEqual('Denver, CO')
  }) 

  it('should return date from the api', () => {
    expect(apiCleaner(data).date).toEqual(' Sun, Feb 18 2018')
  }) 

  it('should return condition from the api', () => {
    expect(apiCleaner(data).condition).toEqual('Clear')
  }) 

  it('should return temp from the api', () => {
    expect(apiCleaner(data).temp).toEqual(66.6)
  }) 

  it('should return high from the api', () => {
    expect(apiCleaner(data).high).toEqual('67')
  }) 

  it('should return low from the api', () => {
    expect(apiCleaner(data).low).toEqual('22')
  }) 

  it('should return summary from the api', () => {
    expect(apiCleaner(data).summary).toEqual('Mainly clear. Lows overnight in the low 20s.')
  }) 

  it('should return icon from the api', () => {
    expect(apiCleaner(data).icon).toEqual('http://icons.wxug.com/i/c/k/clear.gif')
  }) 

  it('should return tenDayArray from the api', () => {
    expect(apiCleaner(data).tenDayArray.length).toEqual(10)
  }) 

  it('should return sevenHourArray from the api', () => {
    expect(apiCleaner(data).sevenHourArray.length).toEqual(36)
  }) 

})
