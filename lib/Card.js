import React from 'react';
import '../styles/DayCard.scss';
const DayCard = (props) => {
  return (
    <div className='DayCard'>
      <h3>{props.period}</h3>
      <img src={props.img} />
      { if(props.temp) {
        return (
          <h3>{props.temp}&deg;</h3>
          )
      } else {
        return (
        <p className='day-high'>{props.high}&deg;</p>
        <p>{props.low}&deg;</p>
        )
    } }
    </div>
  )
}
export default DayCard;