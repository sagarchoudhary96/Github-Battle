import React, { Component } from 'react';
import './App.css';
import Popular from './Popular.js'
import { Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="container">
      <Route path='/popular' render = {()=> (
          <Popular/>
        )}/>
    </div>  
    )
  }
}

export default App;
