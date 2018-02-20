import React from 'react';
import '../styles/DayCard.scss';

const DayCard = (props) => {
  return (
    <div className='DayCard'>
      <h3>{props.dayDesc}</h3>
      <img src={props.img} />
      <p className='day-high'>{props.high}&deg;</p>
      <p>{props.low}&deg;</p>
    </div>
  )
}

export default DayCard;