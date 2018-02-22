import React from 'react';
import '../styles/Card.scss';

const Card = (props) => {
  if(props.temp) {
    return (
      <div className='hour-card'>
        <h3>{props.period}</h3>
        <div className='hour-condition'>
          <h3>{props.temp}&deg;</h3>
          <img src={props.img} />
        </div>
      </div>
    )
  } else {
    return (
      <div className='DayCard'>
        <h3>{props.period}</h3>
        <img src={props.img} />
        <p className='day-high'>{props.high}&deg;</p>
        <p>{props.low}&deg;</p>
      </div>
    )
  }
}
export default Card;