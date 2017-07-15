import React, { Component } from 'react';
import './App.css';
import Popular from './Popular.js'
import { Route } from 'react-router-dom'
import Nav from './nav.js'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav/>
        <Route exact path='/' render = {()=>(
            <Home />
          )}/>

        <Route path='/popular' render = {()=> (
            <Popular/>
          )}/>
      </div>
    )
  }
}

export default App;
