import React from 'react';
import PropTypes from 'prop-types';
import sunglasses from './../public/sunglasses.png';
import umbrella from './../public/umbrella.png';

const Rain = (props) => {
  if (props.rain) {
    return (
      <div id='rain'> 
       <p> Do you need an umbrella? <b>Yes</b> </p>
       <img src={umbrella} alt='Beautiful Umbrella!' />
    </div>
    ) 
  }
    return (
      <div id='rain'> 
        <p> Do you need an umbrella? <b>No</b> </p>
       <img src={sunglasses} alt='Sweet glasses!' />
    </div>
    ) 
}

Rain.propTypes = {
  rain: PropTypes.bool
}

export default Rain;