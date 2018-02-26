import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import '../styles/Welcome.scss';

const Welcome = (props) => {
  const { setWeather } = props;

  return (
     <div className='Welcome'>
       <header className='header'>
       <h1>
          <span className='icon'>
            <img src="../images/clouds-weather-icon.png"/>
          </span>
          WEATHRLY </h1>
         <h2> Search For Your City and Get Your Forecast </h2>
        <Search setWeather={ setWeather }/>
      </header>
    </div>
  );
};

Welcome.propTypes = {
  setWeather: PropTypes.func
};

export default Welcome;