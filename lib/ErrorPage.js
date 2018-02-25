import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

const ErrorPage = (props) => {

  const { setWeather } = props;

  return (
    <div className='Error'>
      <header className='header'>
        <h1> Opps!!! Something Went Wrong</h1>
        <img src="./images/sad-cloud.png" alt="Picture of a sad cloud icon"/>
        <h2> Search For Your City and Get Your Forcast </h2>
        <Search setWeather={ setWeather }/>
      </header>
    </div>
  );
};

ErrorPage.PropTypes = {
  setWeather: PropTypes.func.isRequired,
}

export default ErrorPage;