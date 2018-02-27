import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.scss';

const Card = (props) => {

  if (props.temp) {
    return (
      <div className='hour-card'>
        <h3>{props.period}</h3>
        <div className='hour-condition'>
          <h3>{props.temp}&deg; F</h3>
          <img src={props.img} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='DayCard'>
        <h3>{props.period}</h3>
        <img src={props.img} />
        <p className='day-high'>{props.high}&deg; F</p>
        <p>{props.low}&deg; F</p>
      </div>
    );
  }
};

Card.propTypes = {
  temp: PropTypes.string,
  period: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  high: PropTypes.string,
  low: PropTypes.string
};

Card.defaultProps = {
  period: 'Unknown',
  img: './images/sad-cloud.png',
  high: 'Unknown',
  low: 'Unknown'
};

export default Card;