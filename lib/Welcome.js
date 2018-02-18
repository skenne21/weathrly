import React from 'react';
import Search from './Search';
import '../styles/Welcome.scss';


const Welcome = () => {
  return (
    <div className='Welcome'>
      <h1> WEATHRLY </h1>
      <h2> Search For Your City and Get Your Forcast </h2>
      <Search/>
      <button> Enter</button>
    </div>
  )
}

export default Welcome;