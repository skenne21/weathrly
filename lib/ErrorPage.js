import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import '../styles/ErrorPage.scss';

const ErrorPage = (props) => {

  const { setWeather } = props; 

  return (
    <div className='Error'>
      <header className='header'>
        <h1> Oops!!! Something Went Wrong</h1>
        <h2> Search For Your City and Get Your Forecast </h2>
        <div className='search-container'>
          <Search setWeather={ setWeather }/>
        </div>
      </header>
    </div>
  );
};

ErrorPage.propTypes = {
  setWeather: PropTypes.func
};

export default ErrorPage;