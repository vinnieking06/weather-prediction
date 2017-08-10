import React from 'react';
import PropTypes from 'prop-types';

const Weather = (props) => {
    const { city, temperature, description } = props;
    return (
      <div className="container">
        <div>{city}</div>
        <div style={{fontSize: '24px'}}><b> {temperature}&#176; </b></div>
        <div>{description}</div>
      </div>
    );
  }

Weather.propTypes = {
      city: PropTypes.string,
      temperature: PropTypes.number,
      description: PropTypes.string
  };

  export default Weather;
