import React from 'react';
import '../styles/Search.scss';
import WeatherData from './WeatherData'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      inputArray: []
    }

    // this.submitCity = this.submitCity.bind(this)
  }
  
     
   
     
    
    
    
    // const inputArray = this.searchInput.value.split(', ');
    // const city = inputArray[0];
    // const state = inputArray[1];

  
  


  render() {
    
    return (
      <div>
        <div className='Search'> 
          <input  id="searchInput" 
                  value={this.state.value} 
                  type="search" 
                  placeholder="Search For Your City"  
                  onChange={ (event) => {
                    this.setState({
                      value: event.target.value
                    })}}/>
          <button type="submit"
                  disabled={!this.state.value}
                  onClick={()=> {
                    
                    this.props.searchCity.push(this.state.value)
                    console.log(this.props.searchCity)
                    this.setState({value: ''})
                  }}>Enter</button>
        </div>
      </div>
    )
  }
}

export default Search;