import React, { Component } from 'react';

localData = './mock-data/'
urlData = 'http://api.wunderground.com/api/7cea1116a6458e33/forecast/conditions/forecast10day/hourly/q/'

const Data = (city, state) => {
  return (
    <div>
      <App source={'localData' + state + '/' + city + '.json'} />
    </div>
  );
}

export default Data;