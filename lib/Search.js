import React from 'react';
import '../styles/Search.scss';
import WeatherData from './WeatherData'

class Search extends React.Component {

  submitCity(event) {
    event.preventDefault();

    // const inputArray = this.searchInput.value.split(', ');
    // const city = inputArray[0];
    // const state = inputArray[1];

  
  }


  render() {

    return (
      <form className='Search' onSubmit={this.submitCity.bind(this)}> 
        <input id="searchInput" type="search" placeholder="Search For Your City"  ref={(input) => { this.searchInput = input }} />
        <button type="submit">Enter</button>
      </form>
    )
  }
}

export default Search;