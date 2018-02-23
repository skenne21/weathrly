import React from 'react';
import Search from './Search';
import '../styles/Welcome.scss';

const Welcome = (props) => {
  const { setWeather } = props;

  return (
     <div className='Welcome'>
       <header className='header'>
         <h1> WEATHRLY </h1>
         <h2> Search For Your City and Get Your Forcast </h2>
        <Search setWeather={ setWeather }/>
      </header>
    </div>
  );
};

export default Welcome;