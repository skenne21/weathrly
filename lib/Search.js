import React from 'react';
import '../styles/Search.scss';

class Search extends React.Component {

  submitCity(event) {
    event.preventDefault();
    console.log(this.searchInput.value)

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