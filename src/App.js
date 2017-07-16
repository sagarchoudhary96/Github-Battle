import React, { Component } from 'react';
import './App.css';
import Popular from './Popular.js'
import { Route, Switch } from 'react-router-dom'
import Nav from './nav.js'
import Home from './Home'
import Battle from './Battle'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav/>
        <Switch>
          <Route exact path='/' render = {()=>(
              <Home />
            )}/>

          <Route exact path='/battle' render = {() => (
              <Battle />
            )}/>

          <Route  path='/popular' render = {()=> (
              <Popular/>
            )}/>
          <Route render =  {() => (
                <p>Error 404 Not Found :(</p>
            )} />
        </Switch>
      </div>
    )
  }
}

export default App;
