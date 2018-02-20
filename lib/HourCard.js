import React from 'react';
import '../styles/HourCard.scss';

const HourCard = (props) => {
  return (
    <div className='hour-card'>
      <h3>{props.hourDesc}:00</h3>
      <div className='hour-condition'>
        <h3>{props.temp}&deg;</h3>
        <img src={props.img} />
      </div>
    </div>
  )
}

export default HourCard;