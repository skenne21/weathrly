import React from 'react';
import Welcome from './Welcome';
import '../styles/index.scss';
import denverData from './mock-data/CO/Denver.js'

console.log(denverData);

class App extends React.Component {
  render() {
   return (
      <div className ='App'>
        <Welcome />
      </div>
    ) 
  } 
}

export default App;