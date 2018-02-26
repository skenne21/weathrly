import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.scss';
import trie  from './helperFunction/autoComplete';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchLocation: '',
      suggestions: []
    };

    this.onUserInput = this.onUserInput.bind(this);
    this.suggestLocation = this.suggestLocation.bind(this);
  }

  onUserInput(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      this.props.setWeather(this.state.searchLocation);
      this.setState({value: ''});
    } else {
      this.suggestLocation(event.target.value); 
      this.setState( {value: event.target.value} );
      this.setState( {searchLocation: event.target.value} );
    }  
  }

  suggestLocation(prefix) {
    const suggestionArray = trie.suggest(prefix);

    if (suggestionArray.length < 10) {
      this.setState( { suggestions: suggestionArray } );
    } else {
      this.setState( { suggestions: [] } );
    }
  }

  render() {
    return (
      <div className='Search'> 
        <form>
          <input  id="searchInput"
                  list="suggestions"
                  value={this.state.value} 
                  type="text" 
                  placeholder="Search For City/State"  
                  onChange={ this.onUserInput }/>
          <button type="submit"
                  disabled={!this.state.value}
                  onClick={()=> {
                    this.props.setWeather(this.state.searchLocation);
                    this.setState({value: ''});
                  }}>Enter</button>
          <datalist id="suggestions">
            {
              this.state.suggestions.map((suggestion, index) => {
                return (
                  <option key = {index} 
                          value = {suggestion} />
                );
              })
            }
          </datalist>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  setWeather: PropTypes.oneOfType( [
    PropTypes.func,
    PropTypes.string
  ] )
};

export default Search;