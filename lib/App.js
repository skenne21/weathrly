import React from 'react';
import Welcome from './Welcome';
import '../styles/index.scss';

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