import React from 'react';
import '../styles/Search.scss';

const Search = () => {
 return (
    <div className='Search'> 
      <input id="search_input" type="search" placeholder="Search For Your City" />
      <button>Enter</button>
    </div>

  )
}

export default Search;