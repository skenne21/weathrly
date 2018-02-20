import React from 'react';
import '../styles/Search.scss';
import WeatherData from './WeatherData'

class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      value: '',
      location: '',
    };
  }

  render() {
    return (
      <form className='Search'> 
        <input value={this.state.value}
          onChange={ (event) => this.setState( {value: event.target.value } ) } />
        <button onClick={ () => {
          const city = this.state.value.split(', ')[0];
          const state = this.state.value.split(', ')[1];
          console.log(city, state)
          this.setState( { location: state + '/' + city } );
        } }>
          Submit
        </button>
      </form>
    )
  }
}

export default Search;