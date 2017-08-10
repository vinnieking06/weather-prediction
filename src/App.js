import React, { Component } from 'react';
import getWeatherForCurrentLocation from './utils';
import NavBar from './NavBar';
import Rain from './Rain';
import Error from './Error';
import Loader from './Loader';
import Weather from './Weather';
import Footer from './Footer';
import './App.css';

export default class App extends Component {
  state = {
    loading: true,
    rain: '',
    city: '',
    temperature: '',
    description: '',
    err: false
  };

  componentDidMount() {
      getWeatherForCurrentLocation()
        .then((data) => {
          this.setState({ 
            rain: data.rain,
            loading: false,
            city: data.city,
            temperature: data.temperature,
            description: data.description });
         })
        .catch((err) => {
          console.log(err);
          this.setState({err: true})
        })
  }

  render() {
    const { loading, rain, city, temperature, description, err  } = this.state;
    return (
      <div id='body-content'>
        <NavBar />
         { err ? 
            <Error /> :
          loading ?
            <Loader /> :
          <div id='core'>
            <Weather city={city} temperature={temperature} description={description} />
            <Rain rain={rain} />
            <hr />
          </div>
        } 
        <Footer />
      </div>
    );
  }
}
