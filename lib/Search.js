import React from 'react';
import '../styles/Search.scss';
import WeatherData from './WeatherData';


class Search extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: '',
        searchLocation: '',
      }

    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(event) {
    this.setState({ value: event.target.value })
    this.setState({searchLocation: event.target.value});
    console.log(this.state) 
  }

  render() { 
    console.log(this.props)
    return (
      <div>
        <div className='Search'> 
          <input  id="searchInput" 
            value={this.state.value} 
            type="search" 
            placeholder="Search For Your City"  
            onChange={ this.setLocation}/>
          <button type="submit"
            disabled={!this.state.value}
            onClick={()=> {
              this.props.setWeather(this.state.searchLocation)
              this.setState({value: ''})
         }}>Enter</button>
        </div>
      </div>
    )
  }
}

export default Search;