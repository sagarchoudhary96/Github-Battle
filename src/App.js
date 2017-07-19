import React, { Component } from 'react';
import './App.css';
import Popular from './Popular.js'
import { Route, Switch } from 'react-router-dom'
import Nav from './nav.js'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/battle' component={Battle}/>
          <Route path='/battle/results' component={results}/>
          <Route  path='/popular' component={Popular}/>
          <Route render =  {() => (
                <p>Error 404 Not Found :(</p>
            )} />
        </Switch>
      </div>
    )
  }
}

export default App;
