import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Logging from './Logging'

import '../css/App.css';

class App extends Component {
  render(){
    return (
      <Router>
          <Route path="/" component={Logging}/>      
      </Router>
    )
  }
}

export default App;
