import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Slideshow from '../components/Slideshow/Slideshow';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navigation />
      	<Slideshow />
      </div>
    );
  }
}

export default App;
